# Tuan-Cuong Vuong - AI Research Portfolio

A professional academic portfolio website built with Jekyll and optimized for GitHub Pages. This site showcases research publications, blog posts, and professional information for AI researcher Tuan-Cuong Vuong.

## Features

- **Responsive Design**: Mobile-first design with sidebar navigation
- **Publications System**: Organized by journal and conference publications with metadata
- **Blog**: Paginated blog with automatic thumbnail extraction
- **CV Integration**: Embedded PDF curriculum vitae
- **Contact & Office Hours**: Professional contact information with Google Meet integration
- **SEO Optimized**: Open Graph tags, Twitter Cards, and sitemap
- **Accessibility**: WCAG compliant with keyboard navigation support

## Quick Start

### 1. Repository Setup

1. Create a new repository named `cngvng.github.io` on GitHub
2. Clone this repository locally:
   ```bash
   git clone https://github.com/cngvng/cngvng.github.io.git
   cd cngvng.github.io
   ```

### 2. Add Required Assets

Before deploying, add these required files:

#### Images
- `assets/img/profile.png` - Your professional portrait (recommended: 400x400px, square)
- `assets/img/default-thumb.jpg` - Default blog thumbnail (recommended: 600x400px)

#### Documents
- `assets/cv/cv.pdf` - Your curriculum vitae

#### Publications (Optional)
- `assets/papers/` - PDF files of your publications
- `assets/posters/` - Conference posters
- `assets/slides/` - Presentation slides

### 3. Local Development (Optional)

To test locally before deploying:

```bash
# Install Ruby and Bundler (if not already installed)
# On macOS: brew install ruby
# On Ubuntu: sudo apt install ruby-full

# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### 4. Deploy to GitHub Pages

1. Push all files to your repository:
   ```bash
   git add .
   git commit -m "Initial commit: Portfolio site"
   git push origin main
   ```

2. Configure GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

3. Wait 1-2 minutes for deployment
4. Visit `https://cngvng.github.io`

## Site Structure

```
.
├── _config.yml              # Site configuration
├── _layouts/                # HTML templates
│   ├── default.html         # Base layout
│   ├── home.html            # Homepage layout
│   ├── publications.html    # Publications index
│   ├── publication.html     # Single publication
│   └── post.html            # Blog post
├── _includes/               # Reusable components
│   ├── sidebar.html         # Navigation sidebar
│   └── pub-list.html        # Publication card
├── _publications/           # Publication markdown files
│   ├── 2025-multimodal-learning.md
│   ├── 2024-explainable-ai-healthcare.md
│   └── 2024-adversarial-robustness.md
├── _posts/                  # Blog posts
│   └── 2025-10-01-welcome.md
├── _data/                   # Data files
│   ├── interests.yml        # Research interests
│   └── contacts.yml         # Contact information
├── assets/                  # Static assets
│   ├── css/main.scss        # Styles
│   ├── img/                 # Images
│   ├── papers/              # Publication PDFs
│   ├── posters/             # Posters
│   ├── slides/              # Slides
│   ├── cv/                  # CV PDF
│   └── blog/                # Blog images
├── index.md                 # Homepage
├── publications/index.md    # Publications page
├── blog.md                  # Blog index (paginated)
├── cv.md                    # CV page
└── contact.md               # Contact page
```

## Customization

### Update Personal Information

Edit `_config.yml`:

```yaml
owner_name: "Your Name"
owner_affiliation: "Your Institution"
owner_email: "your.email@example.com"

socials:
  scholar: "https://scholar.google.com/..."
  orcid: "https://orcid.org/..."
  github: "https://github.com/username"
  linkedin: "https://www.linkedin.com/in/username"
  x: "https://x.com/username"
```

### Add New Publications

Create a new file in `_publications/` with this format:

```yaml
---
title: "Your Paper Title"
authors: ["First Author", "Tuan-Cuong Vuong", "Last Author"]
year: 2025
venue: "Conference or Journal Name"
type: "journal"  # or "conference"
doi: "https://doi.org/..."
pdf: "/assets/papers/filename.pdf"
code: "https://github.com/..."
abstract: |
  Your abstract here...
---

Optional additional content in Markdown format.
```

### Add Blog Posts

Create files in `_posts/` with naming format: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-10-01 10:00:00 +0700
thumbnail: "/assets/blog/image.jpg"  # Optional
---

Your post content in Markdown...
```

### Update Research Interests

Edit `_data/interests.yml`:

```yaml
- "Machine Learning"
- "Computer Vision"
- "Your Interest Here"
```

### Update Contact Links

Edit `_data/contacts.yml`:

```yaml
- label: "Your Institution"
  url: "https://institution.edu"
- label: "Email"
  url: "mailto:your@email.com"
```

## Styling

The site uses a custom SCSS stylesheet at `assets/css/main.scss`. Key CSS variables:

```scss
:root {
  --accent: #3b82f6;        // Primary accent color
  --me: #c0392b;            // Author name highlight color
  --text: #1f2937;          // Main text color
  --text-light: #6b7280;    // Secondary text color
}
```

Modify these in `main.scss` to change the color scheme.

## GitHub Pages Compatibility

This site uses only GitHub Pages-supported plugins:
- `jekyll-seo-tag` - SEO optimization
- `jekyll-sitemap` - XML sitemap generation
- `jekyll-feed` - RSS feed
- `jekyll-paginate` - Blog pagination

No custom plugins are required or used.

## Troubleshooting

### Site Not Loading

1. Check GitHub Pages settings in repository Settings → Pages
2. Ensure branch is set to `main` and folder is `/ (root)`
3. Wait 2-3 minutes after pushing changes

### Images Not Displaying

1. Verify image paths start with `/assets/`
2. Check image files are committed and pushed to repository
3. Ensure filenames match exactly (case-sensitive)

### Publications Not Showing

1. Check files are in `_publications/` directory
2. Verify front matter is properly formatted (valid YAML)
3. Ensure `type` is set to either `"journal"` or `"conference"`
4. Check that owner name in authors matches `owner_name` in `_config.yml` exactly

### Blog Pagination Not Working

1. Ensure blog posts are in `_posts/` directory
2. Verify filenames follow format: `YYYY-MM-DD-title.md`
3. Check that `date` in front matter is valid

## Support

For issues or questions:
- Email: cngvng.work@gmail.com
- GitHub: [@cngvng](https://github.com/cngvng)

## License

This portfolio site structure is available for personal academic use. Please customize with your own content and information.

---

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/)
