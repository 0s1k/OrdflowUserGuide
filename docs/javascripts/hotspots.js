// Clickable screenshot hotspots.
// Markup (inside any page):
//   <div class="hotspot-figure" markdown>
//   ![Alt text](../assets/img/screen.png)
//   <button class="hotspot" style="left:20%;top:30%" data-tip="Click New Order">1</button>
//   </div>
// left/top are percentages of the image size, so hotspots stay in place at any screen width.

function initHotspots() {
  document.querySelectorAll(".hotspot-figure").forEach((figure) => {
    if (figure.dataset.ready) return;
    figure.dataset.ready = "1";

    figure.querySelectorAll(".hotspot").forEach((spot) => {
      const tip = document.createElement("span");
      tip.className = "hotspot-tip";
      tip.textContent = spot.dataset.tip || "";
      spot.appendChild(tip);
      spot.setAttribute("aria-label", spot.dataset.tip || "");

      spot.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = spot.classList.contains("open");
        figure.querySelectorAll(".hotspot.open").forEach((s) => s.classList.remove("open"));
        if (!open) spot.classList.add("open");
      });
    });
  });
}

document.addEventListener("click", () =>
  document.querySelectorAll(".hotspot.open").forEach((s) => s.classList.remove("open"))
);

// Material's instant navigation swaps pages without a reload, so hook into its page observable.
if (typeof document$ !== "undefined") {
  document$.subscribe(initHotspots);
} else {
  document.addEventListener("DOMContentLoaded", initHotspots);
}
