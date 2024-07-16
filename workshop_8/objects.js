/*
array of products:

each product has attributes:
- name: string
- price: number
- description: string
- rating: number (0, 5)
- quantity: number
*/
const product = { // object
    // key: value pairs
    name: "Iphone 15 Pro Max",
    price: 1500,
    description: "APPLE Product",
    rating: 5,
    quantity: 967
};

console.log(product.rating);

const products = [
    {
        name: "Iphone 15 Pro Max",
        price: 1500,
        description: "APPLE Product",
        rating: 5,
        quantity: 967
    },
    {
        name: "Iphone 14 Pro Max",
        price: 1300,
        description: "APPLE Product",
        rating: 5,
        quantity: 300
    },
    {
        name: "Iphone 13 Pro Max",
        price: 1200,
        description: "APPLE Product",
        rating: 5,
        quantity: 150
    }
];


const productsDiv = document.getElementById("productsDiv")
// What do we have in storage?
for (let i = 0; i < products.length; i++) {
    const productDiv = document.createElement("li");
    productDiv.innerText = `${products[i].name} has ${products[i].price}$ with ${products[i].rating}/5. we have ${products[i].quantity} of them`;
    productsDiv.appendChild(productDiv);
}