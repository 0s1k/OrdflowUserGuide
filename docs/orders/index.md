# The orders board

Click **Orders**, the top icon in the left menu, to see your orders. Each order is a card, and the cards are arranged in columns.

<div class="hotspot-figure" markdown>
![The orders board](../assets/img/orders/after-import.jpg)
<button class="hotspot" style="left:9.5%;top:16.1%" data-tip="Add an order by hand">1</button>
<button class="hotspot" style="left:21%;top:16.1%" data-tip="Get the latest orders from your connected stores">2</button>
<button class="hotspot" style="left:30.5%;top:16.1%" data-tip="Import orders from an Excel or CSV file">3</button>
<button class="hotspot" style="left:18%;top:23.7%" data-tip="New: incoming orders arrive here">4</button>
<button class="hotspot" style="left:26.5%;top:69%" data-tip="An order card. Click it to open the order">5</button>
</div>

This layout is the **Stages** view. You can switch to the **Grid** view in [Settings › Orders](../setup/orders.md).

## Getting orders in

| Button | What it does |
|---|---|
| **+ Add Order** | Create an order by hand. |
| **Get new orders** | Fetch the latest orders from your [connected stores](../setup/integrations.md). |
| **Import** | Upload orders from a file. See [Import orders from Excel](import.md). |

New orders arrive in the **New** column.

## Reading an order card

| On the card | Meaning |
|---|---|
| **Number** (top left, e.g. 240) | Ordflow's internal order number. |
| **Title** | The item name. |
| **Logo** | Where the order came from: the store's logo (for example Etsy's **E**) or the Ordflow logo for orders created or imported in Ordflow. |
| **ID** | Ordflow's internal ID. Your own order number is shown when you [open the order](order-details.md). |
| **SKU** | The product code. |
| **To** | The recipient's name and country. |
| **$55 \| 2 X 2 items \| 7 Oct 26** | Order value \| total units × number of different items \| date. |

## Selecting orders

Tick the box at the bottom left of a card to select it. The column header shows how many are selected, for example **1/44**, and more buttons appear in the toolbar.

<div class="hotspot-figure" markdown>
![An order selected](../assets/img/orders/board-selected.jpg)
<button class="hotspot" style="left:10.5%;top:95.8%" data-tip="Tick to select the order">1</button>
<button class="hotspot" style="left:22%;top:24%" data-tip="Number of selected orders in this column">2</button>
<button class="hotspot" style="left:61.5%;top:16.1%" data-tip="Ship: create shipping labels for the selected orders">3</button>
</div>

| Button | What it does |
|---|---|
| **Export** | Download the selected orders as an Excel file. |
| **Select** | **Select all**, **Unselect all**, **Show Selected** (hide the rest), **Show All**. |
| **Actions** | **Complete**, **Archive** or **Delete** the selected orders. |
| **Print** | **Orders**: a PDF of the selected orders. **Orders Slips**: packing slips. |
| **Ship** | Open the shipping panel to [create labels](create-labels.md). |

## Using stages {#stages}

Stages (the columns) are only there to help you organise your orders. Moving an order between stages doesn't change anything else.

A good way to use them is **one stage per service**:

1. Click **+ Add Stage** (to the right of the last column) and create stages such as **USA**, **IOSS** and **ROW**.
2. Drag each order from **New** into the stage of its service.
3. Tick the **checkbox in the stage header**. This selects all the orders in that stage.
4. Click **Ship** and create the labels for the whole service at once. See [Create shipping labels](create-labels.md).

**Next:** [Order details →](order-details.md)
