# Phase 7 CodeBreaker Locks: Transformers Deep Dive

## Purpose

This file maps the actual Phase 7 Transformers Deep Dive lessons into beginner-safe CodeBreaker Challenges.

Phase 7 is where the learner moves from language systems into the transformer architecture behind modern LLMs and many multimodal systems.

The goal is not to memorize architecture diagrams first.

The goal is to understand transformers as attention-based relationship engines.

## Phase 7 Challenge Doctrine

Every transformer concept should answer four beginner questions:

1. What token relationship is being handled?
2. What part of attention or architecture does this support?
3. How does it affect understanding, generation, or efficiency?
4. What confusion does this concept remove?

## Difficulty Progression

- Spark Lock: recognize and explain
- Signal Lock: decode and interpret
- Circuit Lock: apply or compare
- System Lock: connect across transformer architecture
- Boss Lock: combine transformer concepts

---

# Lesson 01: Why Transformers — The Problems with RNNs

## CodeBreaker Challenge: Chain Breaker 001

### Lock Type

Explain

### Difficulty

Spark Lock

### Concept

Why transformers exist

### Smallest Useful Truth

Transformers help tokens compare relationships more directly than older chain-like sequence models.

### Pop-Culture Bridge

Older sequence models are like passing one note down a long classroom row. Transformers are like a team meeting where everyone can look across the room.

### Where the Analogy Works

Transformers allow more direct relationship comparison across a sequence.

### Where the Analogy Stops

Tokens do not talk or understand. They are numerical representations compared through math.

### Mission

Explain why direct token comparison helps.

### The Lock

Why might a model struggle if information has to pass through a long chain one step at a time?

### Hint 1

Long chains can lose or weaken information.

### Break Condition

The learner explains that transformers help model long-range relationships more directly and efficiently.

---

# Lesson 02: Self-Attention from Scratch

## CodeBreaker Challenge: Relationship Score 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Self-attention

### Smallest Useful Truth

Self-attention lets tokens compare themselves with other tokens in the same input.

### Pop-Culture Bridge

Self-attention is like Spider-Man's spider-sense sorting which signals matter in a crowded city.

### Where the Analogy Works

Both prioritize relevant signals.

### Where the Analogy Stops

Self-attention is mathematical scoring between token representations, not instinct.

### Mission

Explain what self-attention scores.

### The Lock

In a sentence, what does self-attention help each token compare?

### Hint 1

Other tokens in the same input.

### Break Condition

The learner explains that self-attention scores relationships between tokens.

---

# Lesson 03: Multi-Head Attention

## CodeBreaker Challenge: Many Views 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Multi-head attention

### Smallest Useful Truth

Multi-head attention lets the model look at different relationship patterns at the same time.

### Pop-Culture Bridge

Multi-head attention is like a superhero team scanning the city from different angles: rooftops, streets, tech signals, and distress calls.

### Where the Analogy Works

Different heads can focus on different relationship patterns.

### Where the Analogy Stops

Attention heads are learned mathematical projections, not conscious specialists.

### Mission

Explain why one attention head may not be enough.

### The Lock

Why might several attention heads help more than one attention head?

### Hint 1

Different kinds of relationships can matter at once.

### Break Condition

The learner explains that multiple heads can capture different patterns in parallel.

---

# Lesson 04: Positional Encoding — Sinusoidal, RoPE, ALiBi

## CodeBreaker Challenge: Order Signal 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Positional encoding

### Smallest Useful Truth

Positional encoding gives tokens information about order.

### Pop-Culture Bridge

Positional encoding is like panel order in a comic book. Same panels, wrong order, confused story.

### Where the Analogy Works

Order changes meaning.

### Where the Analogy Stops

Positional encoding is numerical information added to token representations.

### Mission

Explain why transformers need position information.

### The Lock

Why do `dog bites man` and `man bites dog` mean different things?

### Hint 1

Same words, different positions.

### Break Condition

The learner explains that token order affects meaning and relationships.

---

# Lesson 05: The Full Transformer — Encoder + Decoder

## CodeBreaker Challenge: Read Then Write 001

### Lock Type

Decode

### Difficulty

Circuit Lock

### Concept

Encoder and decoder transformer architecture

### Smallest Useful Truth

Encoders build input representations. Decoders generate output.

### Pop-Culture Bridge

The encoder reads the mission brief. The decoder writes the mission response.

### Where the Analogy Works

Both separate understanding input from producing output.

### Where the Analogy Stops

Encoders and decoders are neural network components, not human readers or writers.

### Mission

Separate encoder and decoder roles.

### The Lock

Which part is more associated with generating output tokens?

### Hint 1

Decode means produce.

### Break Condition

The learner identifies the decoder.

---

# Lesson 06: BERT — Masked Language Modeling

## CodeBreaker Challenge: Fill the Mask 001

### Lock Type

Predict

### Difficulty

Signal Lock

### Concept

Masked language modeling

### Smallest Useful Truth

BERT learns by predicting hidden tokens using surrounding context.

### Pop-Culture Bridge

BERT is like a detective filling in a missing word from clues on both sides of the blank.

### Where the Analogy Works

Both use surrounding context to infer missing information.

### Where the Analogy Stops

BERT predicts tokens statistically, not through human deduction.

### Mission

Use context to infer a masked word.

### The Lock

`The rocket launched into the [MASK].`

What word might fit?

### Hint 1

Think where rockets go.

### Break Condition

The learner gives a plausible word such as sky, air, atmosphere, or space and explains context.

---

# Lesson 07: GPT — Causal Language Modeling

## CodeBreaker Challenge: Next Token Trail 002

### Lock Type

Predict

### Difficulty

Signal Lock

### Concept

Causal language modeling

### Smallest Useful Truth

GPT-style models predict the next token using previous tokens.

### Pop-Culture Bridge

GPT prediction is like finishing the next line of a familiar song based on the rhythm and words already heard.

### Where the Analogy Works

Both use prior context to anticipate what comes next.

### Where the Analogy Stops

GPT predicts token probabilities, not artistic intention.

### Mission

Explain causal prediction.

### The Lock

`Build your dreaming ____`

What token is likely next?

### Hint 1

Use the phrase pattern.

### Break Condition

The learner gives a plausible completion such as things and explains previous context.

---

# Lesson 08: T5, BART — Encoder-Decoder Models

## CodeBreaker Challenge: Transform the Task 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Encoder-decoder models

### Smallest Useful Truth

Encoder-decoder models read an input sequence and generate an output sequence.

### Pop-Culture Bridge

Encoder-decoder models are like translating a mission brief into a finished action plan.

### Where the Analogy Works

Input is represented first, then output is generated.

### Where the Analogy Stops

The model performs learned sequence transformation, not strategic planning.

### Mission

Name an encoder-decoder task.

### The Lock

Which task fits encoder-decoder logic: summarization, translation, or both?

### Hint 1

Both read input and produce new output.

### Break Condition

The learner identifies both summarization and translation as fitting encoder-decoder logic.

---

# Lesson 09: Vision Transformers

## CodeBreaker Challenge: Image Patches 001

### Lock Type

Decode

### Difficulty

Signal Lock

### Concept

Vision transformers

### Smallest Useful Truth

Vision transformers process image patches like tokens.

### Pop-Culture Bridge

A vision transformer is like turning an image into puzzle pieces, then letting the model compare the pieces.

### Where the Analogy Works

Both split a larger image into smaller units for relationship processing.

### Where the Analogy Stops

Image patches are numerical representations, not physical puzzle pieces.

### Mission

Explain how images become transformer inputs.

### The Lock

A vision transformer often splits an image into what?

### Hint 1

Patches.

### Break Condition

The learner explains that images can be split into patches treated like tokens.

---

# Lesson 10: Audio Transformers — Whisper Architecture

## CodeBreaker Challenge: Sound Tokens 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Audio transformers

### Smallest Useful Truth

Audio transformers process sound by converting audio into model-usable representations.

### Pop-Culture Bridge

Audio transformers are like turning a song into a visual sound map before analyzing it.

### Where the Analogy Works

Audio must be represented in a form the model can process.

### Where the Analogy Stops

Audio transformer inputs use signal-processing representations, not human listening.

### Mission

Explain why audio needs representation before transformer processing.

### The Lock

Why can't a transformer use raw human hearing directly?

### Hint 1

The model needs numerical input.

### Break Condition

The learner explains that audio must be converted into numerical/model-usable representations.

---

# Lesson 11: Mixture of Experts

## CodeBreaker Challenge: Specialist Router 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Mixture of Experts

### Smallest Useful Truth

Mixture of Experts routes inputs to selected expert parts of a model.

### Pop-Culture Bridge

MoE is like calling the right specialists for a mission instead of bringing the whole Avengers roster to open one locked door.

### Where the Analogy Works

Both route tasks to relevant specialists.

### Where the Analogy Stops

MoE experts are neural subnetworks selected by learned routing, not people with judgment.

### Mission

Explain the purpose of routing.

### The Lock

Why might a model use only some experts for a token instead of all experts?

### Hint 1

Efficiency and specialization.

### Break Condition

The learner explains that routing can use specialized capacity more efficiently.

---

# Lesson 12: KV Cache, Flash Attention & Inference Optimization

## CodeBreaker Challenge: Faster Generation 001

### Lock Type

Connect

### Difficulty

System Lock

### Concept

Inference optimization

### Smallest Useful Truth

Inference optimization makes model generation faster or cheaper without changing the core task.

### Pop-Culture Bridge

KV cache is like keeping case notes so Batman does not re-investigate the same clue every minute.

### Where the Analogy Works

Both reuse saved information to avoid wasted effort.

### Where the Analogy Stops

KV cache stores key and value tensors, not written notes.

### Mission

Explain why KV cache helps generation.

### The Lock

Why store previous attention keys and values during next-token generation?

### Hint 1

Avoid recomputing past context.

### Break Condition

The learner explains that KV cache reuses past attention information to speed up inference.

---

# Lesson 13: Scaling Laws

## CodeBreaker Challenge: Scale Tradeoff 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Scaling laws

### Smallest Useful Truth

Scaling laws describe how model performance tends to change as data, compute, and model size increase.

### Pop-Culture Bridge

Scaling laws are like studying how training time, nutrition, and coaching affect athlete performance over time.

### Where the Analogy Works

Both examine how resources affect performance.

### Where the Analogy Stops

Scaling laws are empirical relationships in AI training, not human athletic development.

### Mission

Name the major scaling resources.

### The Lock

What three resources often matter when scaling models?

### Hint 1

Data, compute, and model size.

### Break Condition

The learner identifies data, compute, and model size.

---

# Lesson 14: Build a Transformer from Scratch — The Capstone

## CodeBreaker Challenge: Transformer Assembly 001

### Lock Type

Boss Lock

### Difficulty

Boss Lock

### Concept

Transformer capstone

### Smallest Useful Truth

Building a transformer from scratch reveals how tokens, attention, position, layers, and output generation fit together.

### Pop-Culture Bridge

Building a transformer from scratch is like assembling your own Iron Man suit before flying it. Every part teaches what the full system depends on.

### Where the Analogy Works

Both reveal how parts combine into a working system.

### Where the Analogy Stops

A transformer is software and math, not armor or flight hardware.

### Mission

Explain the major parts of a transformer.

### The Lock

Name at least five pieces involved in a transformer system.

### Hint 1

Think tokens, embeddings, attention, position, layers, outputs, cache.

### Break Condition

The learner names at least five valid transformer components and explains how they contribute.

### After Unlock

The learner proved they can see transformers as a system of connected parts, not one giant mystery block.

---

# Phase 7 Boss Lock: The Transformer System

## Combined Concepts

- Tokens
- Embeddings
- Self-attention
- QKV
- Multi-head attention
- Positional encoding
- Encoder-decoder logic
- BERT
- GPT
- Vision/audio transformers
- Mixture of Experts
- KV cache
- Scaling laws

## Difficulty

Boss Lock

## Mission

Explain how transformers process and generate information.

## Setup

A learner says:

“I hear that transformers changed AI, but I do not understand what actually changed.”

## The Lock

Give a beginner-safe explanation connecting at least eight Phase 7 ideas into one transformer workflow.

## Clue 1

Tokens become embeddings.

## Clue 2

Attention compares relationships between tokens.

## Clue 3

Position, architecture type, caching, and scaling shape how transformers work in real systems.

## Break Condition

The Boss Lock is solved when the learner explains that transformers process tokens, use attention to compare relationships, preserve order with positional information, stack transformations through layers, support different model families such as BERT and GPT, and use efficiency methods like KV cache for generation.

## After Unlock

The learner proved they understand transformers as relationship-processing systems, not mystical prediction machines.

---

# Tutor Notes

## How to Use This File

Use this file after `phase-07-transformers-starter-path.md`.

The starter path teaches the transformer relationship engine.

This file maps actual Phase 7 lessons into challenge sequences.

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

- What part of transformer architecture does this concept support?
- Does it affect token flow, relationship scoring, position, generation, efficiency, or scale?
- What confusion does this concept remove?

## Next Recommended File

Create:

`b4b-codebreaker/curriculum-adapter/phase-guides/phase-10-llms-from-scratch-starter-path.md`

That file should translate tokenizers, pretraining, instruction tuning, RLHF, DPO, quantization, inference, and complete LLM pipelines into beginner-safe concept ladders and CodeBreaker locks.
