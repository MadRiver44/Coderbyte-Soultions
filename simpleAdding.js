/*
Using the JavaScript language, have the function SimpleAdding(num) 
add up all the numbers from 1 to num. For the test cases, the parameter 
num will be any number from 1 to 1000. 
*/

// for loop
function simpleAdd(num){
	var sum = 0;
	for(var i = num; i > 0; i--){
		sum += i;
	}
	return sum;
}
simpleAdd(1000);


// while loop
function SimpleAdding(num) { 
var sum = 0;
    while (num !==0){
       sum += num;
       num--;
    }return sum; 
}