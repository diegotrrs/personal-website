---
title: "When to repeat yourself"
date: 2021-05-29
author: "Diego Torres"
---

Good practices are methods or techniques that have been generally accepted as the best option to use in a certain field or industry. They also facilitate communication between peers — if you bring a common practice into a conversation with your colleague they probably will know what you are talking about. In programming the *Don't Repeat Yourself (DRY)* is one of the most known and common practices.

## 1. The Don't Repeat Yourself (DRY) principle

The main idea behind the *DRY* principle is to avoid duplication of knowledge in order to reduce the risk of defects appearing when new code is introduced in the future. This comes with benefits such as having a single source of truth and having less code to maintain.

*DRY*'s main objective is avoiding **duplication of knowledge** (business rules or algorithms) but it's not necessarily about **duplication of code**. The same code can be found several times but if it represents different business rules then there is no duplication of knowledge.

[Mathias Verraes](https://verraes.net/2014/08/dry-is-about-knowledge/) elaborates further on this:

> DRY is about knowledge. It's about cohesion. If two pieces of code represent the exact same knowledge, they will always change together. Having to change them both is risky: you might forget one of them. On the other hand, if two identical pieces of code represent different knowledge, they will change independently. De-duplicating them introduces risk, because changing the knowledge for one object, might accidentally change it for the other object.

## 2. Risk: Wrong abstraction

Generally speaking, abstraction means removing unnecessary detail in order to focus attention on details of greater importance. In programming, this can be achieved by creating classes (generalisation), interfaces (information hiding) or functions (functional abstraction), among others. Abstraction is widely used to simplify things that may be very complex, but it can also be used to achieve other objectives such as **avoiding duplication of code**. But sometimes a **wrong abstraction** can be introduced.

Sandi Metz presents a really clear example of this:

> 1. Programmer A sees duplication.
> 2. Programmer A extracts duplication and gives it a name. This creates a new abstraction.
> 3. Programmer A replaces the duplication with the new abstraction. Ah, the code is perfect.
> 4. Time passes.
> 5. A new requirement appears for which the current abstraction is almost perfect.
> 6. Programmer B gets tasked to implement this requirement. Programmer B feels honour-bound to retain the existing abstraction, but since it isn't exactly the same for every case, they alter the code to take a parameter, and then add logic to conditionally do the right thing based on the value of that parameter.
> 7. Another new requirement arrives. Another additional parameter. Another new conditional. Loop until code becomes incomprehensible.
> 8. You appear in the story about here, and your life takes a dramatic turn for the worse.

In this case, a wrong abstraction has been introduced making the code difficult to change and understand. As Metz points out: *duplication is far cheaper than the wrong abstraction*.

## 3. When to repeat yourself

Avoid refactoring the code to remove duplication if:

- You are not familiar with the business logic. You may not identify those cases when the duplication in code doesn't represent duplication in knowledge.
- You don't have enough examples of code to come up with a good abstraction.
- The risk introduced would be higher than the benefit of removing the duplication. If it's a critical module that has been working for ages, then leave it as it is.
- You don't have enough time to test afterwards. For example: if you are in the middle of fixing a critical bug in production then most likely it's not the best moment to start a refactoring.

It is also acceptable to repeat yourself if you are moving away from a wrong abstraction. Refactoring doesn't always mean less code.

## 4. Key points

- DRY is about duplication of knowledge, not duplication of code.
- Duplication is far cheaper than the wrong abstraction.
- Be careful about introducing wrong abstractions. If necessary, re-introduce duplication to remove wrong abstractions.
- Before removing any duplication take into account the context and the **What-When-Who**: what is changing, when it needs to be done and who's making the change (your expertise).
- DRY, like any other principle, is a tool to guide you, not a rule.
