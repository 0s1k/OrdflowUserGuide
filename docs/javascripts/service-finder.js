// "What do I need to do?" wizard on the Service guide page.
// Edit the STEPS tree below to change questions and answers; no other code needs to change.
// Each node is either a question { q, options: [{ label, next }] } or a result { result, links: [{ label, href }] }.

const STEPS = {
  start: {
    q: "Which service is this shipment going with?",
    options: [
      { label: "Express", next: "express" },
      { label: "Postal", next: "postalArea" },
    ],
  },
  postalArea: {
    q: "Where is the pickup address?",
    options: [
      { label: "Center of Israel", next: "postalCenter" },
      { label: "Outside the Center", next: "postalDhl" },
    ],
  },
  express: {
    result: "Express shipment: label the bags, print the paperwork, then order an Express pickup.",
    links: [
      { label: "1. Which labels go on each bag", href: "labels/" },
      { label: "2. How to label a bag", href: "bag-labeling/" },
      { label: "3. Produce the paperwork", href: "paperwork/" },
      { label: "4. Order an Express pickup", href: "express-pickup/" },
    ],
  },
  postalCenter: {
    result: "Postal shipment from the Center: label the bags, print and route the paperwork, then order a Postal pickup.",
    links: [
      { label: "1. Which labels go on each bag", href: "labels/" },
      { label: "2. How to label a bag", href: "bag-labeling/" },
      { label: "3. Produce the paperwork", href: "paperwork/" },
      { label: "4. Where to route the paperwork", href: "paperwork-routing/" },
      { label: "5. Order a Postal pickup", href: "postal-pickup/" },
    ],
  },
  postalDhl: {
    result: "Postal shipment from outside the Center: the pickup is done by DHL.",
    links: [
      { label: "1. Which labels go on each bag", href: "labels/" },
      { label: "2. How to label a bag", href: "bag-labeling/" },
      { label: "3. Produce the paperwork", href: "paperwork/" },
      { label: "4. Where to route the paperwork", href: "paperwork-routing/" },
      { label: "5. Order a DHL pickup", href: "postal-dhl-pickup/" },
    ],
  },
};

function renderFinder(root, key, history) {
  const node = STEPS[key];
  root.innerHTML = "";

  if (node.q) {
    const q = document.createElement("p");
    q.className = "finder-question";
    q.textContent = node.q;
    root.appendChild(q);
    const row = document.createElement("div");
    row.className = "finder-options";
    node.options.forEach((opt) => {
      const b = document.createElement("button");
      b.className = "md-button";
      b.textContent = opt.label;
      b.onclick = () => renderFinder(root, opt.next, [...history, key]);
      row.appendChild(b);
    });
    root.appendChild(row);
  } else {
    const r = document.createElement("p");
    r.className = "finder-result";
    r.textContent = node.result;
    root.appendChild(r);
    const ol = document.createElement("ul");
    ol.className = "finder-links";
    node.links.forEach((l) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = l.href;
      a.textContent = l.label;
      li.appendChild(a);
      ol.appendChild(li);
    });
    root.appendChild(ol);
  }

  if (history.length) {
    const back = document.createElement("button");
    back.className = "md-button finder-back";
    back.textContent = "← Back";
    back.onclick = () => renderFinder(root, history[history.length - 1], history.slice(0, -1));
    const restart = document.createElement("button");
    restart.className = "md-button finder-back";
    restart.textContent = "Start over";
    restart.onclick = () => renderFinder(root, "start", []);
    root.appendChild(back);
    root.appendChild(restart);
  }
}

function initFinder() {
  const root = document.getElementById("service-finder");
  if (root) renderFinder(root, "start", []);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(initFinder);
} else {
  document.addEventListener("DOMContentLoaded", initFinder);
}
