# lib2

<strong>Festival Library Documentation</strong>
The Festival library provides functionality to fetch and display festival data.

Installation
You can install the Festival library using npm:

```
npm i rom-lib2-iim
```

To use the Festival library, follow these steps:

Import the Festival class:

```
const Festival = require('festival-library');
Create a new instance of the Festival class:
```
```
const festival = new Festival();
Fetch festival data using the fetchData method:
```
javascript
Copy code
festival.fetchData()
  .then(data => {
    // Perform actions with the fetched data
  })
  .catch(error => {
    // Handle any errors that occur during fetching
  });
Display the festival data using the showData method:

```
festival.showData();
This will update the DOM to display the festivals.
```
API Reference
fetchData()
The fetchData method retrieves festival data from the API.

Returns: A Promise that resolves to the fetched data.
showData()
The showData method displays the fetched festival data.

Parameters: None
Returns: None
Example
Here's an example of how to use the Festival library:

```
const Festival = require('festival-library');

const festival = new Festival();
festival.fetchData()
  .then(data => {
    festival.showData();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

```
This will fetch the festival data and display it in the DOM.

License
The Festival library is released under the MIT License.
