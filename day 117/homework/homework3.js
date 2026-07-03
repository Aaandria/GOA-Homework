const loadProductsBtn = document.getElementById('loadProductsBtn');
const productsContainer = document.getElementById('productsContainer');

const cart = [];

function formatPrice(n){
  return n.toFixed(2);
}

async function loadProducts() {
  try {
    productsContainer.innerHTML = '<p>Loading products...</p>';

    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();

    productsContainer.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.title;

      const h3 = document.createElement('h3');
      h3.textContent = product.title;

      const p = document.createElement('p');
      p.textContent = product.description.slice(0,80) + '...';

      const price = document.createElement('strong');
      price.textContent = '$' + formatPrice(product.price);

      const btn = document.createElement('button');
      btn.textContent = 'Add to cart';
      btn.style.marginTop = '8px';
      btn.addEventListener('click', () => addToCart(product));

      card.appendChild(img);
      card.appendChild(h3);
      card.appendChild(p);
      card.appendChild(price);
      card.appendChild(btn);

      productsContainer.appendChild(card);
    });

  } catch (error) {
    productsContainer.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

function addToCart(product){
  // simple push; we'll show aggregated quantities in UI
  cart.push(product);
  updateCartUI();
}

function updateCartUI(){
  const cartItems = document.getElementById('cartItems');
  const cartSum = document.getElementById('cartSum');
  if(!cartItems || !cartSum) return;
  cartItems.innerHTML = '';

  const map = new Map();
  cart.forEach(p => {
    const id = p.id;
    if(!map.has(id)) map.set(id, {...p, qty:0});
    map.get(id).qty += 1;
  });

  map.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title || item.name} x${item.qty}`;
    li.style.background = '#eef2ff';
    li.style.padding = '6px 8px';
    li.style.borderRadius = '8px';
    cartItems.appendChild(li);
  });

  const total = cart.reduce((s,p)=>s + (p.price || 0), 0);
  cartSum.textContent = formatPrice(total);
}

function clearCart(){
  cart.length = 0;
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  const buyNow = document.getElementById('buyNowBtn');
  buyNow?.addEventListener('click', () => {
    if(cart.length === 0) return alert('Cart is empty');
    alert('Purchase complete — thank you!');
    clearCart();
  });
});

loadProductsBtn?.addEventListener('click', loadProducts);

