---
sidebar_position: 7
---

# סיווג טקסט 🗂️

**קביעת קטגוריה או תחום עבור טקסט נתון**

אפשר להדביק טקסט, והמודל יסווג אותו לפי נושאים מוגדרים או כלליים.

**דוגמה לפרומפט:**
```mdx title="סיווג טקסט לפי נושא"
You are a text classification assistant.

Your task is to classify the following text into one of the following topics: [Technology, Politics, Health, Education, Sports].

**Instructions:**
1. Choose the most appropriate topic for the text.
2. Justify the classification in 1 sentence.

Here is the text:
"""
[Paste your text here]
"""
```

:::tip דגשים חשובים
- ניתן להגדיר רשימת נושאים **מראש**
- אפשר לבקש סיווג **מרובה** (אם הטקסט שייך ליותר מנושא אחד)
- ניתן לבקש נימוק או **ציון ודאות**
:::