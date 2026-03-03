---
title: "PIKE: A Multimodal Framework Fusing Physiological Priors and Knowledge Graphs for Short-Sequence EHR Prediction"
authors: 
  - name: "Tuan-Cuong Vuong"
    type: "co-first"
  - name: "Trang Xuan Mai"
    type: "corresponding"
  - name: "Son Thai Mai"
  - name: "Duong Tung Ta"
  - name: "Thien Van Luong"
year: 2026
venue: "IEEE Transactions on Neural Networks and Learning Systems"
type: "journal"
status: "Under Review"
tags: ["Machine Learning", "Healthcare", "Knowledge Graphs", "Multimodal Learning"]
preview_image: "/assets/img/publications/pike-2026.png"
paper_link: "https://cngvng.github.io/publications"
pdf: "/assets/papers/pike-2026.pdf"
code: "https://github.com/cngvng/pike"
abstract: |
  Electronic Health Record (EHR) prediction from short sequences poses significant challenges due to limited 
  temporal information and sparse medical events. This paper presents PIKE (Physiological priors and 
  Knowledge graphs for EHR prediction), a novel multimodal framework that addresses these challenges by 
  integrating physiological domain knowledge with structured medical knowledge graphs. Our approach combines 
  three key components: (1) physiological prior extraction to capture domain-specific patterns, (2) knowledge 
  graph construction to model relationships among medical entities, and (3) a fusion mechanism that 
  effectively integrates these multimodal signals for accurate prediction. Extensive experiments on real-world 
  EHR datasets demonstrate that PIKE significantly outperforms existing methods, especially on short sequences 
  where traditional approaches struggle.
---

## Abstract

Electronic Health Record (EHR) prediction from short sequences poses significant challenges due to limited temporal information and sparse medical events. This paper presents PIKE (Physiological priors and Knowledge graphs for EHR prediction), a novel multimodal framework that addresses these challenges by integrating physiological domain knowledge with structured medical knowledge graphs. Our approach combines three key components: (1) physiological prior extraction to capture domain-specific patterns, (2) knowledge graph construction to model relationships among medical entities, and (3) a fusion mechanism that effectively integrates these multimodal signals for accurate prediction. Extensive experiments on real-world EHR datasets demonstrate that PIKE significantly outperforms existing methods, especially on short sequences where traditional approaches struggle.

## Key Contributions

1. **Multimodal Framework**: Novel integration of physiological priors and knowledge graphs for EHR prediction
2. **Short-Sequence Focus**: Specifically designed to handle limited temporal information
3. **Knowledge Graph Integration**: Structured representation of medical knowledge to enhance predictions
4. **Physiological Priors**: Incorporation of domain-specific physiological patterns
5. **Superior Performance**: Significant improvements over state-of-the-art methods on short sequences

## Method Overview

### Three-Component Architecture

1. **Physiological Prior Extraction**:
   - Captures domain-specific patterns from medical data
   - Leverages physiological relationships between vital signs and conditions

2. **Knowledge Graph Construction**:
   - Models relationships among medical entities (diagnoses, medications, procedures)
   - Incorporates medical ontologies and clinical guidelines

3. **Multimodal Fusion**:
   - Effectively integrates physiological priors and knowledge graph embeddings
   - Adaptive attention mechanism for optimal information combination

## Keywords

Electronic Health Records, Knowledge Graphs, Multimodal Learning, Healthcare AI, Short-Sequence Prediction, Physiological Priors
