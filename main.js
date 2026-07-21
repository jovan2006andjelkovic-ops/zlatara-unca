/* Shared UI behavior across pages: mobile nav drawer, product card rendering,
   category filtering, add-to-cart buttons. */

function productCardHTML(p) {
  return `
    <article class="product-card" data-cat="${p.catKey}">
      <a href="product.html?id=${p.id}" class="product-media">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        ${iconFor(p.icon)}
      </a>
      <div class="product-body">
        <span class="product-cat">${p.cat}</span>
        <a href="product.html?id=${p.id}"><h3 class="product-name">${p.name}</h3></a>
        <div class="product-foot">
          <span class="product-price">${formatRSD(p.price)}</span>
          <button class="product-add" data-add="${p.id}" aria-label="Dodaj u korpu: ${p.name}">+</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductGrid(container, products) {
  container.innerHTML = products.map(productCardHTML).join("");
  bindAddButtons(container);
}

function bindAddButtons(scope) {
  scope.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(btn.dataset.add, 1);
      const original = btn.textContent;
      btn.textContent = "✓";
      setTimeout(() => (btn.textContent = original), 900);
    });
  });
}

function initMobileDrawer() {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  const close = document.querySelector(".mobile-drawer .close-btn");
  if (!toggle || !drawer) return;
  toggle.addEventListener("click", () => drawer.classList.add("open"));
  if (close) close.addEventListener("click", () => drawer.classList.remove("open"));
  drawer.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => drawer.classList.remove("open"))
  );
}

function initFilterChips(chipSelector, onFilter) {
  const chips = document.querySelectorAll(chipSelector);
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      onFilter(chip.dataset.filter);
    });
  });
}

document.addEventListener("DOMContentLoaded", initMobileDrawer);
