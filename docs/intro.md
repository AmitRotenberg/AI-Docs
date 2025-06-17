---
sidebar_position: 1
---

# איך להיות מומחה AI ?

בואו לגלות איך **משתמשים בבינה מלאכותית בפחות מ 5 דקות !**

## בואו נתחיל
### מושגים חשובים

  **[Rchat](https://docusaurus.new)** - המערכת של ענף רימון לשימוש בAI

**Prompt** - ההודעה אותה אנו שולחים למודל השפה
לדוגמה:
```bash
Tell me a funny joke
```

**מודל שפה (LLM)** - המנוע שמעבד את הבקשה שלנו ומחזיר תשובה

### איך כותבים Prompt?
- **בהירות ומיקוד 🎯**
  - להגדיר בדיוק את מה שאנחנו רוצים שהמודל יעשה
  - להמנע מניסוחים כלליים או מעורפלים
  - **דוגמה:**
    - "תכתוב משהו על היסטוריה." ❌
    - "כתוב פסקה בת 100 מילים על חשיבות מהפכת הדפוס באירופה." ✅ 

- **מבנה מפורש עם דוגמאות 🧱**
  - אם המשימה מורכבת או תבניתית - תנו דוגמה !
  - פרומפט עם פורמט קבוע מקל על המודל לשחזר את הפורמט
  - **דוגמה:**
    ```bash
    ? שאלה: מי היה ראש ממשלת ישראל הראשון
    תשובה: דוד בן-גוריון

    ? שאלה: מה בירת צרפת
    :תשובה
    ```

- **הקשר ורקע 🧠**
  - תנו למודל את ההקשר שהוא צריך כדי להבין את המשימה
  - אם השאלה נשענת על טקסט/מידע קודם — תכניסו אותו בפרומפט.
  - **דוגמה:**
    -  "בהתבסס על הקטע הבא, נסח שלוש שאלות הבנה ברמת ניתוח..." ✅ 

- **הגדרת סגנון, טון או מגבלות 📝**
  - בקש במפורש סגנון מסוים: מקצועי, ידידותי, תקני, שפה פשוטה, בעברית בלבד, וכו'.
  - **דוגמה:**
    -  "כתוב תשובה מקצועית ומנומקת, בעברית, בטון פורמלי." ✅ 

- **ניסוח אינטראקטיבי או שלבי 🧪**
  - לפרומפטים מורכבים, עדיף לפרק לשלבים:
  - **דוגמה:**
    - שלב 1: סכם את הטקסט
    - שלב 2: זיהוי רעיון מרכזי
    - שלב 3: ניסוח שאלת הבנה

:::tip
מודל שפה אומן ברובו בשפה **האנגלית** ולכן מומלץ תמיד לכתוב את הפרומפט שלנו **באנגלית**
:::

### דוגמה ליישום כל העקרונות

```bash
You are a professional content editor.

Based on the following article, perform the following three tasks step-by-step:

**Step 1:** Summarize the main idea of the article in no more than 3 sentences.  
**Step 2:** Identify and list two key arguments that support the main idea.  
**Step 3:** Rephrase the summary from Step 1 using simpler, conversational English suitable for a high-school audience.

Use the following format in your response:

Step 1: Summary
[Your summary here]

Step 2: Key Arguments
1. [First argument]
2. [Second argument]

Step 3: Simplified Summary
[Rephrased version]

Write clearly and professionally. Keep the tone neutral and informative.

Here is the article:
"""
[Insert article text here]
"""
```

לאחר שלמדתם איך לכתוב פרומפט נכון בואו נעבור לרשימת הפרומפטים המוכנים !
**[שימושים נפוצים](category/שימושים-נפוצים)**


