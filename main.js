const productos = [
    {
        id:1,
        nombre:"bicicleta",
        precio: 10000
    },
    {
        id:2,
        nombre:"monitor",
        precio:12000
    },
    {
        id:3,
        nombre:"silla",
        precio:8000
    },
];
let cartproducts = []
let cartproductsLS = localStorage.getItem("cartproducts")
if( cartproductsLS){
    cartproducts = JSON.parse(cartproductsLS)
}else{
    cartproducts = []
}



let addbutton = document.querySelectorAll(".productoagregar")
let productocontainer = document.getElementById("products-container");

function renderproducts(productsarray){
    productsarray.forEach(producto => {   
        const card = document.createElement("div");
        card.innerHTML =   `<h2>${producto.nombre}</h2>
                            <p>$${producto.precio}</p>
                            <button class="productoagregar" id="${producto.id}">agregar</button>`                                         
                        
        productocontainer.appendChild(card);
    })
    addtocardbutton ()
}
renderproducts(productos)

function addtocardbutton(){
    addbutton = document.querySelectorAll(".productoagregar")
    addbutton.forEach(button =>{
        button.onclick = (e) =>{
            const productoid = e.currentTarget.id
            const selectedproduct = productos.find(producto => producto.id == productoid)

            cartproducts.push(selectedproduct)
            console.log(cartproducts)

            localStorage.setItem("cartproducts",JSON.stringify(cartproducts))
        }
    })
}
