# הפקת מדבקות משלוח

אפשר להפיק מדבקות להזמנה אחת או להרבה הזמנות בבת אחת.

בעמוד הזה מוצג משלוח רגיל. לאקספרס, ראו גם [משלוחי אקספרס](express.md).

!!! warning "קודם בדקו את הכללים"
    לכל יעד יש שירות משלו, וחלק מההזמנות צריך לפצל. קראו את [כללי המשלוח](rules.md) לפני שאתם מפיקים מדבקות לכמה הזמנות יחד.

## 1. בחירת ההזמנות

ב[לוח ההזמנות](index.md), סמנו את התיבה בכל הזמנה שאתם רוצים לשלוח. ואז לחצו על **Ship** בסרגל הכלים.

![הזמנות שנבחרו, Ship בסרגל הכלים](../assets/img/orders/board-selected.jpg)

## 2. בחירת פריסט

החלונית **Shipments Details** נפתחת מימין. לחצו על **preset** בפינה הימנית העליונה ובחרו אחד מה[פריסטים](../setup/presets.md) שלכם. השדות מתמלאים אוטומטית.

<div class="grid-2" markdown>

![בחירת פריסט](../assets/img/orders/ship-preset-list.jpg)

<div class="hotspot-figure" markdown>
![החלונית אחרי בחירת הפריסט USA](../assets/img/orders/ship-panel-usa.jpg)
<button class="hotspot" style="left:72%;top:8.5%" data-tip="בחירת פריסט">1</button>
<button class="hotspot" style="left:75%;top:31.6%" data-tip="משקל לכל פריט, לא לחבילה">2</button>
<button class="hotspot" style="left:96%;top:37.8%" data-tip="שירות המשלוח">3</button>
<button class="hotspot" style="left:96%;top:63%" data-tip="מתמלא אוטומטית במשלוחים לאיחוד האירופי (IOSS)">4</button>
<button class="hotspot" style="left:48%;top:95.8%" data-tip="הפקת המדבקות">5</button>
</div>

</div>

## 3. בדיקת הפרטים

| שדה | מה לבדוק |
|---|---|
| **Ship From** | [כתובת השולח](../setup/addresses.md) שלכם. |
| **Ship Date** | היום שבו החבילות יוצאות. |
| **Drop-Off** | **None** במשלוח רגיל (לא אקספרס). באקספרס, בחרו איך השליח מקבל את החבילות. |
| **Weight** | המשקל **לכל פריט**. ראו את האזהרה בהמשך. |
| **Service** | שירות המשלוח. הוא חייב להתאים ליעד: ראו [כללי משלוח](rules.md). |
| **Package**,‏ **Size** | האריזה שלכם והמידות שלה בס״מ. |
| **Purpose**,‏ **Signature**,‏ **Insurance** | בדרך כלל **Commercial**,‏ **Not Required** ו-**None**. |
| **VAT Code** | מתמלא אוטומטית. ראו בהמשך. |

!!! danger "המשקל הוא לכל פריט"
    הזינו את המשקל של **פריט אחד**, לא של כל החבילה. לדוגמה, אם החבילה שוקלת 2 ק״ג ויש בה 2 פריטים, הזינו **1**.

!!! info "VAT Code"
    Ordflow ממלאת את מספר המע״מ שמתאים ליעד, לפי המספרים שב[הגדרות ‹ הנהלת חשבונות](../setup/accounting.md#vat-types-ioss). במשלוחים לאיחוד האירופי היא ממלאת את מספר ה-**IOSS** שלכם, אבל רק אם **כל** ההזמנות שנבחרו נשלחות למדינות באיחוד. בארה״ב השדה נשאר ריק, אלא אם שמרתם מספר מע״מ אמריקאי.

בשדה **Rate** מוצג מחיר רק אם חיברתם [חשבון שליחויות משלכם](../setup/integrations.md#your-own-courier-account).

## 4. הפקת המדבקות

לחצו על **Create Labels**. אחרי כמה שניות מופיע **Shipments Summary** (סיכום המשלוח).

<div class="hotspot-figure" markdown>
![סיכום המשלוח](../assets/img/orders/shipments-summary.jpg)
<button class="hotspot" style="left:62%;top:32.7%" data-tip="מספר המדבקות שהופקו">1</button>
<button class="hotspot" style="left:33%;top:40.1%" data-tip="Print ‹ Labels">2</button>
<button class="hotspot" style="left:71%;top:94%" data-tip="Finish">3</button>
</div>

השדות **Pickup#** ו-**Pickup hours** מתמלאים רק כשהוזמן איסוף על ידי שליח (אקספרס עם **Courier Pick Up**).

## 5. הדפסת המדבקות וסיום

1. לחצו על **Print** ‹ **Labels**. המדבקות נפתחות כקובץ PDF בלשונית חדשה בדפדפן. הדפיסו אותן.
2. לחצו על **Finish**.

ההזמנות יוצאות מהלוח ועוברות ל[משלוחים](shipments.md). אם ההזמנה הגיעה מחנות והאפשרות **Autocomplete eCommerce Orders** מסומנת ב[הגדרות](../setup/shipment-settings.md#autocomplete), לחיצה על Finish גם מסמנת את ההזמנה כנשלחה בחנות שלכם.

<figure markdown>
![מדבקה לדוגמה](../assets/img/orders/label-sample.jpg){ width="260" }
<figcaption>מדבקה לדוגמה למשלוח רגיל לארה״ב. פרטי המעקב מטושטשים.</figcaption>
</figure>

!!! note "במשלוח רגיל Mailog מופיעה כשולחת"
    במשלוח רגיל Mailog היא המאחדת (consolidator), ולכן על המדבקה מופיעה Mailog כשולחת, ולא הכתובת שלכם.

**הבא:** [משלוחים ←](shipments.md)
