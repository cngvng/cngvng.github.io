---
title: "BERT-VBD: Vietnamese Multi-Document Summarization Framework"
authors: ["Tuan-Cuong Vuong", "Mai, Xuan Trang", "Luong, Van Thien"]
year: 2024
venue: "Proceedings of the 13th International Conference on Information Technology and Its Applications (CITA 2024)"
type: "conference"
pages: "70-80"
publisher: "Vietnam-Korea University of Information and Communication Technology"
isbn: "978-604-80-9774-5"
uri: "https://elib.vku.udn.vn/handle/123456789/4014"
doi: "https://doi.org/10.48550/arXiv.2409.12134"
pdf: ""
code: ""
slides: ""
abstract: |
  In tackling the challenge of Multi-Document Summarization (MDS), numerous methods have been proposed, 
  spanning both extractive and abstractive summarization techniques. However, each approach has its own 
  limitations, making it less effective to rely solely on either one. An emerging and promising strategy 
  involves a synergistic fusion of extractive and abstractive summarization methods. Despite the plethora 
  of studies in this domain, research on the combined methodology remains scarce, particularly in the 
  context of Vietnamese language processing. This paper presents a novel Vietnamese MDS framework leveraging 
  a two-component pipeline architecture that integrates extractive and abstractive techniques. The first 
  component employs an extractive approach to identify key sentences within each document. This is achieved 
  by a modification of the pre-trained BERT network, which derives semantically meaningful phrase embeddings 
  using siamese and triplet network structures. The second component utilizes the VBD-LLaMA2-7B-50b model 
  for abstractive summarization, ultimately generating the final summary document. Our proposed framework 
  demonstrates a positive performance, attaining ROUGE-2 scores of 39.6% on the VN-MDS dataset and 
  outperforming the state-of-the-art baselines.
---

## Abstract

In tackling the challenge of Multi-Document Summarization (MDS), numerous methods have been proposed, spanning both extractive and abstractive summarization techniques. However, each approach has its own limitations, making it less effective to rely solely on either one. An emerging and promising strategy involves a synergistic fusion of extractive and abstractive summarization methods.

Despite the plethora of studies in this domain, research on the combined methodology remains scarce, particularly in the context of Vietnamese language processing. This paper presents a novel Vietnamese MDS framework leveraging a two-component pipeline architecture that integrates extractive and abstractive techniques.

## Method

### Two-Component Pipeline Architecture

1. **Extractive Component**: 
   - Modified pre-trained BERT network
   - Identifies key sentences within each document
   - Uses siamese and triplet network structures for semantically meaningful phrase embeddings

2. **Abstractive Component**:
   - Utilizes VBD-LLaMA2-7B-50b model
   - Generates the final summary document from extracted key sentences

## Results

- **Dataset**: VN-MDS (Vietnamese Multi-Document Summarization dataset)
- **Performance**: ROUGE-2 scores of 39.6%
- **Comparison**: Outperforms state-of-the-art baselines

## Key Contributions

1. **Novel Vietnamese MDS Framework**: First comprehensive framework combining extractive and abstractive methods for Vietnamese
2. **BERT-based Extraction**: Modified BERT with siamese and triplet networks for better phrase embeddings
3. **LLaMA2 Integration**: Effective use of VBD-LLaMA2-7B-50b for Vietnamese abstractive summarization
4. **Superior Performance**: Achieves state-of-the-art results on Vietnamese MDS dataset

## Conference Details

- **Conference**: CITA 2024 (13th International Conference on Information Technology and Its Applications)
- **Date**: July 2024
- **Publisher**: Vietnam-Korea University of Information and Communication Technology
- **Pages**: 70-80
- **ISBN**: 978-604-80-9774-5

## Keywords

Multi-Document Summarization, Extractive Summarization, Abstractive Summarization, Vietnamese NLP, BERT, LLaMA2