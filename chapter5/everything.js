/* This exercise consisted in writing a function 'every' which takes two parameters,
an array and a test function. First using a loop, the function should return a 'true'
if every value in the array passed the test. Secondly, the function had to be created 
without a loop and using some() */ 

//My solutions:

//using a loop

function every(array, test) {
	for(value of array){
  		if(test(value) == false) return false; 
 	}
  	return true;
}

// using some()

function every(array, test) {
 	if(array.some(n => !test(n))) return false;
  	else return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
