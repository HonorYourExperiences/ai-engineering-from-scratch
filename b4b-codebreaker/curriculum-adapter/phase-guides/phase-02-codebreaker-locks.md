# Phase 2 CodeBreaker Locks: Machine Learning Fundamentals

## Purpose

This file maps the actual Phase 2 Machine Learning Fundamentals lessons into beginner-safe CodeBreaker Challenges.

Phase 2 is where the learner moves from math machinery into model behavior.

The goal is not to memorize algorithm names first.

The goal is to understand what each model or method is for, what problem it solves, and how it fits into the machine learning loop.

## Phase 2 Challenge Doctrine

Every machine learning concept should answer four beginner questions:

1. What is it?
2. Why does it exist?
3. What problem does it solve?
4. How does it help a model learn, predict, or improve?

## Difficulty Progression

- Spark Lock: recognize and explain
- Signal Lock: predict and interpret
- Circuit Lock: apply or compare
- System Lock: connect across a workflow
- Boss Lock: combine several ML ideas

---

# Lesson 01: What Is Machine Learning?

## CodeBreaker Challenge: Pattern Learner 002

### Lock Type

Explain

### Difficulty

Spark Lock

### Concept

Machine learning

### Smallest Useful Truth

Machine learning teaches computers to find patterns in examples.

### Pop-Culture Bridge

Machine learning is like training a Pokemon team through repeated battles and feedback.

### Where the Analogy Works

Both improve through repeated examples and feedback.

### Where the Analogy Stops

A model has no desire or battle instinct. It adjusts mathematical patterns based on data.

### Mission

Explain machine learning without using the word magic.

### The Lock

Complete the sentence:

Machine learning uses examples to learn ______.

### Hint 1

Think patterns.

### Break Condition

The learner explains that machine learning uses examples to learn patterns.

---

# Lesson 02: Linear Regression from Scratch

## CodeBreaker Challenge: Line of Best Fit 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Linear regression

### Smallest Useful Truth

Linear regression predicts a number by fitting a line to data.

### Pop-Culture Bridge

Linear regression is like drawing the best trend line through a player's season performance to estimate the next score.

### Where the Analogy Works

Both use past numeric patterns to estimate a future number.

### Where the Analogy Stops

Linear regression uses mathematical fitting, not sports instinct.

### Mission

Explain what linear regression predicts.

### The Lock

A model predicts house price based on square feet. Is this regression or classification?

### Hint 1

House price is a number.

### Break Condition

The learner identifies regression and explains that it predicts a numeric value.

---

# Lesson 03: Logistic Regression & Classification

## CodeBreaker Challenge: Category Curve 001

### Lock Type

Decode

### Difficulty

Signal Lock

### Concept

Logistic regression and classification

### Smallest Useful Truth

Logistic regression predicts the probability of a category.

### Pop-Culture Bridge

Logistic regression is like the Sorting Hat giving a probability that someone belongs in a house.

### Where the Analogy Works

Both assign something to a category based on traits.

### Where the Analogy Stops

Logistic regression uses a mathematical function to produce probabilities, not magical insight.

### Mission

Explain what logistic regression is used for.

### The Lock

A model outputs:

```text
spam: 0.92
not spam: 0.08
```

What category is most likely?

### Hint 1

Choose the higher probability.

### Break Condition

The learner chooses spam and explains that logistic regression can support classification through probabilities.

---

# Lesson 04: Decision Trees & Random Forests

## CodeBreaker Challenge: Branching Choice 001

### Lock Type

Explain

### Difficulty

Signal Lock

### Concept

Decision trees and random forests

### Smallest Useful Truth

A decision tree makes predictions by asking a sequence of questions.

### Pop-Culture Bridge

A decision tree is like a choose-your-own-adventure story where each answer sends you down a branch.

### Where the Analogy Works

Both use branching choices to reach an outcome.

### Where the Analogy Stops

Decision trees choose splits using data and mathematical criteria, not story drama.

### Mission

Explain why a random forest uses many trees.

### The Lock

Why might many decision trees be better than one tree?

### Hint 1

Think crowd wisdom and reducing one tree's mistakes.

### Break Condition

The learner explains that a random forest combines many trees to improve reliability and reduce overfitting.

---

# Lesson 05: Support Vector Machines

## CodeBreaker Challenge: Boundary Blade 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Support vector machines

### Smallest Useful Truth

A support vector machine tries to separate classes with the best boundary.

### Pop-Culture Bridge

An SVM is like drawing the safest border between two rival camps, leaving the widest margin possible.

### Where the Analogy Works

Both focus on separation and margin.

### Where the Analogy Stops

SVM boundaries are mathematical decision surfaces, not physical borders.

### Mission

Explain what an SVM is trying to maximize.

### The Lock

Two classes need to be separated. Why does margin matter?

### Hint 1

More space can make the separation more reliable.

### Break Condition

The learner explains that SVMs try to find a boundary with a strong margin between classes.

---

# Lesson 06: KNN & Distance Metrics

## CodeBreaker Challenge: Neighbor Vote 001

### Lock Type

Predict

### Difficulty

Circuit Lock

### Concept

K-nearest neighbors

### Smallest Useful Truth

KNN predicts by looking at the closest examples.

### Pop-Culture Bridge

KNN is like judging a new student by the friend group they are closest to at lunch.

### Where the Analogy Works

Both use nearby examples to make a judgment.

### Where the Analogy Stops

KNN uses numerical distance, not social vibes.

### Mission

Predict using neighbors.

### The Lock

A new point's 3 nearest neighbors are:

```text
cat, cat, dog
```

What class would KNN likely predict?

### Hint 1

Use majority vote.

### Break Condition

The learner predicts cat because two of the three nearest neighbors are cats.

---

# Lesson 07: Unsupervised Learning: K-Means, DBSCAN

## CodeBreaker Challenge: Hidden Groups 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Unsupervised learning

### Smallest Useful Truth

Unsupervised learning looks for patterns without answer labels.

### Pop-Culture Bridge

Unsupervised learning is like sorting a pile of mysterious trading cards into groups before anyone tells you the official categories.

### Where the Analogy Works

Both find structure without a provided answer key.

### Where the Analogy Stops

Clustering uses mathematical similarity, not personal preference.

### Mission

Explain how unsupervised learning differs from supervised learning.

### The Lock

Does unsupervised learning start with labeled answers?

### Hint 1

Unsupervised means no answer key.

### Break Condition

The learner explains that unsupervised learning finds patterns without labeled targets.

---

# Lesson 08: Feature Engineering & Selection

## CodeBreaker Challenge: Useful Signal 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Feature engineering and selection

### Smallest Useful Truth

Feature engineering creates useful inputs. Feature selection chooses useful inputs.

### Pop-Culture Bridge

It is like Batman preparing the utility belt: create the right tools, then choose the tools needed for this mission.

### Where the Analogy Works

Both prepare and select useful resources for a task.

### Where the Analogy Stops

Feature engineering and selection transform and evaluate data, not physical gadgets.

### Mission

Separate engineering from selection.

### The Lock

You turn a date into `month`, `weekday`, and `season`. Then you keep only `season` because it helps most. Which part is engineering and which is selection?

### Hint 1

Creating features comes first. Choosing features comes after.

### Break Condition

The learner explains that creating month/weekday/season is engineering, and keeping season is selection.

---

# Lesson 09: Model Evaluation: Metrics, Cross-Validation

## CodeBreaker Challenge: Trust Test 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Model evaluation and cross-validation

### Smallest Useful Truth

Model evaluation checks whether a model performs well enough to trust.

### Pop-Culture Bridge

Evaluation is like testing a hero in different mission simulations before sending them into the real world.

### Where the Analogy Works

Both test performance across scenarios.

### Where the Analogy Stops

Model evaluation uses metrics and validation splits, not heroic judgment.

### Mission

Explain why one test split may not tell the whole story.

### The Lock

Why might cross-validation test a model on multiple data splits?

### Hint 1

One split might be lucky or unlucky.

### Break Condition

The learner explains that cross-validation gives a more reliable estimate by testing across multiple splits.

---

# Lesson 10: Bias, Variance & the Learning Curve

## CodeBreaker Challenge: Too Simple, Too Sensitive 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Bias and variance

### Smallest Useful Truth

Bias is error from being too simple. Variance is error from being too sensitive to the training data.

### Pop-Culture Bridge

High bias is like using one lazy rule for every enemy. High variance is like changing your whole strategy after every single fight.

### Where the Analogy Works

Both show bad learning patterns.

### Where the Analogy Stops

Bias and variance are technical sources of model error, not personality traits.

### Mission

Identify the likely problem.

### The Lock

A model performs poorly on training data and poorly on test data. Is this more like high bias or high variance?

### Hint 1

It did not even learn the training data well.

### Break Condition

The learner identifies high bias or underfitting.

---

# Lesson 11: Ensemble Methods: Boosting, Bagging, Stacking

## CodeBreaker Challenge: Team of Models 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Ensemble methods

### Smallest Useful Truth

Ensemble methods combine multiple models to make stronger predictions.

### Pop-Culture Bridge

An ensemble is like the Avengers. One hero may be strong, but the team can cover more weaknesses.

### Where the Analogy Works

Both combine strengths from multiple members.

### Where the Analogy Stops

Ensembles combine model outputs using specific algorithms, not teamwork emotions.

### Mission

Explain why combining models might help.

### The Lock

Why might several weaker models together outperform one model alone?

### Hint 1

Think different errors and combined strengths.

### Break Condition

The learner explains that ensembles can reduce errors and improve prediction by combining multiple models.

---

# Lesson 12: Hyperparameter Tuning & AutoML

## CodeBreaker Challenge: Settings Dial 001

### Lock Type

Decode

### Difficulty

Circuit Lock

### Concept

Hyperparameters

### Smallest Useful Truth

Hyperparameters are settings chosen before or during training that control how a model learns.

### Pop-Culture Bridge

Hyperparameters are like game difficulty settings and controller sensitivity before the match begins.

### Where the Analogy Works

Both settings affect performance before or during play.

### Where the Analogy Stops

Hyperparameters control model training behavior through technical settings.

### Mission

Identify a hyperparameter.

### The Lock

In a random forest, which sounds like a hyperparameter?

A) Number of trees
B) A learned split threshold
C) A prediction made after training

### Hint 1

A hyperparameter is chosen before training.

### Break Condition

The learner chooses number of trees.

---

# Lesson 13: ML Pipelines & Experiment Tracking

## CodeBreaker Challenge: Repeatable Machine 001

### Lock Type

Sequence

### Difficulty

System Lock

### Concept

ML pipelines and experiment tracking

### Smallest Useful Truth

A pipeline makes machine learning steps repeatable. Experiment tracking records what was tried and what happened.

### Pop-Culture Bridge

A pipeline is the assembly line. Experiment tracking is the lab notebook.

### Where the Analogy Works

Both support repeatability and learning from past attempts.

### Where the Analogy Stops

ML pipelines and tracking are software systems, not physical factories or paper notes.

### Mission

Explain why experiment tracking matters.

### The Lock

You trained five models and forgot which settings produced the best result. What system would have helped?

### Hint 1

Track experiments.

### Break Condition

The learner explains that experiment tracking records runs, settings, metrics, and results.

---

# Lesson 14: Naive Bayes

## CodeBreaker Challenge: Evidence Classifier 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Naive Bayes

### Smallest Useful Truth

Naive Bayes predicts a class using probabilities from evidence.

### Pop-Culture Bridge

Naive Bayes is like a detective using clues to estimate the most likely suspect, while making a simplifying assumption that clues are independent.

### Where the Analogy Works

Both use evidence to update likelihoods.

### Where the Analogy Stops

Naive Bayes uses formal probability and often assumes feature independence, which may not fully match reality.

### Mission

Explain why it is called naive.

### The Lock

What simplifying assumption does Naive Bayes often make about features?

### Hint 1

It treats features as independent.

### Break Condition

The learner explains that Naive Bayes often assumes features are independent given the class.

---

# Lesson 15: Time Series Fundamentals

## CodeBreaker Challenge: Time Trail 001

### Lock Type

Explain

### Difficulty

Circuit Lock

### Concept

Time series

### Smallest Useful Truth

A time series is data ordered over time.

### Pop-Culture Bridge

A time series is like watching a character's training arc episode by episode instead of only seeing the final power level.

### Where the Analogy Works

Both show change across time.

### Where the Analogy Stops

Time series analysis uses ordered measurements, trends, seasonality, and temporal patterns.

### Mission

Explain why order matters.

### The Lock

Why can rearranging time series data randomly cause problems?

### Hint 1

The order carries meaning.

### Break Condition

The learner explains that time order matters because patterns depend on sequence.

---

# Lesson 16: Anomaly Detection

## CodeBreaker Challenge: Outlier Alarm 001

### Lock Type

Decode

### Difficulty

Signal Lock

### Concept

Anomaly detection

### Smallest Useful Truth

Anomaly detection finds examples that do not fit the normal pattern.

### Pop-Culture Bridge

Anomaly detection is like Spider-Man's spider-sense noticing something is off in a normal crowd.

### Where the Analogy Works

Both focus on unusual signals.

### Where the Analogy Stops

Anomaly detection uses data patterns and thresholds, not instinct.

### Mission

Identify an anomaly.

### The Lock

Daily values are:

```text
10, 11, 10, 12, 500, 11
```

Which value looks unusual?

### Hint 1

Look for the value far away from the others.

### Break Condition

The learner identifies 500 as the anomaly.

---

# Lesson 17: Handling Imbalanced Data

## CodeBreaker Challenge: Rare Signal 001

### Lock Type

Explain

### Difficulty

System Lock

### Concept

Imbalanced data

### Smallest Useful Truth

Imbalanced data means one class appears much more often than another.

### Pop-Culture Bridge

Imbalanced data is like training a hero only against weak enemies, then expecting them to handle the rare boss fight.

### Where the Analogy Works

Both show poor preparation for rare but important cases.

### Where the Analogy Stops

Imbalanced data is measured through class distributions and affects metrics and training behavior.

### Mission

Explain why accuracy can mislead.

### The Lock

A dataset is 99% normal and 1% defect. A model predicts everything normal and gets 99% accuracy. Why is that bad?

### Hint 1

It misses the rare defects.

### Break Condition

The learner explains that high accuracy hides failure on the minority class.

---

# Lesson 18: Feature Selection

## CodeBreaker Challenge: Signal Sorter 001

### Lock Type

Connect

### Difficulty

Circuit Lock

### Concept

Feature selection

### Smallest Useful Truth

Feature selection chooses the most useful inputs for a model.

### Pop-Culture Bridge

Feature selection is like packing only the tools needed for a mission instead of carrying the whole garage.

### Where the Analogy Works

Both choose what is useful and leave behind what adds clutter.

### Where the Analogy Stops

Feature selection uses data, metrics, models, and statistical relationships.

### Mission

Explain why removing features can help.

### The Lock

Why might a model perform better after removing useless features?

### Hint 1

Less noise can make useful signal clearer.

### Break Condition

The learner explains that removing irrelevant or noisy features can improve learning and generalization.

---

# Phase 2 Boss Lock: From Data to Prediction

## Combined Concepts

- Machine learning
- Features
- Targets
- Regression
- Classification
- Distance
- Evaluation
- Overfitting
- Hyperparameters
- Pipelines
- Imbalanced data

## Difficulty

Boss Lock

## Mission

Explain how Phase 2 turns data into model behavior.

## Setup

A learner says:

“I know models make predictions, but I do not understand how all these algorithms and metrics fit together.”

## The Lock

Give a beginner-safe explanation connecting at least six Phase 2 ideas into one machine learning workflow.

## Clue 1

Features go in. Predictions come out.

## Clue 2

Targets, loss, and metrics help judge learning.

## Clue 3

Different models use different strategies to learn patterns.

## Break Condition

The Boss Lock is solved when the learner explains that machine learning uses features and targets to train models, makes predictions, evaluates errors with metrics, watches for overfitting or imbalance, and improves through better features, tuning, and pipelines.

## After Unlock

The learner proved they understand Phase 2 as a full learning workflow, not a list of disconnected algorithms.

---

# Tutor Notes

## How to Use This File

Use this file after `phase-02-ml-fundamentals-starter-path.md`.

The starter path teaches the core learning loop.

This file maps the actual Phase 2 lessons into challenge sequences.

## Recommended Flow

1. Teach the Smallest Useful Truth.
2. Give the pop-culture bridge.
3. Explain where it works.
4. Explain where it stops.
5. Present the lock.
6. Let the learner attempt.
7. Diagnose the response.
8. Create a Concept Receipt.

## Evidence Standard

The learner should be able to answer:

- What does this algorithm or method do?
- What problem does it solve?
- What kind of data or prediction does it support?
- What could go wrong if misunderstood?
- How does it connect to the ML workflow?

## Next Recommended File

Create:

`b4b-codebreaker/curriculum-adapter/phase-guides/phase-03-deep-learning-core-starter-path.md`

That file should translate neural networks, perceptrons, layers, activation functions, loss, optimizers, backpropagation, and PyTorch into beginner-safe concept ladders and CodeBreaker locks.
