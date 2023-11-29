let cartStorage = localStorage.getItem("cartproducts")
cartStorage = JSON.parse(cartStorage)
let cartcontainer = document.getElementById("cart-section")

function rendercarrito(cartitems){
    cartitems.forEach(producto => {
        const cart = document.createElement("div")
        cart.innerHTML = `  <h2>${producto.nombre}</h2>
                            <p>$${producto.precio}</p>`
        cartcontainer.appendChild(cart)

    });
}
rendercarrito(cartStorage)
