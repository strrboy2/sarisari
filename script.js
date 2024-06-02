// script.js

const products = [
    { id: 1, name: 'Product 1', price: 10, retailPrice: 15 },
    { id: 2, name: 'Product 2', price: 20, retailPrice: 30 },
    { id: 3, name: 'Product 3', price: 20, retailPrice: 30 },
    { id: 4, name: 'Product 4', price: 20, retailPrice: 30 },
    { id: 5, name: 'Product 5', price: 20, retailPrice: 30 },
    { id: 6, name: 'Product 6', price: 20, retailPrice: 30 },
    { id: 7, name: 'Product 7', price: 20, retailPrice: 30 },
    { id: 8, name: 'Product 8', price: 20, retailPrice: 30 },
    { id: 9, name: 'Product 9', price: 20, retailPrice: 30 },
    { id: 10, name: 'Product 10', price: 20, retailPrice: 30 },
    { id: 11, name: 'Product 11', price: 20, retailPrice: 30 },
    // Add more products as needed
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart');
    const totalCostPriceElem = document.getElementById('total-cost-price');
    const totalRetailPriceElem = document.getElementById('total-retail-price');
    const profitElem = document.getElementById('profit');
    const resetCartButton = document.getElementById('reset-cart');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Function to render product list
    function renderProductList(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - Price: PHP${product.price} - Retail Price: PHP${product.retailPrice}
                            <button onclick="addToCart(${product.id})">Add to Cart</button>`;
            productList.appendChild(li);
        });
    }

    // Function to render cart
    function renderCart() {
        cartList.innerHTML = '';
        let totalCostPrice = 0;
        let totalRetailPrice = 0;
        cart.forEach(product => {
            totalCostPrice += product.price;
            totalRetailPrice += product.retailPrice;
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - Price: PHP${product.price} - Retail Price: PHP${product.retailPrice}`;
            cartList.appendChild(li);
        });
        totalCostPriceElem.textContent = totalCostPrice.toFixed(2);
        totalRetailPriceElem.textContent = totalRetailPrice.toFixed(2);
        profitElem.textContent = (totalRetailPrice - totalCostPrice).toFixed(2);
    }

    // Function to add product to cart
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            renderCart();
        }
    };

    // Function to reset cart
    function resetCart() {
        cart.length = 0; // Clear the cart array
        renderCart(); // Re-render the cart
    }

    // Function to handle search
    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        renderProductList(filteredProducts);
    }

    // Attach resetCart function to the reset button
    resetCartButton.addEventListener('click', resetCart);

    // Attach handleSearch function to the search button
    searchButton.addEventListener('click', handleSearch);

    // Initial render
    renderProductList(products);
});
