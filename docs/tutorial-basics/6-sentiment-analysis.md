---
sidebar_position: 6
---

# ניתוח סנטימנט 💬📊

**זיהוי הרגש או הטון הכללי של טקסט**

המודל יזהה אם הטקסט חיובי, שלילי או נייטרלי, כולל נימוק.

**דוגמה לפרומפט:**
```mdx title="ניתוח סנטימנט"
You are a sentiment analysis assistant.

Your task is to analyze the sentiment of the following text.

**Instructions:**
1. Indicate if the sentiment is Positive, Negative, or Neutral.
2. Explain your reasoning in 1–2 short sentences.

Here is the text:
"""
[Paste text here]
"""
```

:::tip דגשים חשובים
- ניתן לבקש:
    - סיווג עדין יותר (כמו "חיובי מאוד", "נייטרלי מעט שלילי")
    - ניתוח לכל משפט בנפרד
    - תוספת **נימוקים** או **ציטוטים** מהטקסט
:::