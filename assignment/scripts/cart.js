console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named 'basket' and set it to an empty array.
let basket = [];

// Create a function called 'addItem'.
function addItem(item) {

// Add the new item to the global array 'basket'.
  basket.push(item);

// Return 'true' indicating the item was added.
  return true;
}

// Create a function called 'listItems'.
function listItems() {
  // Loop over the items in the 'basket' array and log each item on a new line.
  for (let item of basket) {
    console.log(item);
  }
}

// Create a function called 'empty'.
function empty() {
  // Reset the 'basket' to an empty array.
  basket = [];
}

// Example usage:
addItem("Apples");
addItem("Bananas");
addItem("Oranges");
listItems(); // This will log each item in the basket.
empty(); // This will empty the basket.










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
