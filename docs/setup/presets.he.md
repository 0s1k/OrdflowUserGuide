# פריסטים

פריסט הוא סט שמור של הגדרות משלוח: כתובת שולח, שירות, אריזה, מטרת המשלוח למכס וכו׳. בוחרים פריסט בעת יצירת מדבקות משלוח, וכך לא צריך למלא את אותם פרטים בכל הזמנה מחדש. אפשר גם לבחור כמה הזמנות ולהפיק מדבקות לכולן עם פריסט אחד.

הפריסטים נמצאים בלשונית **Settings ‹ Shipments**, מתחת לכתובות השולח.

## פריסטים מומלצים

רוב המוכרים צריכים שלושה פריסטים:

| פריסט | להזמנות אל | שירות |
|---|---|---|
| **USA** | ארצות הברית | Pylon MYPELT |
| **EU** | האיחוד האירופי, כשהמע״מ שולם בקופה | BPost EShipper |
| **ROW** | שאר העולם | BPost |

## יצירת פריסט

1. לחצו על השדה **Preset Name** ובחרו **New Preset...**.
2. לחצו שוב על השדה והקלידו שם, למשל *USA*.
3. מלאו את השדות (ראו טבלה בהמשך), לפי הסדר מלמעלה למטה.
4. לחצו על **Save**.

<div class="hotspot-figure" markdown>
![פריסט USA ממולא](../assets/img/setup/preset-usa.jpg)
<button class="hotspot" style="left:7.1%;top:29.6%" data-tip="שם הפריסט, למשל USA">1</button>
<button class="hotspot" style="left:7.1%;top:35.2%" data-tip="כתובת השולח שלכם">2</button>
<button class="hotspot" style="left:7.1%;top:40.8%" data-tip="None לשירותי דואר; חובה לבחור באקספרס">3</button>
<button class="hotspot" style="left:7.1%;top:51.6%" data-tip="שירות המשלוח">4</button>
<button class="hotspot" style="left:7.1%;top:62.6%" data-tip="מידות החבילה בס״מ, כשמשתמשים באריזה שלכם">5</button>
<button class="hotspot" style="left:43.3%;top:92.4%" data-tip="שמירת הפריסט">6</button>
</div>

| שדה | מה לבחור |
|---|---|
| **Address** | [כתובת השולח](addresses.md) שלכם. |
| **Drop-Off** | איך החבילות מגיעות לחברת השילוח. ראו [מסירה לשליח](#drop-off) בהמשך. |
| **Weight** | משקל חבילה טיפוסי בק״ג. |
| **Service** | שירות המשלוח. בחרו קודם **Address** ו-**Drop-Off**, אחרת הרשימה לא תיפתח. |
| **Package** | **Your packaging**, ואז הזינו את המידות (אורך × רוחב × גובה, בס״מ). |
| **Purpose** | **Commercial** אם אתם מוכרים את הסחורה. |
| **Signature** | **Not Required**, אלא אם נדרש אישור מסירה. |
| **Insurance** | **None**, אלא אם מדובר במשלוח בשווי גבוה. |
| **Print** | השאירו את ברירת המחדל. |

<div class="hotspot-figure" markdown>
![שירותי משלוח](../assets/img/setup/preset-services.jpg)
</div>

## שירותי אקספרס ושירותי דואר

| סוג | שירותים | מסירה לשליח |
|---|---|---|
| **אקספרס** | DHL Express,‏ FedEx International Priority,‏ FedEx International Economy | **חובה**:‏ Courier Pick Up או Courier Location |
| **דואר** | כל שאר השירותים (BPost,‏ BPost EShipper,‏ Pylon…) | **None** |

השירותים שזמינים לכם מופעלים על ידי Mailog בעת פתיחת החשבון.

## מסירה לשליח {#drop-off}

| אפשרות | משמעות |
|---|---|
| **None** | לשירותי דואר. |
| **Courier Pick Up** | שליח אוסף את החבילות מכתובת השולח. כשבוחרים באפשרות הזו מופיע חלון זמן לאיסוף (**Pickup**). איסופי אקספרס זמינים מ-09:30 ועד סוף היום. |
| **Courier Location** | אתם מוסרים את החבילות בעצמכם בנקודת מסירה של חברת השילוח. |

## עריכת פריסט שמור

בחרו את הפריסט ברשימה **Preset Name** ולחצו על **העיפרון הכחול** שלידו כדי לערוך. בסיום לחצו על **Save**.

!!! warning "בהשלמה"
    כללים להפקת מדבקות לכמה הזמנות בבת אחת.

**הבא:** [חיבורים ←](integrations.md)
