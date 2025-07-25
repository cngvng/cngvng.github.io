# BibTeX Parser Plugin for Jekyll
# Parses conferences.bib and journals.bib files and generates structured YAML data
# Handles error cases for malformed BibTeX syntax

require 'yaml'
require 'date'

module Jekyll
  class BibtexGenerator < Generator
    safe true
    priority :high

    def generate(site)
      Jekyll.logger.info "BibTeX Parser:", "Starting BibTeX file processing..."
      
      # Parse conference publications
      conferences_path = File.join(site.source, '_data', 'conferences.bib')
      site.data['conferences'] = parse_bibtex_file(conferences_path, 'conferences')
      
      # Parse journal publications
      journals_path = File.join(site.source, '_data', 'journals.bib')
      site.data['journals'] = parse_bibtex_file(journals_path, 'journals')
      
      Jekyll.logger.info "BibTeX Parser:", "Processed #{site.data['conferences'].length} conference papers"
      Jekyll.logger.info "BibTeX Parser:", "Processed #{site.data['journals'].length} journal articles"
    end

    private

    def parse_bibtex_file(file_path, type)
      unless File.exist?(file_path)
        Jekyll.logger.warn "BibTeX Parser:", "File not found: #{file_path}"
        return []
      end

      begin
        content = File.read(file_path, encoding: 'UTF-8')
        entries = extract_bibtex_entries(content)
        
        parsed_entries = entries.map do |entry|
          parse_bibtex_entry(entry, type)
        end.compact
        
        # Sort by year (descending) and then by title
        parsed_entries.sort_by { |entry| [-entry['year'].to_i, entry['title'].to_s] }
        
      rescue => e
        Jekyll.logger.error "BibTeX Parser:", "Error processing #{file_path}: #{e.message}"
        []
      end
    end

    def extract_bibtex_entries(content)
      entries = []
      
      # Remove comments (lines starting with %)
      content = content.gsub(/^%.*$/, '')
      
      # Find all @entry{...} blocks
      entry_pattern = /@(\w+)\s*\{\s*([^,]+)\s*,\s*(.*?)\n\s*\}/m
      
      content.scan(entry_pattern) do |entry_type, key, fields|
        entries << {
          type: entry_type.downcase,
          key: key.strip,
          fields: fields
        }
      end
      
      entries
    end

    def parse_bibtex_entry(entry, publication_type)
      begin
        fields = parse_bibtex_fields(entry[:fields])
        
        # Create base entry structure
        parsed_entry = {
          'key' => entry[:key],
          'type' => entry[:type],
          'title' => clean_bibtex_string(fields['title']),
          'authors' => parse_authors(fields['author']),
          'year' => fields['year']&.to_i || 0
        }
        
        # Add type-specific fields
        if publication_type == 'conferences'
          parsed_entry.merge!(parse_conference_fields(fields))
        else
          parsed_entry.merge!(parse_journal_fields(fields))
        end
        
        # Add optional common fields
        add_optional_fields(parsed_entry, fields)
        
        # Validate required fields
        validate_entry(parsed_entry, publication_type)
        
        parsed_entry
        
      rescue => e
        Jekyll.logger.error "BibTeX Parser:", "Error parsing entry #{entry[:key]}: #{e.message}"
        nil
      end
    end

    def parse_bibtex_fields(fields_string)
      fields = {}
      
      # Split fields by comma, but handle nested braces
      field_pattern = /(\w+)\s*=\s*(\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|"[^"]*"|[^,]+)/
      
      fields_string.scan(field_pattern) do |key, value|
        # Clean up the value
        cleaned_value = value.strip
        
        # Remove outer braces or quotes
        if cleaned_value.start_with?('{') && cleaned_value.end_with?('}')
          cleaned_value = cleaned_value[1..-2]
        elsif cleaned_value.start_with?('"') && cleaned_value.end_with?('"')
          cleaned_value = cleaned_value[1..-2]
        end
        
        fields[key.downcase] = cleaned_value.strip
      end
      
      fields
    end

    def parse_authors(author_string)
      return [] unless author_string
      
      # Split by 'and' and clean up each author
      authors = author_string.split(/\s+and\s+/i).map do |author|
        clean_bibtex_string(author.strip)
      end
      
      authors.reject(&:empty?)
    end

    def parse_conference_fields(fields)
      {
        'booktitle' => clean_bibtex_string(fields['booktitle']),
        'conference' => clean_bibtex_string(fields['booktitle']),
        'pages' => fields['pages'],
        'location' => fields['address'] || fields['location'],
        'organization' => fields['organization'] || fields['publisher']
      }
    end

    def parse_journal_fields(fields)
      {
        'journal' => clean_bibtex_string(fields['journal']),
        'volume' => fields['volume'],
        'number' => fields['number'] || fields['issue'],
        'pages' => fields['pages'],
        'publisher' => fields['publisher']
      }
    end

    def add_optional_fields(entry, fields)
      # Add DOI if present
      entry['doi'] = fields['doi'] if fields['doi']
      
      # Add URL if present
      entry['url'] = fields['url'] if fields['url']
      
      # Add abstract if present
      entry['abstract'] = clean_bibtex_string(fields['abstract']) if fields['abstract']
      
      # Add keywords if present
      if fields['keywords']
        entry['keywords'] = fields['keywords'].split(/[,;]/).map(&:strip)
      end
      
      # Add note if present
      entry['note'] = clean_bibtex_string(fields['note']) if fields['note']
    end

    def clean_bibtex_string(str)
      return '' unless str
      
      # Remove extra whitespace and newlines
      cleaned = str.gsub(/\s+/, ' ').strip
      
      # Handle LaTeX commands (basic cleanup)
      cleaned = cleaned.gsub(/\\[a-zA-Z]+\{([^}]*)\}/, '\1')  # \command{text} -> text
      cleaned = cleaned.gsub(/\{([^}]*)\}/, '\1')            # {text} -> text
      cleaned = cleaned.gsub(/``/, '"').gsub(/''/,'"')       # LaTeX quotes
      cleaned = cleaned.gsub(/---/, '—').gsub(/--/, '–')     # LaTeX dashes
      
      cleaned
    end

    def validate_entry(entry, publication_type)
      required_fields = ['title', 'authors', 'year']
      
      if publication_type == 'conferences'
        required_fields << 'booktitle'
      else
        required_fields << 'journal'
      end
      
      missing_fields = required_fields.select { |field| entry[field].nil? || entry[field].to_s.empty? }
      
      unless missing_fields.empty?
        Jekyll.logger.warn "BibTeX Parser:", "Entry #{entry['key']} missing required fields: #{missing_fields.join(', ')}"
      end
      
      # Warn about suspicious years
      year = entry['year'].to_i
      if year < 1900 || year > Date.today.year + 5
        Jekyll.logger.warn "BibTeX Parser:", "Entry #{entry['key']} has suspicious year: #{year}"
      end
    end
  end
end