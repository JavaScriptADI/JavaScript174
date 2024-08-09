## Fetch API Exercises

### Exercise 1: Basic Fetch Request
1. **Objective**: Make a GET request to fetch data from a public API and display it on a web page.
2. **Instructions**:
   - Use the Fetch API to get data from `https://jsonplaceholder.typicode.com/posts`.
   - Display the title and body of the first post on the web page.

### Exercise 2: Handling JSON Response
1. **Objective**: Parse and use JSON data from an API.
2. **Instructions**:
   - Fetch data from `https://jsonplaceholder.typicode.com/users`.
   - Parse the JSON response and display the names and email addresses of all users in a list.

### Exercise 3: Handling Errors
1. **Objective**: Handle network errors and invalid responses.
2. **Instructions**:
   - Make a fetch request to a non-existent endpoint, like `https://jsonplaceholder.typicode.com/invalid`.
   - Handle the error gracefully by displaying an error message on the page.

### Exercise 4: Fetch with POST Method
1. **Objective**: Send data to an API using the POST method.
2. **Instructions**:
   - Create a form on the web page with fields for title and body.
   - When the form is submitted, use the Fetch API to send a POST request to `https://jsonplaceholder.typicode.com/posts` with the form data.
   - Display the response from the server.

### Exercise 5: Chaining Fetch Requests
1. **Objective**: Chain multiple fetch requests.
2. **Instructions**:
   - Make a request to `https://jsonplaceholder.typicode.com/users` to get a list of users.
   - For each user, make another fetch request to `https://jsonplaceholder.typicode.com/posts` to get the posts by that user.
   - Display the user's name and the titles of their posts.

### Exercise 6: Fetch with Headers and Options
1. **Objective**: Use headers and additional options in a fetch request.
2. **Instructions**:
   - Make a fetch request to an API that requires a custom header. You can use `https://jsonplaceholder.typicode.com/posts`.
   - Include a custom header like `Authorization: Bearer YOUR_API_TOKEN`.
   - Display the response data.

### Exercise 7: Fetch with Async/Await
1. **Objective**: Use async/await syntax with the Fetch API.
2. **Instructions**:
   - Rewrite one of the previous exercises to use async/await syntax instead of the `.then()` method.
   - Handle errors using try/catch blocks.

### Exercise 8: Fetch with Query Parameters
1. **Objective**: Make a fetch request with query parameters.
2. **Instructions**:
   - Make a GET request to `https://jsonplaceholder.typicode.com/comments` with a query parameter `postId` set to 1.
   - Display the comments related to the post with ID 1.

### Tips
- **Handling Responses**: Remember to use `.json()` to parse the JSON data from the response.
- **Error Handling**: Use `.catch()` or try/catch blocks to handle errors in fetch requests.
