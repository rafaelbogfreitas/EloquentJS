/* In this exercise we should write a higher order function with 4 arguments: 
a value, a test function, a function that updates the value and a function that
uses the value. It should imitate a loop. I came up with two different solutions 
for this challenge, one using a actual "for" loop inside the function and the 
other using a callback function */

//solution 1

function loop(value, test, valueUpdate, body) {
 if(test(value) == true){
   let value2 = value;
   for(i=0;i<value2;i++){ 
   body(value);
   value = valueUpdate(value);  
   }
 }
}

//solution 2

function loop2(value, test, valueUpdate, body) {
 if(test(value) == true){
   body(value);
   value = valueUpdate(value);
   loop2(value, test, valueUpdate, body);
 }
}

//call to solution 1

loop(3, n => n > 0, n => n - 1, console.log);

//call to solution 2

loop2(3, n => n > 0, n => n - 1, console.log);

//Should print:

// → 3
// → 2
// → 1
