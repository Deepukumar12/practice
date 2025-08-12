// document.addEventListener("DOMContentLoaded", () => {

//     const products = [ 
//         {id: 1, name: "product 1", price: 29.99},
//         {id: 2, name: "product 2", price: 19.99},
//         {id: 3, name: "product 3", price: 14.99},
//     ];

//     const cart = [];


//     const productList = document.getElementById("product-list");
//     const cartItems = document.getElementById("cart-items");
//     const emptyCartMessage = document.getElementById("empty-cart");
//     const cartTotalMessage = document.getElementById("cart-total");
//     const totalPriceDisplay = document.getElementById("total-price");
//     const checkOutButton = document.getElementById("checkout-btn");


//     products.forEach(product => {
//         const productDiv = document.createElement("div");
//         productDiv.classList.add("product");
        
//         productDiv.classList.add("product");
//         productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span>
//         <button data-id="${product.id}">Add to Cart</button>`;

//         productList.appendChild(productDiv);
//     });


//     productList.addEventListener("click", (e) =>{
//         // console.log("clicked");
//         if(e.target.tagName === "BUTTON")
//         {
//             // console.log("clicked");
//             const productId = parseInt(e.target.getAttribute("data-id"));

//             const product = products.find(p => p.id === productId);
//             // console.log(product);
//             addToCart(product);
//         }
//     });

//     function addToCart(product)
//     {
//         cart.push(product);
//         // console.log(cart);
//         renderCart();
//     }


//     function renderCart()
//     {
//         cartItems.innerText = "";
//         let totalPrice  = 0;

//         if(cart.length > 0)
//         {
//             emptyCartMessage.classList.add("hidden");
//             cartTotalMessage.classList.remove("hidden");

//             cart.forEach((item, index) => {
//                 totalPrice += item.price;

//                 const cartItem = document.createElement('div');
//                 cartItem.innerHTML = `${item.name}  - $${item.price.toFixed(2)}`;

//                 cartItems.appendChild(cartItem);

//                 totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
//             });
//         }
//         else
//         {
//             emptyCartMessage.classList.remove("hidden");
//             totalPriceDisplay.textContent = `$0.00`;
//         }
//     }


//     checkOutButton.addEventListener('click', () =>{
//         cart.length = 0;
//         alert("Checkout Successfully")
//         {
//             renderCart();
//         }
//     })





// //     const cartItem = document.createElement('div');
// // cartItem.innerHTML = `${item.name}  - $${item.price.toFixed(2)}`;
// // cartItems.appendChild(cartItem);


// const cartItem = document.createElement('div');

// cartItem.innerHTML = `
//     <span>${item.name} - $${item.price.toFixed(2)}</span>
//     <button class="remove-btn" data-index="${index}">Remove</button>
// `;

// cartItems.appendChild(cartItem);

// document.querySelectorAll(".remove-btn").forEach(button => {
//     button.addEventListener("click", (e) => {
//         const index = parseInt(e.target.getAttribute("data-index"));
//         cart.splice(index, 1);
//         renderCart();
//     });
// });



// function renderCart() {
//     cartItems.innerText = "";
//     let totalPrice = 0;

//     if (cart.length > 0) {
//         emptyCartMessage.classList.add("hidden");
//         cartTotalMessage.classList.remove("hidden");

//         cart.forEach((item, index) => {
//             totalPrice += item.price;

//             const cartItem = document.createElement('div');
//             cartItem.innerHTML = `
//                 <span>${item.name} - $${item.price.toFixed(2)}</span>
//                 <button class="remove-btn" data-index="${index}">Remove</button>
//             `;

//             cartItems.appendChild(cartItem);
//         });

//         // Add listeners for remove buttons
//         document.querySelectorAll(".remove-btn").forEach(button => {
//             button.addEventListener("click", (e) => {
//                 const index = parseInt(e.target.getAttribute("data-index"));
//                 cart.splice(index, 1);
//                 renderCart();
//             });
//         });

//         totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
//     } else {
//         emptyCartMessage.classList.remove("hidden");
//         cartTotalMessage.classList.add("hidden");
//         totalPriceDisplay.textContent = `$0.00`;
//     }
// }



// });

document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 14.99 },
        { id: 4, name: "Another Item", price: 24.99 },
        { id: 5, name: "Sample Product", price: 39.99 }
    ];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutButton = document.getElementById("checkout-btn");
    const searchInput = document.getElementById("search-input");
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function renderProducts(filter = "") {
        productList.innerHTML = "";

        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            productDiv.innerHTML = `
                <span>${product.name} - $${product.price.toFixed(2)}</span>
                <button data-id="${product.id}">Add to Cart</button>
            `;

            productList.appendChild(productDiv);
        });
    }

    function updateCartCounter() {
        cartCount.textContent = cart.length;
    }

    function renderCart() {
        cartItems.innerText = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");

            cart.forEach((item, index) => {
                totalPrice += item.price;

                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });

            document.querySelectorAll(".remove-btn").forEach(btn => {
                btn.addEventListener("click", e => {
                    const index = parseInt(e.target.getAttribute("data-index"));
                    cart.splice(index, 1);
                    saveCart();
                    renderCart();
                    updateCartCounter();
                });
            });

            totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove("hidden");
            cartTotalMessage.classList.add("hidden");
            totalPriceDisplay.textContent = `$0.00`;
        }

        updateCartCounter();
    }

    productList.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            saveCart();
            renderCart();
        }
    });

    checkOutButton.addEventListener("click", () => {
        if (cart.length > 0) {
            alert("Checkout successful!");
            cart = [];
            saveCart();
            renderCart();
        } else {
            alert("Your cart is already empty.");
        }
    });

    searchInput.addEventListener("input", e => {
        renderProducts(e.target.value);
    });

    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggleThemeBtn.textContent =
            document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Initial render
    renderProducts();
    renderCart();
});
