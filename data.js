/* Klijentska korpa — čuva se u localStorage, bez pravog plaćanja.
   Namenjeno za vizuelnu/UX demonstraciju pre pitch prezentacije klijentu. */

const CART_KEY = "unca_cart_v1";

function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartPill();
}

function addToCart(productId, qty) {
  qty = qty || 1;
  const cart = readCart();
  const existing = cart.find((line) => line.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  writeCart(cart);
}

function removeFromCart(productId) {
  const cart = readCart().filter((line) => line.id !== productId);
  writeCart(cart);
}

function setQty(productId, qty) {
  const cart = readCart();
  const line = cart.find((l) => l.id === productId);
  if (line) {
    line.qty = Math.max(1, qty);
    writeCart(cart);
  }
}

function cartCount() {
  return readCart().reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  return readCart().reduce((sum, line) => {
    const p = getProductById(line.id);
    return p ? sum + p.price * line.qty : sum;
  }, 0);
}

function updateCartPill() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = cartCount();
  });
}

document.addEventListener("DOMContentLoaded", updateCartPill);
