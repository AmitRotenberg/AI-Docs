---
sidebar_position: 5
---

# זיהוי ישויות 🏷️

**זיהוי שמות, מקומות, תאריכים וישויות נוספות בטקסט**

ניתן להדביק טקסט או להעלות מסמך, והמודל יחזיר את הישויות שמופיעות בו לפי סוג.

**דוגמה לפרומפט:**
```mdx title="זיהוי ישויות בשם"
You are an NER (Named Entity Recognition) system.

Your task is to identify all named entities in the following text.

**Instructions:**
1. Highlight or list all people, locations, organizations, and dates.
2. Return results in a structured format (e.g., JSON or table).

Here is the text:
"""
[Paste text here]
"""
```

:::tip דגשים חשובים
- ניתן לבקש **הדגשה** בטקסט או **רשימה נפרדת**
- אפשר לציין את **סוגי** הישויות שמעניינים אותך (למשל, רק אנשים ומקומות)
- אפשר לבקש פלט **בפורמט** (למשל JSON)
:::