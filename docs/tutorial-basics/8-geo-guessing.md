---
sidebar_position: 8
---

# ניחוש מיקום גיאוגרפי 🌍🧭

**ניחוש מיקום בעולם בהתבסס על תמונה או תיאור טקסטואלי**

המודל מנתח את התמונה או הטקסט כדי להציע היכן צולמה התמונה או מתרחש האירוע.

**דוגמה לפרומפט:**
```mdx title="ניחוש מיקום מתמונה"
You are a geo-location assistant.

Your task is to guess where the following image or scene is located.

**Instructions:**
1. Use visible landmarks, text, clothing, landscape, etc.
2. Return a country, city, or general region — based on confidence.

Here is the image:
[Upload image or describe scene]
```

:::tip דגשים חשובים
- ניתן לבקש **רמת ודאות** (למשל: 80% sure this is Japan)
- אפשר לכלול גם **תיאור מילולי** במקום תמונה
- ניתן לבקש **קואורדינטות** בקירוב
:::