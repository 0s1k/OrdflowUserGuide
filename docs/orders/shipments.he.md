# משלוחים

אחרי לחיצה על **Finish**, ההזמנות עוברות ל-**Shipments**, הסמל השני בתפריט השמאלי. כאן אפשר לעקוב אחרי המשלוחים ולבטל מדבקות.

![רשימת המשלוחים](../assets/img/orders/shipments-list.jpg)

| עמודה | משמעות |
|---|---|
| **Title** | שם הפריט. |
| **#Items** | מספר הפריטים השונים. |
| **ID** | מספר ההזמנה שלכם. |
| **Courier** | השירות שבו הופקה המדבקה. |
| **Tracking #** | מספר המעקב. לחצו עליו כדי לעקוב אחרי החבילה. |
| **Pickup #** | מספר הזמנת האיסוף, באיסוף על ידי שליח. |
| **Recipient** | שם ועיר. |
| **Ship date** | היום שעבורו הופקה המדבקה. |
| **Last Event** | עדכון המעקב האחרון מחברת השילוח. |

!!! info "מיד אחרי הפקת המדבקה"
    עד שחברת השילוח סורקת את החבילה, ב-**Last Event** יופיע משהו כמו *Label Created* או *Shipment information received*. זה תקין: החבילה עדיין לא נסרקה.

## ביטול מדבקה, משלוח או איסוף {#cancel-a-label}

כל הביטולים נעשים כאן, במסך **Shipments**. משלוח רגיל ומשלוח אקספרס מבוטלים באותה הדרך. למשלוחי אקספרס עם איסוף של שליח יש אפשרות נוספת אחת.

### ביטול משלוח רגיל (Standard) {#cancel-a-regular-shipment}

1. סמנו את התיבה ליד המשלוח.
2. לחצו על **Shipments** בסרגל הכלים ובחרו אחת מהאפשרויות שלמטה.
3. לחצו על **OK** כדי לאשר.

<div class="hotspot-figure" markdown>
![אפשרויות ביטול](../assets/img/orders/shipments-cancel-menu.jpg)
<button class="hotspot" style="left:34%;top:22.5%" data-tip="ביטול המדבקה וההזמנה">1</button>
<button class="hotspot" style="left:34%;top:28.8%" data-tip="ביטול המדבקה והחזרת ההזמנה ללוח">2</button>
</div>

| אפשרות | מתי משתמשים בה |
|---|---|
| **Cancel Shipments** | ההזמנה לא יוצאת בכלל. המדבקה וההזמנה מבוטלות. |
| **Cancel Shipments & Restore Orders** | צריך לשנות משהו ולשלוח מחדש, למשל הלקוח שינה כתובת. המדבקה מבוטלת וההזמנה חוזרת ללוח. |

![אישור הביטול](../assets/img/orders/shipments-cancel-confirm.jpg)

### ביטול משלוח אקספרס עם איסוף {#cancel-an-express-shipment}

במשלוחי אקספרס עם איסוף יש אפשרות נוספת:

<div class="hotspot-figure" markdown>
![אפשרויות ביטול למשלוח אקספרס](../assets/img/orders/express-cancel-menu.jpg)
<button class="hotspot" style="left:34%;top:22.5%" data-tip="ביטול האיסוף בלבד">1</button>
</div>

| אפשרות | מה היא עושה |
|---|---|
| **Cancel Pickups (All)** | מבטלת **רק את האיסוף**. המדבקות נשארות בתוקף, כך שאפשר להזמין איסוף חדש או למסור את החבילות בעצמכם. |
| **Cancel Shipments** | מבטלת את המדבקות ואת ההזמנה. |
| **Cancel Shipments & Restore Orders** | מבטלת את המדבקות ומחזירה את ההזמנות ללוח. |

כל אפשרות מבקשת אישור. לחצו על **OK**.

![אישור ביטול האיסוף](../assets/img/orders/express-cancel-pickup-confirm.jpg)

## ‏Complete

אחרי ששלחתם את המסמכים והעברתם אותם ל-ops@mailogs.com, בחרו את המשלוחים ובחרו **Actions ‹ Complete**. הם עוברים ל-**Reports**. ראו [מסמכי משלוח](documents.md#mark-complete).

**הבא:** [מסמכי משלוח ←](documents.md)
