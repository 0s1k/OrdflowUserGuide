# Import orders from Excel

If your orders don't come from a connected store, you can upload them from an Excel or CSV file.

[:material-download: Download the template](../assets/files/ordflow-orders-import-template.xlsx){ .md-button .md-button--primary }

## One row = one item

Each row in the file is **one item**, not one order. When an order has several items, give each item its own row and repeat the **same Order Id** on every row.

!!! example "A customer orders a T-shirt and shorts in order 1001"
    That's **2 rows**, both with Order Id **1001**. Ordflow combines them into one order with two items.

<div class="import-example" markdown>

| Order Id | Item (m) | Order Price (m) | Quantity (m) | Weight | Recipient First Name (m) | Recipient Country Code (m) |
|---|---|---|---|---|---|---|
| **1001** | T-Shirt | 25 | 1 | 0.2 | John | US |
| **1001** | Shorts | 30 | 1 | 0.3 | John | US |
| **1002** | Ceramic Mug | 40 | 2 | 1.2 | Anna | DE |

</div>

The table above shows only some of the columns. The template has all of them.

!!! tip "Repeat the recipient on every row"
    Fill in the recipient's details on every row of the order, not only the first.

## Columns

In the column names, **(m)** means mandatory and **(o)** means optional. A few columns have no mark, so use the **Required** column below.

| Column | Required | What to enter | Example |
|---|:-:|---|---|
| **Order Id** | ✅ | Your order number. The same number on every row of the order. | 1001 |
| **Item (m)** | ✅ | The item name. | T-Shirt |
| **SKU (o)** | | Your product code. | TS-RED-M |
| **Hs code** | ✅ | The customs code for the item (6 to 10 digits). | 61091000 |
| **Order Price (m)** | ✅ | The price for this row (all units of this item). | 25 |
| **Currency (m)** | ✅ | 3-letter currency code. | USD |
| **Quantity (m)** | ✅ | Number of units. | 1 |
| **Weight** | ✅ | Total weight for this row. | 0.2 |
| **Weight Unit** | ✅ | Unit of the weight. KG if you're not sure. | KG |
| **Order Date (m)** | ✅ | Date in DD/MM/YYYY format. Needed to create the order. | 05/10/2026 |
| **Ship Date (o)** | | Date in DD/MM/YYYY format. | |
| **Details (o)** | | Notes for the order. | |
| **Recipient Company Name (o)** | | | |
| **Recipient First Name (m)** | ✅ | | John |
| **Recipient Last Name** | ✅ | Can't be empty. If there's no last name, enter **-**. | Smith |
| **Recipient Country Code (m)** | ✅ or name | 2-letter country code. | US |
| **Recipient Country Name (m)** | ✅ or code | Country name in English. | United States |
| **Recipient City (m)** | ✅ | | New York |
| **Recipient State (mo)** | For some countries | Required where the address has a state or region, for example the USA and some EU countries. | NY |
| **Recipient postal code m** | ✅ | | 10001 |
| **Recipient Address 1 (m)** | ✅ | Street and number. | 350 Fifth Avenue |
| **Recipient Address 2 (o)** | | Apartment, floor, building. | Apt 12 |
| **Recipient Email (m)** | ✅ | | john.smith@example.com |
| **Recipient Phone (o)** | | | +1 212 555 0100 |

!!! info "Country: code or name"
    You need **either** the country code **or** the country name. If you fill in the name, the code isn't required.

!!! warning "Keep the template's format"
    - Don't rename, remove or reorder the columns.
    - Keep the cells formatted as **text**, as in the template. This keeps leading zeros in postal codes and HS codes.
    - Write dates as **DD/MM/YYYY**.

## Upload the file

1. Go to **Orders**.
2. Click **Import** in the toolbar at the top.
3. Choose your file. Ordflow accepts **.xlsx**, **.csv** and **.txt** files. CSV and TXT files use the same columns as the template.
4. The imported orders appear in the **New** column.

<div class="hotspot-figure" markdown>
![Orders after import](../assets/img/orders/after-import.jpg)
<button class="hotspot" style="left:30.5%;top:16.1%" data-tip="Click Import and choose your file">1</button>
<button class="hotspot" style="left:26.5%;top:69%" data-tip="Order 1001 (T-shirt + Shorts) became one order with 2 items, $55 in total">2</button>
<button class="hotspot" style="left:18%;top:23.7%" data-tip="The imported orders appear in the New column">3</button>
</div>

## Reading the order card

| On the card | Meaning |
|---|---|
| **240** (top left) and **ID** | Ordflow's internal numbers. To see **your** Order Id, click the card: the order opens in a panel on the right. |
| **2 X 2 items** | Total units × number of different items. Order 1001 has 2 units of 2 different items; order 1002 has **2 X 1 items**: 2 units of one item. |

## If some rows fail

If Ordflow can't import some rows:

1. A small message appears for a few seconds at the bottom left, for example **4 of 6 completed**.
2. An Excel file with the failed rows is downloaded automatically. It has an extra column at the end that explains what went wrong in each row.
3. Fix those rows and import that file again.

The rows that succeeded are already in Ordflow, so don't import them again.
