# Shipping documents

After you've created the labels, prepare the shipping documents for each service and send them to Mailog. This page covers **Standard** shipments. For **Express**, the documents are produced automatically: see [Express shipments](express.md#invoices-for-express).

## What you need, per service

For **each service** you're shipping today (USA, Rest of the World, EU with IOSS), you need three documents:

| Document | Format | What it is |
|---|---|---|
| **Air Waybill (AWB)** | PDF | The transport document for the bags of that service. **One AWB per service.** |
| **Invoices** | Excel | The commercial invoice for all the shipments of that service. |
| **Manifest** | Excel | The list of all the parcels of that service. |

!!! info "One AWB per service, each time you send documents"
    There's no daily limit. If you prepare documents twice a day, you create one AWB per service each time.

## 1. Select one service's shipments

1. Go to [Shipments](shipments.md).
2. In **Select Courier**, choose one service, for example **BPost**. Only that service's shipments are shown. The dropdown appears when you have shipments with more than one service.
3. Tick the box in the **header** to select all of them.

<div class="hotspot-figure" markdown>
![Filtering shipments by courier](../assets/img/orders/docs-courier-filter.jpg)
<button class="hotspot" style="left:67.5%;top:22.4%" data-tip="Choose one service">1</button>
<button class="hotspot" style="left:10.5%;top:34.7%" data-tip="Select all shown shipments">2</button>
</div>

## 2. Print the three documents

Click **Print** in the toolbar and create each document:

<div class="hotspot-figure" markdown>
![The Print menu](../assets/img/orders/docs-print-menu.jpg)
<button class="hotspot" style="left:37.5%;top:46%" data-tip="Air Waybill (PDF)">1</button>
<button class="hotspot" style="left:37.5%;top:56.7%" data-tip="Invoices (Excel)">2</button>
<button class="hotspot" style="left:37.5%;top:66.7%" data-tip="Manifest (Excel)">3</button>
</div>

1. **Air Waybill**: enter the **Number of Bags** for this service and click **OK**. The AWB opens as a PDF. Save it.
2. **Invoices**: an Excel file downloads.
3. **Manifest**: an Excel file downloads.

You can also print them right after **Create Labels**, from the **Print** menu in the summary. It's the same.

<div class="grid-2" markdown>

![Number of bags](../assets/img/orders/docs-awb-bags.jpg)

<figure markdown>
![A sample Air Waybill](../assets/img/orders/docs-awb-sample.jpg){ width="300" }
<figcaption>A sample Air Waybill. Addresses and numbers are blurred.</figcaption>
</figure>

</div>

!!! danger "One AWB on every bag"
    Print the AWB **once for each bag** of that service and stick it on every bag. If you have 3 bags for the USA, print the USA AWB 3 times. See also the [bag rules](rules.md#bags).

Repeat steps 1 and 2 for each service you're shipping.

## 3. Send the documents

Open the **Shipment documents** form:

[Open the documents form](https://mailogs.retool.com/form/77869aa3-cb9e-4c44-b697-dd44f6d2ee67){ .md-button .md-button--primary }

<div class="grid-2" markdown>

<div class="hotspot-figure" markdown>
![The Shipment documents form](../assets/img/orders/docs-form-top.jpg)
<button class="hotspot" style="left:93%;top:48%" data-tip="USA: AWB + Invoice + Manifest">1</button>
<button class="hotspot" style="left:93%;top:72.7%" data-tip="Rest of the World">2</button>
<button class="hotspot" style="left:93%;top:93%" data-tip="EU, IOSS (VAT paid)">3</button>
</div>

![Your email and company name](../assets/img/orders/docs-form-bottom.jpg)

</div>

1. For each service you're shipping, drop its **3 files** (AWB as PDF, Invoice and Manifest as Excel) into the matching box: **US Files**, **ROW Files** or **IOSS Files**. Fill in only the boxes you need.
2. Enter **Your Email** and **Company Name**.
3. Click **Submit**.

!!! warning "Use the original AWB PDF"
    Upload the AWB PDF exactly as Ordflow created it. A scan or a photo of a printed AWB can't be read, and the form needs the AWB number.

Mailog reads the AWB number, writes it into your invoice as the invoice number, and emails all the documents back to you.

## 4. Forward the email to Mailog

1. Check the documents in the email you receive.
2. **Forward the email to [ops@mailogs.com](mailto:ops@mailogs.com).**

## 5. Mark the shipments as Complete

In [Shipments](shipments.md), select the shipments you've just sent and choose **Actions › Complete**. They move to **Reports**, and your Shipments list is clear for the next batch.

!!! tip "Only after forwarding the email"
    Mark shipments **Complete** only after you've forwarded the documents to ops@mailogs.com.
