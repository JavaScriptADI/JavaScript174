// we have table in HTML and we want to append data to table body
// table body id is "products-list-table-body"
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 1500,
        image: "./images/image.png"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "./images/image.png"
    },
    {
        id: 3,
        name: "Product 3",
        price: 100,
        image: "./images/image.png"
    },
    {
        id: 4,
        name: "Product 4",
        price: 350,
        image: "./images/image.png"
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
        image: "./images/image.png"
    }
];
const tbody = document.getElementById("products-list-table-body");
const productPriceSorterElem = document.getElementById("product-price-sorter");
const productPriceSorterStateElem = document.getElementById("product-price-sorter-state");
let sortState = 0;

function renderProducts(products) {
    tbody.innerHTML = "";
    products.forEach(product => {
        // შევქმენით tr ელემენტი
        const tr = document.createElement("tr");
        tr.style.cursor = "pointer";
        tr.onclick = () => {
            if (confirm(`Do you want to remove this product ${product.id} ?`)) {
                tr.remove();
            }
        };

        // tr -ში სტრინგად დავწერეთ HTML (გამოვიყენეთ template string)
        tr.innerHTML = (`
            <td>
                <img 
                    src="${product.image}" 
                    width="50" 
                    height="50" 
                    style="border-radius: 50%; border: 2px solid #ff4534;"
                />
            </td>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
        `);
        // console.log(tr);
        tbody.appendChild(tr);
    });
}

productPriceSorterElem.onclick = () => {
    console.log("Sort products");
    console.log(products);

    // sort method -ი იღებს ფუნქციას პარამეტრად
    // ეს ფუნქცია მიიღებს ორ არგუმენტს a, b -ს რომლებიც იქნებიან ამ array -ის ელემენტები
    // თუ ფუნქციამ დააბრუნა -1 (a < b); თუ ფუნქციამ დააბრუნა 0 (a == b) არაფერს იზავს; 1 ის შემთხვევაში (a > b)
    let sortedProducts = products.slice();
    sortState++;

    if (sortState === 1) {
        sortedProducts.sort((a, b) => {
            return a.price - b.price;
            // if (a.price < b.price) {
            //     return -1;
            // } else if (a.price > b.price) {
            //     return 1;
            // }
            // return 0;
        });
        productPriceSorterStateElem.innerHTML = (`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>
        `);
    } else if (sortState === 2) {
        sortedProducts.sort((a, b) => {
            return b.price - a.price;
        });
        sortState = -1;
        productPriceSorterStateElem.innerHTML = (`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
        `);
    } else {
        productPriceSorterStateElem.innerHTML = (`
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                fill="#e8eaed">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
            </svg>        
        `);
    }

    renderProducts(sortedProducts);
}
// console.log(tbody);


renderProducts(products);