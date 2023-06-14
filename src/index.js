import React from 'react';
import ReactDOM from 'react-dom/client';
var numbers = [3, 56, 2, 48, 5];






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  </React.StrictMode>
);



//diffrence between for each and map


//map
function doubleM(x){
  return x*2;
}
var newNum = numbers.map(doubleM);

var newNumber = [];
//For Each Example

numbers.forEach(function(x){
  newNumber.push(x*2);
})




//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
