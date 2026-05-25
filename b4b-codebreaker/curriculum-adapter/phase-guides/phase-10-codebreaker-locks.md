# Phase 10 CodeBreaker Locks: LLMs from Scratch

## Purpose

This file maps the actual Phase 10 LLMs from Scratch lessons into beginner-safe CodeBreaker Challenges.

Phase 10 is where the learner moves from transformer architecture into the full lifecycle of language model construction.

The goal is not to memorize every modern LLM technique first.

The goal is to understand the system path:

Text becomes tokens. Tokens become training examples. Pretraining builds broad capability. Tuning makes behavior useful. Evaluation checks quality. Optimization makes deployment practical. Architecture choices shape performance.

## Phase 10 Challenge Doctrine

Every LLM concept should answer four beginner questions:

1. What stage of the LLM lifecycle does this support?
2. Does it affect data, training, tuning, evaluation, compression, inference, or architecture?
3. What problem does it solve?
4. What can go wrong if misunderstood?

## Difficulty Progression

- Spark Lock: recognize and explain
- Signal Lock: decode and interpret
- Circuit Lock: apply or compare
- System Lock: connect across the LLM lifecycle
- Boss Lock: combine LLM construction concepts

---

# Lesson 01: Tokenizers — BPE, WordPiece, SentencePiece

## CodeBreaker Challenge: Tokenizer Door 002

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Tokenizers

### Smallest Useful Truth

Tokenizers break text into pieces an LLM can process.

### Pop-Culture Bridge

Tokenizers are like cutting language into LEGO bricks before the model builds with them.

### Where the Analogy Works

Both turn a larger object into reusable pieces.

### Where the Analogy Stops

Tokens are not always full words. They can be subwords, spaces, punctuation, or special symbols.

### Mission

Explain why tokenizers matter.

### The Lock

Why does an LLM need a tokenizer before training or generation?

### Hint 1

The model needs model-usable pieces, not raw human meaning.

### Break Condition

The learner explains that tokenizers convert text into tokens or token IDs the model can process.

---

# Lesson 02: Building a Tokenizer from Scratch

## CodeBreaker Challenge: Build the Cutter 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Tokenizer construction

### Smallest Useful Truth

Building a tokenizer reveals how text becomes model input.

### Pop-Culture Bridge

Building a tokenizer is like designing your own LEGO brick cutter instead of only using premade pieces.

### Where the Analogy Works

Both show how raw material becomes reusable units.

### Where the Analogy Stops

Tokenizer construction uses algorithms and text statistics, not physical cutting.

### Mission

Explain why building one helps understanding.

### The Lock

Why learn to build a tokenizer instead of only using one from a library?

### Hint 1

You understand what the library hides.

### Break Condition

The learner explains that building a tokenizer reveals how text is split, counted, merged, encoded, and decoded.

---

# Lesson 03: Data Pipelines for Pre-Training

## CodeBreaker Challenge: Training Stream 001

### Lock Type

Sequence

### Difficulty

System Lock

### Concept

Pretraining data pipelines

### Smallest Useful Truth

A data pipeline prepares text examples for model training.

### Pop-Culture Bridge

A data pipeline is like preparing meals for an athlete: quality, consistency, and timing shape training.

### Where the Analogy Works

Both supply material needed for development.

### Where the Analogy Stops

Data pipelines process text, tokens, batches, filters, and labels, not food.

### Mission

Order the pipeline.

### The Lock

Order these steps:

- Create batches
- Collect text
- Tokenize text
- Filter or clean data
- Train model

### Hint 1

Start with raw text.

### Break Condition

The learner gives a reasonable order: collect text, filter/clean data, tokenize text, create batches, train model.

---

# Lesson 04: Pre-Training a Mini GPT

## CodeBreaker Challenge: Mini GPT Engine 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Pretraining a GPT-style model

### Smallest Useful Truth

Pretraining teaches a GPT-style model to predict next tokens from previous tokens.

### Pop-Culture Bridge

Pretraining is like a long general training arc before a specific mission.

### Where the Analogy Works

Both build broad capability before specialization.

### Where the Analogy Stops

Pretraining is token prediction and optimization, not personal discipline.

### Mission

Explain what a mini GPT learns during pretraining.

### The Lock

What is the model usually trying to predict during GPT-style pretraining?

### Hint 1

The next token.

### Break Condition

The learner explains that GPT-style pretraining teaches next-token prediction.

---

# Lesson 05: Scaling — Distributed Training, FSDP, DeepSpeed

## CodeBreaker Challenge: Scale the Build 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Distributed training

### Smallest Useful Truth

Distributed training spreads large training work across multiple devices or machines.

### Pop-Culture Bridge

Distributed training is like building a city with coordinated crews instead of one person with a hammer.

### Where the Analogy Works

Both divide large work across coordinated workers.

### Where the Analogy Stops

Distributed training has synchronization, memory, communication, sharding, and failure challenges.

### Mission

Explain why distributed training exists.

### The Lock

Why might a large LLM be too difficult to train on one GPU?

### Hint 1

Think memory and time.

### Break Condition

The learner explains that large models require multiple devices for memory, speed, and scale.

---

# Lesson 06: Instruction Tuning — SFT

## CodeBreaker Challenge: Follow the Instruction 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Supervised fine-tuning

### Smallest Useful Truth

Instruction tuning teaches a pretrained model to follow tasks using example instructions and responses.

### Pop-Culture Bridge

Instruction tuning is like giving a talented athlete the playbook.

### Where the Analogy Works

Both adapt broad ability to specific task behavior.

### Where the Analogy Stops

SFT trains on examples, not human comprehension or motivation.

### Mission

Explain why SFT comes after pretraining.

### The Lock

Why is a base pretrained model not automatically a good assistant?

### Hint 1

It may predict text without following instructions well.

### Break Condition

The learner explains that SFT teaches instruction-following response patterns.

---

# Lesson 07: RLHF — Reward Model + PPO Training

## CodeBreaker Challenge: Human Preference Loop 001

### Lock Type

Connect

### Difficulty

System Lock

### Concept

RLHF

### Smallest Useful Truth

RLHF uses human preference feedback to train models toward preferred responses.

### Pop-Culture Bridge

RLHF is like a chef testing two dishes with customers and adjusting based on which one they prefer.

### Where the Analogy Works

Both use preference feedback to improve outputs.

### Where the Analogy Stops

RLHF uses reward models and optimization methods such as PPO, not taste alone.

### Mission

Explain what human preferences add.

### The Lock

Why might two technically valid answers not be equally useful to a user?

### Hint 1

People may prefer clarity, safety, usefulness, or tone.

### Break Condition

The learner explains that human preference data helps shape responses toward preferred behavior.

---

# Lesson 08: DPO — Direct Preference Optimization

## CodeBreaker Challenge: Chosen vs Rejected 001

### Lock Type

Decode

### Difficulty

Circuit Lock

### Concept

DPO

### Smallest Useful Truth

DPO trains directly from preferred and rejected response pairs.

### Pop-Culture Bridge

DPO is like showing two draft answers and saying, “More like this one, less like that one.”

### Where the Analogy Works

Both learn from comparisons.

### Where the Analogy Stops

DPO is a mathematical training objective, not simple style coaching.

### Mission

Explain what DPO data contains.

### The Lock

A DPO example has a chosen response and a rejected response. What signal does that provide?

### Hint 1

It shows preference.

### Break Condition

The learner explains that DPO learns from preferred response pairs.

---

# Lesson 09: Constitutional AI & Self-Improvement

## CodeBreaker Challenge: Principle Review 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Constitutional AI

### Smallest Useful Truth

Constitutional AI uses written principles to guide critique and revision.

### Pop-Culture Bridge

Constitutional AI is like a hero code: not every possible action is acceptable.

### Where the Analogy Works

Both use principles to guide behavior.

### Where the Analogy Stops

Constitutional AI is implemented through prompts, critiques, revisions, and training methods, not moral character.

### Mission

Explain why principles matter.

### The Lock

Why might likely text not always be acceptable text?

### Hint 1

Likely can still be unsafe, false, or unhelpful.

### Break Condition

The learner explains that principles help guide outputs toward acceptable behavior.

---

# Lesson 10: Evaluation — Benchmarks, Evals, LM Harness

## CodeBreaker Challenge: Model Report Card 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

LLM evaluation

### Smallest Useful Truth

Evaluation checks whether an LLM performs well on the tasks that matter.

### Pop-Culture Bridge

Evaluation is like checking a mission report against the actual mission footage.

### Where the Analogy Works

Both compare output against evidence and goals.

### Where the Analogy Stops

Benchmarks and evals can be incomplete, gamed, stale, or misaligned with real use.

### Mission

Explain why evaluation is needed.

### The Lock

A model sounds fluent but fails a task. What does this show?

### Hint 1

Fluency is not the same as success.

### Break Condition

The learner explains that evaluation must test task performance, not only response style.

---

# Lesson 11: Quantization — INT8, GPTQ, AWQ, GGUF

## CodeBreaker Challenge: Smaller Backpack 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Quantization

### Smallest Useful Truth

Quantization reduces numerical precision to make models smaller or faster.

### Pop-Culture Bridge

Quantization is like packing a huge tool kit into a smaller backpack while trying not to lose the essentials.

### Where the Analogy Works

Both reduce size while preserving usefulness.

### Where the Analogy Stops

Quantization changes numerical precision and can affect output quality.

### Mission

Explain why quantization matters for deployment.

### The Lock

Why might a model be quantized before running on limited hardware?

### Hint 1

Think memory and speed.

### Break Condition

The learner explains that quantization can reduce memory use and improve practical deployment.

---

# Lesson 12: Inference Optimization

## CodeBreaker Challenge: Faster Token Kitchen 001

### Lock Type

Connect

### Difficulty

System Lock

### Concept

Inference optimization

### Smallest Useful Truth

Inference optimization improves how fast and efficiently a model generates outputs.

### Pop-Culture Bridge

Inference optimization is like tuning a restaurant kitchen so meals come out faster without changing the recipe.

### Where the Analogy Works

Both improve serving speed and throughput.

### Where the Analogy Stops

Inference optimization involves compute, memory, caching, batching, and kernels.

### Mission

Explain why good answers still need optimization.

### The Lock

A model gives great answers but takes 40 seconds each time. What system problem appears?

### Hint 1

Latency.

### Break Condition

The learner explains that inference speed, cost, and efficiency need optimization.

---

# Lesson 13: Building a Complete LLM Pipeline

## CodeBreaker Challenge: Lifecycle Builder 001

### Lock Type

Sequence

### Difficulty

System Lock

### Concept

Complete LLM pipeline

### Smallest Useful Truth

A complete LLM pipeline connects data, tokenization, training, tuning, evaluation, optimization, and deployment.

### Pop-Culture Bridge

A complete LLM pipeline is like a full movie production: script, filming, editing, testing, distribution, and audience response.

### Where the Analogy Works

Both require connected stages to create and deliver the final product.

### Where the Analogy Stops

LLM pipelines are technical workflows, not film production.

### Mission

Order the lifecycle.

### The Lock

Order these stages:

- Deploy/infer
- Prepare data
- Evaluate
- Tokenize
- Pretrain
- Tune

### Hint 1

Start with data preparation.

### Break Condition

The learner gives a reasonable order: prepare data, tokenize, pretrain, tune, evaluate, deploy/infer.

---

# Lesson 14: Open Models — Architecture Walkthroughs

## CodeBreaker Challenge: Blueprint Reader 002

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Open model architecture

### Smallest Useful Truth

Architecture walkthroughs reveal how real models are built and what tradeoffs they make.

### Pop-Culture Bridge

Studying open model architecture is like reading the blueprints of different superhero suits before choosing one for the mission.

### Where the Analogy Works

Both inspect design choices and tradeoffs.

### Where the Analogy Stops

Model architecture is computational structure, not wearable equipment.

### Mission

Explain why architecture matters.

### The Lock

Why look at a model's architecture instead of only its popularity?

### Hint 1

Design affects cost, speed, capability, and fit.

### Break Condition

The learner explains that architecture choices affect how a model works and where it is useful.

---

# Lesson 15: Speculative Decoding and EAGLE-3

## CodeBreaker Challenge: Draft and Verify 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Speculative decoding

### Smallest Useful Truth

Speculative decoding speeds generation by drafting tokens and verifying them efficiently.

### Pop-Culture Bridge

Speculative decoding is like a junior writer drafting lines while the senior editor quickly approves or rejects them.

### Where the Analogy Works

Both use draft-and-check to move faster.

### Where the Analogy Stops

Speculative decoding uses model probability and verification logic, not human editing taste.

### Mission

Explain the speed idea.

### The Lock

Why might drafting several possible tokens before verification speed generation?

### Hint 1

Some work can be accepted in batches.

### Break Condition

The learner explains that speculative decoding can reduce generation time by verifying drafted tokens efficiently.

---

# Lesson 16: Differential Attention (V2)

## CodeBreaker Challenge: Noise Filter 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Differential attention

### Smallest Useful Truth

Differential attention modifies attention to help separate useful signal from noise.

### Pop-Culture Bridge

Differential attention is like tuning a radio to reduce static and hear the real broadcast more clearly.

### Where the Analogy Works

Both try to improve signal clarity.

### Where the Analogy Stops

Differential attention is a specific mathematical architecture choice, not audio tuning.

### Mission

Explain why attention might need refinement.

### The Lock

Why might engineers modify standard attention mechanisms?

### Hint 1

To improve signal, efficiency, stability, or performance.

### Break Condition

The learner explains that attention variants exist to improve how models handle signal and noise.

---

# Lesson 17: Native Sparse Attention (DeepSeek NSA)

## CodeBreaker Challenge: Sparse Focus 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Sparse attention

### Smallest Useful Truth

Sparse attention reduces attention work by focusing on selected parts instead of everything equally.

### Pop-Culture Bridge

Sparse attention is like searching a huge library by checking the most relevant shelves first instead of opening every book.

### Where the Analogy Works

Both reduce wasted search by focusing on likely useful areas.

### Where the Analogy Stops

Sparse attention uses designed or learned attention patterns, not human library browsing.

### Mission

Explain why sparse attention can help.

### The Lock

Why might attending to every token become expensive in long contexts?

### Hint 1

More tokens means more comparisons.

### Break Condition

The learner explains that sparse attention can reduce computation by focusing attention selectively.

---

# Lesson 18: Multi-Token Prediction

## CodeBreaker Challenge: More Than One Step 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Multi-token prediction

### Smallest Useful Truth

Multi-token prediction trains or designs models to predict more than one future token.

### Pop-Culture Bridge

It is like planning the next few moves in chess instead of only the next move.

### Where the Analogy Works

Both consider multiple future steps.

### Where the Analogy Stops

Multi-token prediction is still token probability modeling, not strategic understanding.

### Mission

Explain why predicting multiple tokens might help.

### The Lock

Why look beyond only the immediate next token?

### Hint 1

It may improve training signal or generation efficiency.

### Break Condition

The learner explains that multi-token prediction can provide richer future-token learning or efficiency benefits.

---

# Lesson 19: DualPipe Parallelism

## CodeBreaker Challenge: Parallel Assembly 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Pipeline parallelism

### Smallest Useful Truth

Pipeline parallelism splits model work into stages that can run in coordinated overlap.

### Pop-Culture Bridge

DualPipe is like an assembly line with multiple crews working in rhythm so no station sits idle for long.

### Where the Analogy Works

Both coordinate stages to improve throughput.

### Where the Analogy Stops

Pipeline parallelism involves GPU scheduling, communication, memory, and synchronization.

### Mission

Explain why parallelism matters.

### The Lock

Why split training or inference work across stages?

### Hint 1

To use hardware more efficiently.

### Break Condition

The learner explains that parallelism can improve throughput and handle large workloads.

---

# Lesson 20: DeepSeek-V3 Architecture Walkthrough

## CodeBreaker Challenge: Modern Blueprint 001

### Lock Type

Connect

### Difficulty

System Lock

### Concept

Modern LLM architecture walkthrough

### Smallest Useful Truth

A modern architecture walkthrough shows how design choices combine into model capability and efficiency.

### Pop-Culture Bridge

It is like inspecting a high-performance engine to understand why it runs the way it does.

### Where the Analogy Works

Both inspect systems through components and design choices.

### Where the Analogy Stops

LLM architecture is neural computation, not combustion or mechanical hardware.

### Mission

Explain what to look for in an architecture walkthrough.

### The Lock

Name three architecture details worth inspecting.

### Hint 1

Think attention, routing, context length, training data, parameters, inference design.

### Break Condition

The learner names at least three relevant design details.

---

# Lesson 21: Jamba — Hybrid SSM-Transformer

## CodeBreaker Challenge: Hybrid Engine 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Hybrid SSM-transformer models

### Smallest Useful Truth

Hybrid models combine different architecture types to balance strengths.

### Pop-Culture Bridge

A hybrid model is like a vehicle that combines electric and gas systems for different driving needs.

### Where the Analogy Works

Both combine systems to balance tradeoffs.

### Where the Analogy Stops

Hybrid AI architectures combine computational mechanisms, not physical drivetrains.

### Mission

Explain why hybrid architectures exist.

### The Lock

Why combine transformers with other sequence-modeling methods?

### Hint 1

Different architectures have different strengths and costs.

### Break Condition

The learner explains that hybrid models combine strengths for efficiency, context handling, or performance.

---

# Lesson 22: Async and Hogwild! Inference

## CodeBreaker Challenge: Concurrent Serving 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Asynchronous inference

### Smallest Useful Truth

Asynchronous inference handles work without waiting for every step to finish one at a time.

### Pop-Culture Bridge

Async inference is like a busy kitchen taking multiple orders and preparing parts in parallel instead of finishing one entire meal before starting the next.

### Where the Analogy Works

Both improve throughput by overlapping work.

### Where the Analogy Stops

Async inference involves scheduling, concurrency, hardware, memory, and serving logic.

### Mission

Explain why async serving helps.

### The Lock

Why might a model-serving system handle requests asynchronously?

### Hint 1

To improve throughput and reduce waiting.

### Break Condition

The learner explains that async inference can improve serving efficiency by overlapping work and handling concurrent requests.

---

# Phase 10 Boss Lock: LLM Lifecycle System

## Combined Concepts

- Tokenizers
- Tokenizer construction
- Data pipelines
- Pretraining
- Distributed training
- SFT
- RLHF
- DPO
- Constitutional AI
- Evaluation
- Quantization
- Inference optimization
- LLM pipeline
- Open architecture
- Speculative decoding
- Attention variants
- Sparse attention
- Multi-token prediction
- Parallelism
- Hybrid architectures
- Async inference

## Difficulty

Boss Lock

## Mission

Explain how Phase 10 turns transformer knowledge into a full LLM lifecycle.

## Setup

A learner says:

“I understand transformers now, but I still do not understand how people build and serve real LLMs.”

## The Lock

Give a beginner-safe explanation connecting at least ten Phase 10 ideas into one LLM lifecycle.

## Clue 1

Tokenizers and data pipelines prepare language for training.

## Clue 2

Pretraining, SFT, RLHF, DPO, and constitutional methods shape model capability and behavior.

## Clue 3

Evaluation, quantization, inference optimization, architecture choices, and serving methods make the model usable in real systems.

## Break Condition

The Boss Lock is solved when the learner explains that real LLMs are built through tokenization, data preparation, pretraining, scaling, tuning, preference optimization, evaluation, compression, inference optimization, architecture design, and serving systems.

## After Unlock

The learner proved they understand LLM construction as an engineered lifecycle, not a mysterious chat window.

---

# Tutor Notes

## How to Use This File

Use this file after `phase-10-llms-from-scratch-starter-path.md`.

The starter path teaches the LLM lifecycle.

This file maps actual Phase 10 lessons into challenge sequences.

## Recommended Flow

1. Teach the Smallest Useful Truth.
2. Use the pop-culture bridge.
3. Explain where it works.
4. Explain where it stops.
5. Present the lock.
6. Let the learner attempt.
7. Diagnose the response.
8. Create a Concept Receipt.

## Evidence Standard

The learner should be able to answer:

- Which lifecycle stage does this concept support?
- Does it affect data, training, tuning, evaluation, compression, inference, architecture, or serving?
- What problem does it solve?
- What tradeoff does it introduce?

## Next Recommended File

Create:

`b4b-codebreaker/curriculum-adapter/phase-guides/phase-11-llm-engineering-starter-path.md`

That file should translate prompt engineering, structured outputs, embeddings, context engineering, RAG, fine-tuning, function calling, evaluation, guardrails, production apps, and MCP into beginner-safe concept ladders and CodeBreaker locks.
