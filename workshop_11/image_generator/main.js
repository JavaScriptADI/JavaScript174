const form = document.querySelector("#image-generator-form");
const img = document.querySelector("#image-result");
const downloadBtn = document.querySelector("#download");

console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const width = form.width.value;
    const height = form.height.value;
    const text = form.text.value;
    const color = form.color.value.slice(1);
    const bgColor = form.background.value.slice(1);
    const fontSize = form.fontSize.value;
    const fontFamily = form.fontFamily.value;
    const url = `https://dummyjson.com/image/${width}x${height}/${bgColor}/${color}?text=${text}&fontFamily=${fontFamily}&fontSize=${fontSize}`;
    console.log(url);    

    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            img.src = URL.createObjectURL(blob);
            downloadBtn.href = img.src;
        })
        .catch((error) => {
            const errorP = document.createElement('p');
            errorP.style.color = 'red';
            errorP.textContent = error.message;
            document.body.appendChild(errorP);
        });

});
