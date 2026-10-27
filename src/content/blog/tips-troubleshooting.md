---
title: "10 Tips for troubleshooting"
date: 2021-07-01
author: "Diego Torres"
---

Troubleshooting is one of those things you will do a lot as a programmer. Spending hours finding out the root cause of an issue may sound tedious — and it is — but that boost of dopamine you get when you find what's causing a specific problem makes the whole thing worthwhile. The following tips are taken from more than 10 years of troubleshooting:

## 1. Check the logs

This is number one for a reason. Always check the logs. If the issue is in a web app then take a look at the logs in the browser and then move to the logs in the backend or other components. If the software isn't a web application, then identify the components involved and choose an order to check out the logs from inner layers to outer layer or vice versa.

Consider using cloud based logging/monitoring tools such as [Sentry](https://www.sentry.io) or [Log Rocket](https://logrocket.com/) — they will make your life easier.

## 2. Change one thing at a time

Approach troubleshooting as an exercise of the [scientific method](https://www.britannica.com/science/scientific-method). Observe the problem, identify the possible variables involved, make predictions on how those variables' values may be causing the issue, and finally test your predictions **changing one thing at a time**. I cannot emphasise enough how important this is — if you change several things at the same time you might not come to a conclusion as quickly since you're practically invalidating your tests. Soren Bjornstad talks about this on his blog [Debugging & the Scientific Method](https://controlaltbackspace.org/debugging/scientific-method/).

## 3. Identify what may have changed

Whether it's a recent bug or an old one, identifying what may have changed around the time the bug started to manifest is a good thing to do. Did someone install a new library? Did the version of a library get updated? Was new code deployed? Did our deployment workflows just change? Was a server recently updated? Those are some of the questions you need to ask. Make use of the code repository log to access the history of changes.

## 4. Compare, compare, compare

Comparing two or more sets of code is a powerful tool that might save you some precious time. For instance, if a bug is happening in a specific version of your product but not in the latest version, download both branches of the code and analyse the differences. Comparison tools are quite handy for this — most IDEs offer comparison features, or you can use tools like [Beyond Compare](https://www.scootersoftware.com/).

## 5. Know your tools

Get familiar with the tools you can use to debug. Debugging is supported on [VS Code](https://code.visualstudio.com/docs/editor/debugging). For web, get familiar with [Chrome DevTools](https://developer.chrome.com/docs/devtools/) — not just the console but the memory analyser and performance tools too. Regardless of the platform or language there are tools available to help you.

## 6. Take variable values to the extreme

Play with the possible values of a variable, taking it to the highest or lowest value — even to a ridiculous value — and see how it behaves. This is quite helpful when troubleshooting CSS issues, playing with the height or width of a div to see how it's rendered. QAs use this technique during [Boundary value analysis](https://en.wikipedia.org/wiki/Boundary-value_analysis).

## 7. Remove some code

Once you have your hands in the code while troubleshooting, start removing code — functions, arguments, modules — while you are still reproducing the issue. This allows you to reduce the problem to the minimum code required to reproduce it, increasing your chances of finding the cause.

## 8. Print out to the console, if needed

Printing out to the console can be quite helpful to identify the different execution paths of a program — especially in legacy programs or programs without good documentation. It can also help you identify whereabouts an error is occurring.

## 9. Consider other factors besides code

Not always can the root cause of a problem be found in the code. Our code runs in a *context* — identify the characteristics of that context and take them into account. Consider things like RAM memory, a server's IP, cache, process permissions, among others.

## 10. Ask *Why* 5 times

Sometimes [talking to a rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging) helps having a eureka moment, sometimes what does the trick is asking yourself the same question several times. As explained [here](https://www.mindtools.com/pages/article/newTMC_5W.htm), the 5 Whys strategy is a tool for uncovering the root of a problem. Start with a problem and ask why it is occurring, find a good answer to that first question and keep asking until you reach the root cause.
