# Phase 10 Starter Path: LLMs from Scratch

## Purpose

Phase 10 is where the learner moves from transformer architecture into building language models as complete systems.

For a beginner, LLMs should not begin as a fog bank of tokenizers, pretraining, distributed training, RLHF, DPO, quantization, inference optimization, and architecture variants.

It should begin with one simple idea:

An LLM is a transformer-based system trained to predict and generate language from tokens.

This guide translates LLM construction into beginner-safe concept ladders, pop-culture bridges, and CodeBreaker Locks.

## Phase 10 Doctrine

LLMs are not magic word spirits.

LLMs are token prediction systems trained at scale, then adapted for usefulness.

The model learns patterns during pretraining, becomes more instruction-following through tuning, gets aligned through preference methods, becomes more efficient through compression and inference optimization, and turns into a usable system through pipelines.

The goal is not to understand every training technique immediately.

The goal is to understand the lifecycle of an LLM.

## Recommended Teaching Order

1. What is an LLM?
2. Tokenizers
3. Training data pipelines
4. Pretraining
5. Scaling and distributed training
6. Instruction tuning
7. RLHF and reward modeling
8. DPO and preference optimization
9. Constitutional AI and self-improvement
10. Evaluation
11. Quantization
12. Inference optimization
13. Complete LLM pipeline
14. Open model architecture walkthroughs
15. Advanced architecture ideas
16. Phase 10 Boss Lock

---

# 1. What Is an LLM?

## Smallest Useful Truth

An LLM is a language model trained on large amounts of text to predict and generate tokens.

## Why It Matters

LLMs power chatbots, writing tools, coding assistants, search interfaces, agents, and many AI applications.

## Human Meaning

An LLM learns patterns in language so it can continue, answer, rewrite, summarize, reason, and transform text.

## Technical Meaning

Most modern LLMs are transformer-based models trained with next-token prediction and adapted through further tuning.

## Code Meaning

LLM systems include tokenizers, model weights, training loops, inference code, evaluation, and deployment tools.

## System Meaning

An LLM is not just a model file. It is a pipeline of data, training, tuning, evaluation, optimization, and serving.

## Pop-Culture Bridge

An LLM is like a massive apprentice scribe trained by reading countless scrolls, then coached to answer in useful ways.

## Where the Analogy Works

Both learn patterns from many examples and produce language-like responses.

## Where the Analogy Stops

An LLM does not understand like a human apprentice. It predicts tokens using learned statistical patterns.

## CodeBreaker Lock: LLM Identity 001

### Lock Type

Explain

### Difficulty

Spark Lock

### Mission

Explain what an LLM does.

### The Lock

Complete the sentence:

An LLM predicts and generates ______.

### Hint 1

Think tokens or language.

### Break Condition

The learner explains that an LLM predicts and generates language tokens.

---

# 2. Tokenizers

## Smallest Useful Truth

A tokenizer breaks language into pieces the model can process.

## Why It Matters

LLMs do not read raw human meaning. They process tokens.

## Human Meaning

Tokenization turns text into model-usable pieces.

## Technical Meaning

Tokenizers such as BPE, WordPiece, and SentencePiece convert text into token IDs.

## Code Meaning

Tokenizer code encodes text into IDs and decodes IDs back into text.

## System Meaning

The tokenizer is the front door of an LLM.

## Pop-Culture Bridge

A tokenizer is like cutting language into LEGO bricks before the model builds with it.

## Where the Analogy Works

Both break a larger thing into usable pieces.

## Where the Analogy Stops

Tokens are not always full words. They can be word pieces, punctuation, spaces, or special symbols.

## CodeBreaker Lock: Token Door 001

### Lock Type

Decode

### Difficulty

Signal Lock

### Mission

Explain why tokenization happens before modeling.

### The Lock

Why can't the model use raw human meaning directly?

### Hint 1

It needs numerical/token representations.

### Break Condition

The learner explains that text must be tokenized into model-usable units.

---

# 3. Training Data Pipelines

## Smallest Useful Truth

A data pipeline prepares training examples for the model.

## Why It Matters

Bad data can produce bad model behavior. Good training needs organized, cleaned, filtered, and formatted data.

## Human Meaning

The model learns from what it is fed.

## Technical Meaning

Data pipelines collect, clean, deduplicate, tokenize, batch, and feed examples into training.

## Code Meaning

Pipeline code may stream datasets, tokenize text, create batches, and prepare labels.

## System Meaning

Data pipelines shape what the model can learn.

## Pop-Culture Bridge

A data pipeline is like preparing meals for an athlete. The quality and consistency of the food affects training.

## Where the Analogy Works

Both supply material for development.

## Where the Analogy Stops

Model data is not nutrition. It is structured training input processed by software.

## CodeBreaker Lock: Data Feeder 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Mission

Explain why data quality matters.

### The Lock

What might happen if an LLM is trained on messy, duplicated, or low-quality data?

### Hint 1

It may learn poor patterns.

### Break Condition

The learner explains that low-quality data can produce unreliable or unwanted model behavior.

---

# 4. Pretraining

## Smallest Useful Truth

Pretraining teaches a model broad language patterns before it is specialized.

## Why It Matters

Pretraining creates the base model capabilities that later tuning builds on.

## Human Meaning

Pretraining is broad study before job-specific coaching.

## Technical Meaning

Pretraining usually trains a model on large datasets with objectives like next-token prediction.

## Code Meaning

A pretraining loop feeds token batches through the model, computes loss, backpropagates, and updates weights.

## System Meaning

Pretraining is the foundation of LLM capability.

## Pop-Culture Bridge

Pretraining is like a hero's long general training arc before a specific mission.

## Where the Analogy Works

Both build broad capability before specialization.

## Where the Analogy Stops

Pretraining is token prediction and optimization, not personal growth.

## CodeBreaker Lock: Base Model 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Mission

Explain what pretraining creates.

### The Lock

Why does instruction tuning usually come after pretraining?

### Hint 1

The model needs broad language capability first.

### Break Condition

The learner explains that pretraining creates a base model that later tuning can adapt.

---

# 5. Scaling and Distributed Training

## Smallest Useful Truth

Distributed training spreads large training work across multiple machines or devices.

## Why It Matters

Large models can be too big or too slow for one machine.

## Human Meaning

The job is split across a crew instead of one worker doing everything.

## Technical Meaning

Distributed training uses methods such as data parallelism, model parallelism, FSDP, DeepSpeed, and pipeline strategies.

## Code Meaning

Training code may coordinate GPUs, shards, communication, and checkpoints.

## System Meaning

Scaling infrastructure makes large LLM training possible.

## Pop-Culture Bridge

Distributed training is like building a city with many coordinated crews instead of one person with a hammer.

## Where the Analogy Works

Both divide large work across coordinated workers.

## Where the Analogy Stops

Distributed training has technical challenges such as synchronization, memory, communication, and fault tolerance.

## CodeBreaker Lock: Training Crew 001

### Lock Type

Explain

### Difficulty

System Lock

### Mission

Explain why distributed training exists.

### The Lock

Why might a huge LLM need many GPUs instead of one computer?

### Hint 1

Think size, memory, and time.

### Break Condition

The learner explains that large training jobs need distributed compute for memory and speed.

---

# 6. Instruction Tuning

## Smallest Useful Truth

Instruction tuning teaches a pretrained model to follow instructions better.

## Why It Matters

A base language model predicts text. An assistant-style model needs to respond helpfully to instructions.

## Human Meaning

Instruction tuning turns broad language skill into task-following behavior.

## Technical Meaning

Supervised fine-tuning trains the model on instruction-response examples.

## Code Meaning

Training data may include prompts and desired completions.

## System Meaning

Instruction tuning helps turn a base model into a useful assistant.

## Pop-Culture Bridge

Instruction tuning is like taking a talented athlete and teaching them the playbook.

## Where the Analogy Works

Both adapt general ability to specific task behavior.

## Where the Analogy Stops

Instruction tuning is supervised learning on examples, not human comprehension.

## CodeBreaker Lock: Follow the Brief 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Mission

Explain why instruction tuning matters.

### The Lock

Why is a base model not automatically a good assistant?

### Hint 1

It may predict text without following user intent well.

### Break Condition

The learner explains that instruction tuning teaches the model response patterns for following instructions.

---

# 7. RLHF and Reward Modeling

## Smallest Useful Truth

RLHF uses human preference feedback to train models toward more preferred responses.

## Why It Matters

Models can produce many plausible answers, but some are more helpful, safe, or aligned with user expectations.

## Human Meaning

The model gets feedback on which responses people prefer.

## Technical Meaning

RLHF often trains a reward model from human comparisons, then uses reinforcement learning such as PPO to optimize responses.

## Code Meaning

RLHF pipelines may include response generation, preference data, reward modeling, and policy optimization.

## System Meaning

RLHF is one method for aligning model outputs with human preferences.

## Pop-Culture Bridge

RLHF is like a chef testing dishes with customers and adjusting based on which meals people prefer.

## Where the Analogy Works

Both use preference feedback to improve outputs.

## Where the Analogy Stops

RLHF is a technical training pipeline, not taste alone. Preference data can be biased or imperfect.

## CodeBreaker Lock: Preference Signal 001

### Lock Type

Explain

### Difficulty

System Lock

### Mission

Explain what RLHF adds beyond pretraining.

### The Lock

Why might human preference comparisons help tune an assistant model?

### Hint 1

They show which responses are preferred.

### Break Condition

The learner explains that RLHF uses preference feedback to push outputs toward more helpful or desired behavior.

---

# 8. DPO

## Smallest Useful Truth

DPO trains a model from preference pairs without a separate reinforcement learning loop.

## Why It Matters

DPO offers a simpler way to optimize toward preferred responses compared with traditional RLHF pipelines.

## Human Meaning

The model learns from pairs of better and worse responses.

## Technical Meaning

Direct Preference Optimization uses preference data to update the model directly.

## Code Meaning

DPO training uses chosen/rejected response pairs.

## System Meaning

DPO is a preference-tuning method for aligning model behavior.

## Pop-Culture Bridge

DPO is like showing two draft answers and saying, “Use more of this style, less of that one.”

## Where the Analogy Works

Both learn from comparison pairs.

## Where the Analogy Stops

DPO is a mathematical objective for model optimization, not simple style advice.

## CodeBreaker Lock: Better Pair 001

### Lock Type

Decode

### Difficulty

Circuit Lock

### Mission

Explain what DPO learns from.

### The Lock

A dataset has a chosen answer and a rejected answer. What does that tell the model?

### Hint 1

Which response is preferred.

### Break Condition

The learner explains that DPO uses preference pairs to learn preferred behavior.

---

# 9. Constitutional AI and Self-Improvement

## Smallest Useful Truth

Constitutional AI uses written principles to guide model behavior and critique outputs.

## Why It Matters

A model needs guidance about acceptable and helpful behavior beyond raw prediction.

## Human Meaning

The model uses rules or principles as a standard for revision.

## Technical Meaning

Constitutional approaches can use principles to generate critiques, revisions, and preference data.

## Code Meaning

Systems may include policy prompts, critique prompts, revision loops, and evaluation steps.

## System Meaning

Principle-guided training and evaluation support safer, more consistent models.

## Pop-Culture Bridge

Constitutional AI is like a hero code: not every action that is possible is acceptable.

## Where the Analogy Works

Both use principles to guide behavior.

## Where the Analogy Stops

Constitutional AI is implemented through model training and evaluation methods, not moral character.

## CodeBreaker Lock: Principle Guide 001

### Lock Type

Explain

### Difficulty

System Lock

### Mission

Explain why principles matter.

### The Lock

Why might a model need guiding principles beyond predicting likely text?

### Hint 1

Likely text is not always helpful, safe, or appropriate.

### Break Condition

The learner explains that principles help guide model behavior toward acceptable outputs.

---

# 10. Evaluation

## Smallest Useful Truth

Evaluation checks whether an LLM performs the task well enough to trust.

## Why It Matters

Fluent answers can still be wrong, unsafe, unsupported, or useless.

## Human Meaning

Evaluation asks: did the model actually do the job?

## Technical Meaning

LLM evaluation uses benchmarks, task tests, human review, model judges, and metrics.

## Code Meaning

Evaluation code may run prompts through models, compare expected outputs, and score results.

## System Meaning

Evaluation protects quality and trust.

## Pop-Culture Bridge

Evaluation is like checking a mission report against the actual mission footage.

## Where the Analogy Works

Both compare claims against evidence and goals.

## Where the Analogy Stops

Evaluation methods can be incomplete, biased, or task-specific.

## CodeBreaker Lock: Trust Check 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Mission

Explain why fluency is not enough.

### The Lock

An answer sounds polished but contains a false claim. What failed?

### Hint 1

Quality is more than style.

### Break Condition

The learner explains that evaluation must check correctness, usefulness, and grounding, not just fluency.

---

# 11. Quantization

## Smallest Useful Truth

Quantization makes models smaller or faster by using lower-precision numbers.

## Why It Matters

Large models can be expensive and slow. Quantization helps them run with fewer resources.

## Human Meaning

Quantization is compression with tradeoffs.

## Technical Meaning

Quantization reduces numerical precision, such as from 16-bit to 8-bit or lower representations.

## Code Meaning

Inference systems may load quantized model weights.

## System Meaning

Quantization helps deploy models on limited hardware or reduce cost.

## Pop-Culture Bridge

Quantization is like packing a huge travel kit into a smaller backpack while trying not to lose the essential tools.

## Where the Analogy Works

Both reduce size while preserving usefulness.

## Where the Analogy Stops

Quantization changes numerical precision and may affect accuracy or behavior.

## CodeBreaker Lock: Smaller Model 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Mission

Explain why quantization is useful.

### The Lock

Why might someone quantize an LLM before deployment?

### Hint 1

Think speed, memory, and cost.

### Break Condition

The learner explains that quantization can reduce memory and improve deployment efficiency.

---

# 12. Inference Optimization

## Smallest Useful Truth

Inference optimization makes model responses faster, cheaper, or more efficient.

## Why It Matters

Serving LLMs at scale requires controlling latency, cost, throughput, and hardware use.

## Human Meaning

Inference optimization improves how the model runs after training.

## Technical Meaning

It may involve batching, caching, speculative decoding, kernels, parallelism, and serving infrastructure.

## Code Meaning

Inference systems optimize token generation, memory use, and request handling.

## System Meaning

Inference optimization turns models into usable products.

## Pop-Culture Bridge

Inference optimization is like tuning a restaurant kitchen so meals come out faster without changing the recipe.

## Where the Analogy Works

Both improve serving speed and efficiency.

## Where the Analogy Stops

Inference optimization is about computation, memory, scheduling, and model execution.

## CodeBreaker Lock: Serve Faster 001

### Lock Type

Connect

### Difficulty

System Lock

### Mission

Explain why inference optimization matters.

### The Lock

A model gives good answers but takes 40 seconds per reply. What problem needs attention?

### Hint 1

Think latency.

### Break Condition

The learner explains that inference speed and efficiency need optimization.

---

# 13. Complete LLM Pipeline

## Smallest Useful Truth

A complete LLM pipeline connects data, tokenization, training, tuning, evaluation, optimization, and deployment.

## Why It Matters

An LLM product is not just a model. It is a system.

## Human Meaning

The pipeline is the full path from raw data to usable model behavior.

## Technical Meaning

A pipeline organizes all major stages of model construction and serving.

## Code Meaning

Pipeline code may coordinate datasets, tokenizer, model training, tuning, evals, artifacts, and inference.

## System Meaning

Pipelines make LLM development repeatable and improvable.

## Pop-Culture Bridge

A complete LLM pipeline is like a full movie production: script, casting, filming, editing, testing, distribution, and audience feedback.

## Where the Analogy Works

Both require many connected stages to create the final product.

## Where the Analogy Stops

LLM pipelines are technical workflows, not creative film production.

## CodeBreaker Lock: Pipeline Builder 001

### Lock Type

Sequence

### Difficulty

System Lock

### Mission

Put the LLM lifecycle in order.

### The Lock

Order these stages:

- Evaluation
- Tokenization
- Data preparation
- Pretraining
- Deployment/inference
- Instruction tuning

### Hint 1

Start with data.

### Break Condition

The learner gives a reasonable order: data preparation, tokenization, pretraining, instruction tuning, evaluation, deployment/inference.

---

# 14. Open Model Architecture Walkthroughs

## Smallest Useful Truth

Architecture walkthroughs show how real model designs organize components.

## Why It Matters

Different open models may use different attention, normalization, routing, context, or inference choices.

## Human Meaning

A model architecture is the blueprint of how the system is built.

## Technical Meaning

Architecture walkthroughs inspect model blocks, dimensions, attention style, tokenizer choices, and training/inference design.

## Code Meaning

Engineers may read config files, model code, and diagrams to understand architecture.

## System Meaning

Architecture literacy helps engineers choose, modify, debug, and deploy models.

## Pop-Culture Bridge

An architecture walkthrough is like studying the blueprint of different superhero suits before choosing which one fits the mission.

## Where the Analogy Works

Both inspect design choices and tradeoffs.

## Where the Analogy Stops

Model architecture is mathematical and computational structure, not armor design.

## CodeBreaker Lock: Blueprint Reader 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Mission

Explain why architecture matters.

### The Lock

Why should an engineer inspect a model's architecture instead of only its leaderboard score?

### Hint 1

Different designs have different tradeoffs.

### Break Condition

The learner explains that architecture affects capability, cost, speed, memory, and suitability.

---

# 15. Advanced Inference and Architecture Ideas

## Smallest Useful Truth

Advanced LLM techniques improve how models generate, attend, scale, or run efficiently.

## Why It Matters

Modern LLM engineering evolves through better attention, prediction, routing, parallelism, and hybrid architectures.

## Human Meaning

After the main engine works, engineers improve speed, efficiency, and capability.

## Technical Meaning

Methods such as speculative decoding, sparse attention, multi-token prediction, and hybrid architectures modify parts of the LLM system for better performance or efficiency.

## Code Meaning

These ideas often affect inference code, attention code, parallelism, or architecture configuration.

## System Meaning

Advanced methods keep LLM systems scalable and competitive.

## Pop-Culture Bridge

Advanced LLM techniques are like upgrading a race car after it already drives: better tires, smarter fuel use, improved aerodynamics, and faster pit strategy.

## Where the Analogy Works

Both improve a working system's performance.

## Where the Analogy Stops

LLM improvements are mathematical, computational, and architectural, not mechanical car tuning.

## CodeBreaker Lock: Upgrade Path 001

### Lock Type

Connect

### Difficulty

System Lock

### Mission

Explain why advanced techniques exist.

### The Lock

Why keep improving attention, inference, and architecture after the model already works?

### Hint 1

Think speed, cost, context, and capability.

### Break Condition

The learner explains that advanced techniques improve efficiency, scalability, or model behavior.

---

# Phase 10 Boss Lock: Build the Language Engine

## Combined Concepts

- LLMs
- Tokenizers
- Data pipelines
- Pretraining
- Distributed training
- Instruction tuning
- RLHF
- DPO
- Constitutional AI
- Evaluation
- Quantization
- Inference optimization
- Complete pipelines
- Open architectures
- Advanced methods

## Difficulty

Boss Lock

## Mission

Explain the lifecycle of building an LLM from scratch.

## Setup

A learner says:

“I understand transformers, but I do not understand how that becomes a useful language model.”

## The Lock

Give a beginner-safe explanation connecting at least ten Phase 10 concepts into one LLM lifecycle.

## Clue 1

Tokenizers and data pipelines prepare text for training.

## Clue 2

Pretraining builds broad language capability.

## Clue 3

Instruction tuning, preference methods, evaluation, quantization, and inference optimization turn a base model into a usable system.

## Break Condition

The Boss Lock is solved when the learner explains that an LLM is built through tokenization, data preparation, pretraining, tuning, preference optimization, evaluation, compression, inference optimization, and deployment as a complete pipeline.

## After Unlock

The learner proved they understand LLMs as engineered systems with a lifecycle, not just mysterious chat interfaces.

---

# Tutor Notes

## Watch For These Misunderstandings

### Vocabulary Gap

The learner may not know tokenizer, pretraining, instruction tuning, RLHF, DPO, quantization, inference, or pipeline.

### Sequence Gap

The learner may know the words but not the order of the lifecycle.

### Purpose Gap

The learner may not understand why a pretrained model still needs tuning and evaluation.

### Confidence Gap

The learner may assume LLM building is too large to understand because training full models is expensive.

## Recommended Tutor Response

Start with the lifecycle.

Data first.

Tokenization second.

Pretraining third.

Tuning fourth.

Evaluation fifth.

Optimization and deployment last.

## First Evidence Checks

Before moving deeper, the learner should be able to explain:

1. What an LLM is.
2. Why tokenizers matter.
3. Why data pipelines matter.
4. What pretraining does.
5. Why instruction tuning comes later.
6. What preference methods help with.
7. Why evaluation matters.
8. Why quantization matters.
9. Why inference optimization matters.
10. Why a complete LLM pipeline matters.

## Completion Criteria

The learner is ready to continue Phase 10 when they can say:

- An LLM predicts and generates language tokens.
- Tokenizers convert text into model-usable pieces.
- Data pipelines prepare training examples.
- Pretraining builds broad model capability.
- Distributed training helps scale large workloads.
- Instruction tuning teaches models to follow tasks.
- RLHF and DPO use preferences to shape behavior.
- Constitutional methods use principles to guide outputs.
- Evaluation checks whether outputs are trustworthy and useful.
- Quantization reduces memory or cost by lowering precision.
- Inference optimization makes generation faster and cheaper.
- Complete pipelines connect all stages into a usable system.

## Next Recommended File

Create:

`b4b-codebreaker/curriculum-adapter/phase-guides/phase-10-codebreaker-locks.md`

That file should map the actual Phase 10 lessons into challenge sequences.
