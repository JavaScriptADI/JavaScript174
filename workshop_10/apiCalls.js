const posts = [];

fetch('https://dummyjson.com/posts?skip=0&limit=10')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
