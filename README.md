Library project from TOP

Using cards instead of a table to display all the information about the book

Things I've learnt
1. Need to make sure that variables defining dynamically added DOM elements should be added after all the DOM elements are rendered. This means any loops using the variable will have the correct length.
2. Can get an attribute of the parent of a button by using e.target.parentNode.getAttribute(). Using an attribute to define position in array avoids problems I was experiencing using the variable defined in a loop.
3. Get function to work outside of constructor prototype first to confirm the function works as intended.
4. Double check that the objects are book objects made by the constructor, and not just normal objects in the example array.