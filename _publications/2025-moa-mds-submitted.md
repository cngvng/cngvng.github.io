---
title: "Training-Free Mixture of Agents for Multi-Document Summarization Leveraging LLMs and Knowledge Graphs"
authors: 
  - name: "Tuan-Cuong Vuong"
    type: "co-first"
  - name: "Trang Mai Xuan"
    type: "corresponding"
  - name: "Cuong Nguyen Tien"
  - name: "Luong Thien Van"
year: 2025
venue: "Neural Computing and Applications"
type: "journal"
status: "revised"
tags: ["Multi-Agent", "NLP", "LLM"]
preview_image: "/assets/img/publications/moa-mds-2025.png"
paper_link: "https://cngvng.github.io/publications"
pdf: "/assets/papers/moa-mds-2025.pdf"
code: "https://github.com/cngvng/MDSAgent"
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

Multi-Document Summarization (MDS) play a critical role in distilling essential information from collections of textual data. Existing approaches often struggle to capture complex inter-document relationships, rely heavily on large amounts of labeled data for supervised training, or exhibit limited generalization across domains and languages. To address these limitations, we present a training-free mixture-of-agents framework for MDS that leverages the complementary strengths of large language models (LLMs) and knowledge graphs. Our approach decomposes summarization into specialized agent tasks: extractive selection, knowledge-aware abstraction, and iterative refinement, each operating without task-specific fine-tuning. We unify their outputs using a multi-perspective consistency mechanism guided by LLMs.} Experiments across four datasets in English and Vietnamese demonstrate state-of-the-art or competitive performance, validating the effectiveness and adaptability of our modular design.