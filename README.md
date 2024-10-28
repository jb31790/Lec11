# Lec11
Lecture 11


# Tasks

## Task 1: Creating and Parsing JSON
**Objective:** Practice creating and parsing JSON objects in JavaScript.
1. Create a **JSON** object representing a **person** with properties such as **name**, **age**, and **email**. Assign it to a variable named **"person"**.
2. Parse the **JSON** object back into a JavaScript object and display its properties using `console.log`.


## Task 2: Promises for Asynchronous Operations
**Objective:** Practice creating and handling Promises for asynchronous operations in JavaScript.
1. Create a function `simulateAsyncOperation` that returns a **Promise**. Inside the Promise, use `setTimeout` to simulate an asynchronous operation that resolves after 2 seconds. The resolved value should be a message **"Operation completed"**.
2. Call the `simulateAsyncOperation` function and handle the resolved Promise. Display the resolved message in the console.


## Task 3: Fetching Data Using Fetch API
**Objective:** Practice using Fetch API to retrieve data from a public API.
1. Utilize the Fetch API to make a GET request to a public API of your choice (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/) or any other public API). The API should provide data in JSON format.
2. Retrieve the data from the API and display it in the console. Make sure to handle any errors that may occur during the fetch operation.


## Task 4: Combining Promises and Fetch API
**Objective:** Practice combining Promises and Fetch for efficient handling of asynchronous operations in JavaScript.
1. Create a function `fetchAndProcessData` that uses the Fetch API to make a GET request to a public API endpoint. Wrap the Fetch operation in a Promise.
2. Inside the Promise, handle both the resolved and rejected states. If the fetch is successful, resolve the Promise with the retrieved data; otherwise, reject it with an error message.
3. Call the `fetchAndProcessData` function and handle the resolved and rejected Promises. Display the data in the console when resolved and handle errors appropriately.
