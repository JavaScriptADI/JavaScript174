const PAGE_SIZE = 9;
let productsDiv;
let pagination;
let sorting;
let currentPage = 1;
const baseURL = 'https://dummyjson.com/products?select=title,description,price,thumbnail,tags,rating';

function createProductDiv(product) {
    const productDiv = document.createElement('div');
    productDiv.className = "col-md-6 col-lg-6 col-xl-4";
    productDiv.innerHTML = (`
        <div class="rounded position-relative fruite-item">
            <div class="fruite-img">
                <img src="${product.thumbnail}" class="img-fluid w-100 rounded-top" alt="${product.title}">
            </div>
            <div class="position-absolute d-flex gap-1" style="top: 10px; left: 10px">
                ${product.tags.map(tag => (`<div class="text-white bg-secondary px-3 py-1 rounded">${tag}</div>`).trim()).join('\n')}
            </div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>${product.title}</h4>
                <p>${product.description}</p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">$${product.price}</p>
                    <small>${product.rating}</small>
                    <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                </div>
            </div>
        </div>
    `).trim();
    return productDiv;
}

function addPageBtn(pageNum, onClick = null, isActive = false) {
    const aTag = document.createElement('a');
    aTag.className = 'roudned';
    if (isActive) {
        aTag.classList.add('active');
    }
    aTag.innerHTML = pageNum;
    if (onClick) {
        aTag.addEventListener('click', onClick);
    }
    pagination.appendChild(aTag);
}


function updatePages(pageCount, baseURL) {
    if (currentPage !== 0) {
        addPageBtn('&laquo;', () => fetchProducts(currentPage - 1, baseURL));
    }
    // ternary operator
    for (let i = currentPage < 5 ? 1 : currentPage - 5; i < currentPage; i++) {
        addPageBtn(i, () => fetchProducts(i, baseURL));
    }

    addPageBtn(currentPage, () => {}, true);

    for (let i = currentPage + 1; i <= currentPage + 5 && i <= pageCount; i++) {
        addPageBtn(i, () => fetchProducts(i, baseURL));
    }

    if (currentPage !== pageCount) {
        addPageBtn('&raquo;', () => fetchProducts(currentPage + 1, baseURL));
    }
}



function fetchProducts (page, url = baseURL) {
    if (page <= 0) {
        page = 1;
    }
    currentPage = page;
    const skip = (currentPage - 1) * PAGE_SIZE;
    pagination.innerHTML = null;
    productsDiv.innerHTML = null;
    const baseURL = url;
    url += `&limit=${PAGE_SIZE}&skip=${skip}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            data.products.forEach(product => {
                productsDiv.appendChild(createProductDiv(product));
            });
            const pageCount = Math.ceil(data.total / PAGE_SIZE);
            // console.log(pageCount);
            updatePages(pageCount, baseURL);
        });
}

window.addEventListener('load', () => {
    productsDiv = document.querySelector('#products-div');
    pagination = document.querySelector('#pagination');
    sorting = document.querySelector('#sorting');

    fetchProducts(1);
    sorting.addEventListener('change', (e) => {
        const [sortBy, order] = e.target.value.split('-');
        fetchProducts(1, baseURL + `&sortBy=${sortBy}&order=${order}`);
    });
})


