/*
Using the JavaScript language, have the function SimpleAdding(num) 
add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 
*/


function SimpleAdding(num) { 
var sum = 0;
//function sumNum(num){
    while (num !==0){
       sum +=num;
       num--;
    }return sum; //return sum;
}