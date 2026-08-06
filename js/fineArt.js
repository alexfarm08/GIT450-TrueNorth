const productDisplay = document.querySelector('.product-display');

const products = Array.from({ length: 30 }, (_, i) => ({
    image: `../Images/photos/product.jpg`,
    name: 'Piece Name',
    location: 'Location Name, State/Province',
    price: '$995'
}));

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <a href="pdpStandardHorizontal.html">
            <img src="${product.image}" alt="${product.name}">
        </a>
        <a href="pdpStandardHorizontal.html" class="product-link">
            <p class="product-name">${product.name}</p>
        </a>
        <p class="product-location">${product.location}</p>
        <p class="product-price">${product.price}</p>
    `;

    productDisplay.appendChild(card);
});