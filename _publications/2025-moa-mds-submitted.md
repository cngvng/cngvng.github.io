---
title: "Training-Free Mixture of Agents for Multi-Document Summarization Leveraging LLMs and Knowledge Graphs"
authors: ["Tuan-Cuong Vuong", "Trang Mai Xuan", "Cuong Nguyen Tien", "Luong Thien Van"]
year: 2025
venue: "Neural Computing and Applications"
type: "journal"
status: "submitted"
date: "2025-11-15"
abstract: |
  Multi-Document Summarization (MDS) play a critical role in distilling essential information from 
  collections of textual data. Existing approaches often struggle to capture complex inter-document 
  relationships, rely heavily on large amounts of labeled data for supervised training, or exhibit 
  limited generalization across domains and languages. To address these limitations, we introduce the 
  Mixture of Agents (MoA) framework, a novel, training-free and modular paradigm for MDS. MoA orchestrates 
  three specialized agents operating in parallel across refinement layers: (1) an Extractor Agent that 
  selects key sentences, (2) a KGSum Agent that constructs and summarizes knowledge graphs, and (3) an 
  Abstractor Agent that generates coherent abstractive summaries. Each agent leverages pre-trained Large 
  Language Models (LLMs), enabling MoA to operate without task-specific supervised training. This work 
  introduces a multi-agent architecture for MDS and provides comprehensive evaluations on both English 
  and Vietnamese datasets. Experiments on four benchmarks—Multi-News, Multi-XScience (English), VN-MDS, 
  and ViMs (Vietnamese)—demonstrate that MoA achieves state-of-the-art ROUGE scores on Multi-News and 
  yields competitive or superior results on the remaining datasets. Our findings highlight MoA as a 
  robust, generalizable, and data-efficient approach to MDS.
---

## Abstract

Multi-Document Summarization (MDS) play a critical role in distilling essential information from collections of textual data. Existing approaches often struggle to capture complex inter-document relationships, rely heavily on large amounts of labeled data for supervised training, or exhibit limited generalization across domains and languages.

To address these limitations, we introduce the Mixture of Agents (MoA) framework, a novel, training-free and modular paradigm for MDS. MoA orchestrates three specialized agents operating in parallel across refinement layers:

1. **Extractor Agent**: Selects key sentences from input documents
2. **KGSum Agent**: Constructs and summarizes knowledge graphs 
3. **Abstractor Agent**: Generates coherent abstractive summaries

Each agent leverages pre-trained Large Language Models (LLMs), enabling MoA to operate without task-specific supervised training.

## Key Contributions

1. **Novel Multi-Agent Architecture**: First training-free mixture of agents framework for MDS
2. **Knowledge Graph Integration**: Innovative use of knowledge graphs for capturing inter-document relationships
3. **Cross-lingual Evaluation**: Comprehensive evaluation on both English and Vietnamese datasets
4. **State-of-the-art Performance**: Achieves SOTA ROUGE scores on Multi-News dataset
5. **Training-free Approach**: No need for task-specific supervised training

## Experimental Results

### Datasets Evaluated
- **Multi-News** (English): State-of-the-art ROUGE scores
- **Multi-XScience** (English): Competitive performance
- **VN-MDS** (Vietnamese): Superior results
- **ViMs** (Vietnamese): Competitive performance

### Key Findings
- MoA demonstrates robust performance across languages and domains
- Training-free approach shows superior generalization
- Knowledge graph integration effectively captures inter-document relationships

## Method Overview

### Mixture of Agents (MoA) Framework
- **Modular Design**: Three specialized agents working in parallel
- **Refinement Layers**: Multi-layer architecture for iterative improvement
- **LLM-Powered**: Leverages pre-trained language models
- **Training-Free**: No supervised training required

### Agent Architecture
1. **Extractor Agent**: Sentence-level key information extraction
2. **KGSum Agent**: Knowledge graph construction and summarization
3. **Abstractor Agent**: Final coherent summary generation

## Publication Status

- **Status**: Submitted to Neural Computing and Applications
- **Submission Date**: November 15, 2025
- **arXiv Preprint**: Available at arXiv:2410.02827

## Keywords

Multi-Document Summarization, Large Language Models, Mixture of Agents, Knowledge Graphs, Training-Free Methods