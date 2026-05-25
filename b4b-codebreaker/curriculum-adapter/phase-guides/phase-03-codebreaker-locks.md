# Phase 3 CodeBreaker Locks: Deep Learning Core

## Purpose

This file maps the actual Phase 3 Deep Learning Core lessons into beginner-safe CodeBreaker Challenges.

Phase 3 is where the learner moves from machine learning workflows into neural network mechanics.

The goal is not to make the learner memorize equations first.

The goal is to help the learner understand the signal path:

Input moves forward. Prediction comes out. Loss measures wrongness. Error moves backward. Weights update. The system improves.

## Phase 3 Challenge Doctrine

Every deep learning concept should answer four beginner questions:

1. What signal is moving?
2. What transformation happens?
3. What feedback is measured?
4. What gets adjusted?

## Difficulty Progression

- Spark Lock: recognize and explain
- Signal Lock: predict and interpret
- Circuit Lock: apply or compare
- System Lock: connect across the learning loop
- Boss Lock: combine neural network concepts

---

# Lesson 01: The Perceptron: Where It All Started

## CodeBreaker Challenge: First Neuron 001

### Lock Type

Decode

### Difficulty

Spark Lock

### Concept

Perceptron

### Smallest Useful Truth

A perceptron combines weighted inputs to produce an output.

### Pop-Culture Bridge

A perceptron is like a talent-show judge who weighs several factors before making a decision.

### Where the Analogy Works

Both combine multiple signals into one output.

### Where the Analogy Stops

A perceptron uses numbers and formulas, not taste or personality.

### Mission

Explain what a perceptron does.

### The Lock

A perceptron receives inputs, applies weights, adds bias, and produces what?

### Hint 1

Think output.

### Break Condition

The learner explains that a perceptron produces an output from weighted inputs.

---

# Lesson 02: Multi-Layer Networks & Forward Pass

## CodeBreaker Challenge: Forward Signal 001

### Lock Type

Sequence

### Difficulty

Signal Lock

### Concept

Forward pass

### Smallest Useful Truth

A forward pass moves input through layers to produce a prediction.

### Pop-Culture Bridge

A forward pass is like an assembly line where each station changes the material before the final product appears.

### Where the Analogy Works

Both involve ordered transformation steps.

### Where the Analogy Stops

A network transforms tensors and numbers, not physical material.

### Mission

Put the forward pass in order.

### The Lock

Order these steps:

- Prediction comes out
- Input enters
- Layers transform the signal

### Hint 1

Start with the input.

### Break Condition

The learner orders it as input enters, layers transform the signal, prediction comes out.

---

# Lesson 03: Backpropagation from Scratch

## CodeBreaker Challenge: Backward Signal 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Backpropagation

### Smallest Useful Truth

Backpropagation sends error information backward so weights can be adjusted.

### Pop-Culture Bridge

Backpropagation is like reviewing game footage backward to find where the play broke down.

### Where the Analogy Works

Both trace a bad result back through earlier steps.

### Where the Analogy Stops

Backpropagation is gradient calculation using the chain rule, not blame or opinion.

### Mission

Explain why error information moves backward.

### The Lock

After a prediction is wrong, why does the network need to trace backward through layers?

### Hint 1

To know which weights contributed to the error.

### Break Condition

The learner explains that backpropagation calculates how internal weights should adjust to reduce error.

---

# Lesson 04: Activation Functions: ReLU, Sigmoid, GELU & Why

## CodeBreaker Challenge: Signal Gate 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Activation functions

### Smallest Useful Truth

Activation functions control how signals pass through neurons and help networks learn non-linear patterns.

### Pop-Culture Bridge

An activation function is like a gatekeeper deciding how much signal gets through.

### Where the Analogy Works

Both control passage.

### Where the Analogy Stops

Activation functions are mathematical operations, not conscious decisions.

### Mission

Explain why activation functions matter.

### The Lock

Without activation functions, what kind of patterns would networks struggle to learn?

### Hint 1

Think beyond straight-line patterns.

### Break Condition

The learner explains that activation functions help networks learn non-linear patterns.

---

# Lesson 05: Loss Functions: MSE, Cross-Entropy, Contrastive

## CodeBreaker Challenge: Wrongness Meter 001

### Lock Type

Connect

### Difficulty

Signal Lock

### Concept

Loss functions

### Smallest Useful Truth

A loss function measures how wrong a model's prediction is.

### Pop-Culture Bridge

Loss is like a scoreboard after practice. It does not insult the player. It reveals the gap.

### Where the Analogy Works

Both measure performance gap.

### Where the Analogy Stops

Loss is a mathematical value used for optimization, not emotional judgment.

### Mission

Explain why loss is needed before backpropagation.

### The Lock

What must the model measure before it knows how to improve?

### Hint 1

How wrong it was.

### Break Condition

The learner explains that the model needs loss as an error signal before learning can update weights.

---

# Lesson 06: Optimizers: SGD, Momentum, Adam, AdamW

## CodeBreaker Challenge: Update Step 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Optimizers

### Smallest Useful Truth

An optimizer updates model parameters to reduce loss.

### Pop-Culture Bridge

An optimizer is like a trainer deciding how to adjust after seeing performance feedback.

### Where the Analogy Works

Both turn feedback into an adjustment strategy.

### Where the Analogy Stops

Optimizers use mathematical update rules, not coaching intuition.

### Mission

Separate gradient from optimizer.

### The Lock

If gradients point toward adjustment, what does the optimizer do?

### Hint 1

It changes the weights.

### Break Condition

The learner explains that the optimizer uses gradients to update parameters.

---

# Lesson 07: Regularization: Dropout, Weight Decay, BatchNorm

## CodeBreaker Challenge: Memory Guard 002

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Regularization

### Smallest Useful Truth

Regularization helps a model avoid memorizing the training data too tightly.

### Pop-Culture Bridge

Regularization is like training in varied environments instead of memorizing one obstacle course.

### Where the Analogy Works

Both encourage flexible performance beyond one exact setup.

### Where the Analogy Stops

Regularization uses specific mathematical or architectural techniques.

### Mission

Explain what regularization fights against.

### The Lock

A model performs great on training data but poorly on new data. What problem might regularization help reduce?

### Hint 1

Think overfitting.

### Break Condition

The learner identifies overfitting and explains that regularization can help reduce it.

---

# Lesson 08: Weight Initialization & Training Stability

## CodeBreaker Challenge: Starting Position 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Weight initialization and stability

### Smallest Useful Truth

Weight initialization sets the starting values that affect how training begins.

### Pop-Culture Bridge

Weight initialization is like setting a runner's starting stance before a race.

### Where the Analogy Works

Both starting conditions influence what happens next.

### Where the Analogy Stops

Weight initialization is numerical setup for training, not physical posture.

### Mission

Explain why starting weights matter.

### The Lock

Why can bad initial weights make training harder?

### Hint 1

The network may start in a place where signals or gradients behave poorly.

### Break Condition

The learner explains that poor initialization can make learning unstable, slow, or ineffective.

---

# Lesson 09: Learning Rate Schedules & Warmup

## CodeBreaker Challenge: Step Size 001

### Lock Type

Predict

### Difficulty

Circuit Lock

### Concept

Learning rate

### Smallest Useful Truth

The learning rate controls how big each update step is.

### Pop-Culture Bridge

Learning rate is like adjusting speed while learning to drive a powerful car.

### Where the Analogy Works

Both require controlled movement to avoid overshooting or crawling.

### Where the Analogy Stops

Learning rate is a numerical training setting, not physical speed.

### Mission

Predict what happens if learning rate is too high.

### The Lock

A model's loss jumps wildly and does not settle. What setting might be too large?

### Hint 1

Think update step size.

### Break Condition

The learner identifies learning rate and explains that too-large steps can destabilize training.

---

# Lesson 10: Build Your Own Mini Framework

## CodeBreaker Challenge: Framework Bones 001

### Lock Type

Connect

### Difficulty

System Lock

### Concept

Mini deep learning framework

### Smallest Useful Truth

A mini framework organizes the repeated parts of building and training models.

### Pop-Culture Bridge

A mini framework is like building your own small Iron Man workshop before using the giant professional lab.

### Where the Analogy Works

Both help the builder understand the tools by making a smaller version first.

### Where the Analogy Stops

A framework is software structure, not physical machinery.

### Mission

Explain why building a mini framework teaches more than only using one.

### The Lock

Why build a small version before using PyTorch deeply?

### Hint 1

You understand what the tool automates.

### Break Condition

The learner explains that building a mini framework reveals the parts libraries usually hide.

---

# Lesson 11: Introduction to PyTorch

## CodeBreaker Challenge: Toolbelt Upgrade 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

PyTorch

### Smallest Useful Truth

PyTorch is a deep learning library that helps build and train neural networks.

### Pop-Culture Bridge

PyTorch is like upgrading from hand tools to a professional engineering workshop.

### Where the Analogy Works

Both make complex building more practical.

### Where the Analogy Stops

PyTorch does not remove the need for understanding. It organizes and automates deep learning operations.

### Mission

Explain what PyTorch helps with.

### The Lock

Name two things PyTorch provides for deep learning.

### Hint 1

Think tensors, gradients, layers, optimizers.

### Break Condition

The learner names at least two useful PyTorch capabilities.

---

# Lesson 12: Introduction to JAX

## CodeBreaker Challenge: Another Toolchain 001

### Lock Type

Compare

### Difficulty

Signal Lock

### Concept

JAX

### Smallest Useful Truth

JAX is a numerical computing library often used for high-performance machine learning research.

### Pop-Culture Bridge

If PyTorch is one advanced workshop, JAX is another workshop with different controls and strengths.

### Where the Analogy Works

Both are tool systems for building numerical and machine learning programs.

### Where the Analogy Stops

JAX has specific design choices around transformations, compilation, and automatic differentiation.

### Mission

Explain why a learner may encounter more than one deep learning tool.

### The Lock

Why might AI engineers use different libraries like PyTorch and JAX?

### Hint 1

Different tools have different strengths.

### Break Condition

The learner explains that different libraries support different workflows, performance needs, and research styles.

---

# Lesson 13: Debugging Neural Networks

## CodeBreaker Challenge: Neural Detective 001

### Lock Type

Diagnose

### Difficulty

System Lock

### Concept

Debugging neural networks

### Smallest Useful Truth

Debugging neural networks means investigating why training or predictions are not behaving as expected.

### Pop-Culture Bridge

Debugging a neural network is like being a detective in a city where the clues are loss curves, gradients, data, and outputs.

### Where the Analogy Works

Both require evidence-based investigation.

### Where the Analogy Stops

Neural debugging uses technical signals, not hunches.

### Mission

Choose what to inspect first.

### The Lock

A model's loss never improves. Name two things you might check.

### Hint 1

Think data, labels, learning rate, model architecture, loss function, gradients.

### Break Condition

The learner names two plausible debugging checks and explains why they matter.

---

# Phase 3 Boss Lock: Neural Network Learning Loop

## Combined Concepts

- Perceptron
- Layers
- Forward pass
- Activation functions
- Loss
- Backpropagation
- Optimizers
- Regularization
- Initialization
- Learning rate
- Frameworks
- Debugging

## Difficulty

Boss Lock

## Mission

Explain how Phase 3 turns deep learning from black box into a learning loop.

## Setup

A learner says:

“I know neural networks make predictions, but I do not understand how they improve.”

## The Lock

Give a beginner-safe explanation connecting at least seven Phase 3 concepts into one neural network training workflow.

## Clue 1

The forward pass creates a prediction.

## Clue 2

Loss measures wrongness.

## Clue 3

Backpropagation calculates gradients, and the optimizer updates weights.

## Break Condition

The Boss Lock is solved when the learner explains that inputs move through layers during the forward pass, activation functions shape signals, loss measures prediction error, backpropagation computes gradients, optimizers update weights, and regularization/stability/debugging help training work reliably.

## After Unlock

The learner proved they understand neural networks as signal transformation and feedback systems, not mysterious thinking machines.

---

# Tutor Notes

## How to Use This File

Use this file after `phase-03-deep-learning-core-starter-path.md`.

The starter path introduces the signal path.

This file maps the actual Phase 3 lessons into challenge sequences.

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

- What part of the neural network loop does this concept support?
- Does it affect signal flow, error measurement, feedback, update strategy, stability, or tooling?
- What could go wrong if misunderstood?

## Next Recommended File

Create:

`b4b-codebreaker/curriculum-adapter/phase-guides/phase-05-nlp-foundations-starter-path.md`

That file should translate text processing, tokens, embeddings, attention, retrieval, and language systems into beginner-safe concept ladders and CodeBreaker locks.
