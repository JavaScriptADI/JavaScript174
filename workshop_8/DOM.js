function createLi(ul) {
    const li = document.createElement("li");
    li.innerText = "Newly created li";
    li.onclick = (event) => {
        event.target.remove();
    };
    ul.appendChild(li);
}

console.log(document.body.childNodes);
console.log(document.body.children);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);

const btn = document.body.firstElementChild;

console.log(btn.parentNode);
console.log(btn.previousElementSibling);
console.log(btn.nextElementSibling);


const ul = document.getElementById("productsDiv");
const listItems = Array.from(document.getElementsByClassName("test"));
const addBtn = document.getElementById("addLi");
addBtn.onclick = () => {
    createLi(ul);
    createLi(ul);
}

console.log(`We found element by id: `, ul);
console.log(`We found elements by class: `, listItems);

listItems.forEach(
    (item, i) => {
        item.innerText = `Item ${i}`;
        item.onclick = (event) => {
            event.target.remove();
        }; 
    }
);


const li = document.createElement("li");
// const text = document.createTextNode("This is a text");
// li.appendChild(text);
li.innerText = "Newly created li";
li.onclick = (event) => {
    console.log(event);
}; 

ul.insertBefore(li, listItems[3]);
ul.appendChild(li);
li.remove();

ul.replaceChild(listItems[3], listItems[0]);
// ul.appendChild(listItems[0]);


// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].innerText = `Item ${i}`;
// }




