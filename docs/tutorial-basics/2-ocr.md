---
sidebar_position: 2
---

# OCR - חילוץ טקסט מתמונה 🔍🖼️

**המרת טקסט מתמונה לטקסט קריא ונגיש**

ניתן להעלות תמונה או מסמך סרוק המכיל טקסט ל־[Rchat](https://docusaurus.new), והמודל יזהה וימיר את הטקסט לתוכן כתוב.

**דוגמה לפרומפט:**
```mdx title="חילוץ טקסט מתמונה"
You are an OCR (Optical Character Recognition) assistant.

Your task is to extract the text content from the image provided.

**Instructions:**
1. Return all readable text found in the image.
2. Maintain paragraph and line structure where possible.
3. Ignore any irrelevant visual elements (e.g., decorations, logos).

Here is the image:
[Upload your image here]
```

:::tip דגשים חשובים
כדי לשפר את התוצאה:
- אם מדובר בחילוץ טקסט מאיזור מסוים בתמונה כדאי לתאר אותו בפרומפט
- ניתן לציין את שפת הטקסט שבתמונה
- אם המסמך כולל טבלאות או מבנה, יש לציין זאת מראש
- אם נדרש פענוח מטקסט מודפס לעומת טקסט בכתב יד — ציינו זאת
:::