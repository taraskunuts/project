let products = []; // Змінна для збереження товарів
let loadedCount = 0; // Кількість вже завантажених товарів
const container = document.getElementById('products-container'); // Додайте <div id="products-container"></div> у HTML

fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    products = data; // Зберігаємо товари у глобальну змінну

    // Масив для імен, цін і наявності
    let names = [];
    let prices = [];
    let availableStatuses = [];

    for (let i = 0; i < products.length; i++) {
      names.push(products[i].name);
      prices.push(products[i].price);
      availableStatuses.push(products[i].available);
    }

    console.log('Імена:', names);
    console.log('Ціни:', prices);
    console.log('Наявність:', availableStatuses);

    loadMoreItems(); // Завантажуємо перші товари після отримання даних
  })
  .catch(error => console.error('Помилка:', error));

function loadMoreItems() {
  // Визначаємо скільки ще показати (макс 4)
  const nextItems = Math.min(loadedCount + 4, products.length);

  for (let i = loadedCount; i < nextItems; i++) {
    const product = products[i];
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <p>Ціна: ${product.price}₴</p>
      <p>В наявності: ${product.available ? '✅' : '❌'}</p>
    `;

    container.appendChild(productDiv);
  }
  loadedCount = nextItems; // Оновлюємо лічильник завантажених товарів
}