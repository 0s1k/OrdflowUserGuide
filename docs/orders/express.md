# Express shipments

Express shipments go by **DHL Express**, **FedEx International Priority** or **FedEx International Economy**. Unlike Standard shipments, a courier collects them from you, or you drop them off at a courier location.

The steps are the same as in [Create shipping labels](create-labels.md). This page covers what's different for Express.

!!! tip "When to use Express"
    Use **FedEx International Economy** for EU orders where VAT was **not** paid at checkout. See the [shipping rules](rules.md).

## Create an Express preset

Create a preset for Express once, in [Settings › Shipments](../setup/presets.md). The example below is the **EU no VAT** preset:

| Field | What to choose |
|---|---|
| **Address** | The address the courier collects from. |
| **Drop-Off** | **Courier Pick Up** (the courier comes to you) or **Courier Location** (you drop the parcels off). |
| **Pickup** | The time window for the courier. Start times are 9:00–12:00 and end times are 12:00–3:00. Pickups are available from 09:30. |
| **Service** | **FedEx International Economy**. |
| **Package** | **Your packaging**, with its size in cm. |
| **Duty** | **DDU**. See below. |
| **Purpose** | **Commercial**. |
| **Signature**, **Insurance** | **Not Required**, **None**. |

<div class="grid-2" markdown>

![Pickup start times](../assets/img/orders/pickup-start-times.jpg)

![Duty options](../assets/img/orders/duty-options.jpg)

</div>

!!! info "Duty: DDU or DDP"
    - **DDU** (Delivered Duty Unpaid): the **receiver** pays the taxes. Use this one.
    - **DDP** (Delivered Duty Paid): the **sender** pays the taxes.

## Create the labels

1. Select the orders and click **Ship**.
2. Choose your Express **preset**.
3. Check the **Ship Date**: it's the day the courier comes. Change it if the pickup isn't today.
4. Check **N. of Pieces** (see below).
5. Click **Create Labels**.

<div class="hotspot-figure" markdown>
![Ship panel with the EU no VAT preset](../assets/img/orders/express-ship-panel.jpg)
<button class="hotspot" style="left:95%;top:18.9%" data-tip="Ship Date = pickup day">1</button>
<button class="hotspot" style="left:96%;top:25.1%" data-tip="Courier Pick Up">2</button>
<button class="hotspot" style="left:66%;top:31.6%" data-tip="Pickup time window">3</button>
<button class="hotspot" style="left:47%;top:50.2%" data-tip="Number of boxes">4</button>
<button class="hotspot" style="left:96%;top:69.6%" data-tip="Duty: DDU">5</button>
</div>

!!! warning "N. of Pieces: one label per box"
    **N. of Pieces** is the number of boxes. It's **1** by default. If you're sending the order in more than one box, enter the number of boxes: you get one label for each box.

!!! note "IOSS field"
    For EU destinations the VAT field is called **IOSS**. For orders where VAT wasn't paid, it stays empty.

## Invoices for Express {#invoices-for-express}

For Express, all the shipping documents are produced automatically. When you create the labels you can also **add your own invoice** as a PDF. If you don't, Ordflow creates one for you.

## The summary: your pickup number

After **Create Labels**, the summary shows the **Pickup#** (your booking number with the courier) and the **Pickup hours**.

<div class="grid-2" markdown>

<div class="hotspot-figure" markdown>
![Express Shipments Summary](../assets/img/orders/express-summary.jpg)
<button class="hotspot" style="left:62%;top:19.6%" data-tip="Pickup booking number">1</button>
<button class="hotspot" style="left:85%;top:26.3%" data-tip="Pickup time window">2</button>
</div>

<figure markdown>
![A sample FedEx label](../assets/img/orders/label-fedex-sample.jpg){ width="260" }
<figcaption>A sample FedEx label. Sender and tracking details are blurred.</figcaption>
</figure>

</div>

Then, as usual: **Print › Labels**, stick a label on each box, and click **Finish**. The shipment moves to [Shipments](shipments.md), with the pickup number in the **Pickup #** column.

## Cancel a pickup or an Express shipment

In [Shipments](shipments.md), tick the shipment and open the **Shipments** menu. Express shipments with a pickup have an extra option:

<div class="hotspot-figure" markdown>
![Cancel options for an Express shipment](../assets/img/orders/express-cancel-menu.jpg)
<button class="hotspot" style="left:34%;top:22.5%" data-tip="Cancel only the courier pickup">1</button>
</div>

| Option | What it does |
|---|---|
| **Cancel Pickups (All)** | Cancels **only the courier pickup**. The labels stay valid, so you can book a new pickup or drop the parcels off yourself. |
| **Cancel Shipments** | Cancels the labels and the order. |
| **Cancel Shipments & Restore Orders** | Cancels the labels and puts the orders back on the board. |

Each option asks you to confirm. Click **OK**.

![Confirm cancelling the pickup](../assets/img/orders/express-cancel-pickup-confirm.jpg)
