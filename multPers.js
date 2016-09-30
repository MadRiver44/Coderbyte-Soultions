/*
Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter 
being passed which will always be a positive integer and return its multiplicative persistence which is 
the number of times you must multiply the digits in num until you reach a single digit. For example: if 
num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and 
you stop at 4.

*/
// best 5/5

function multPers(num){
    var sum = 1;
    var arr = num.toString().split("");
    while( arr.length > 1){
        for(var i = 0; i < arr.length; i++){
            sum *= arr[i];
        }return 1 + multPers(sum);  
    }return 0;
}

multPers(2718);



// beginner, passed only 3/5 test cases, need to "refactor"

function multPers(num){
    
var arr = [];
var result = 1;
var multP = 0;

    function toArr(intR){ //  convert num to string then loop and push as int's to array
        intR = intR.toString().split("");
        for (var i = 0; i < intR.length; i++){
            arr.push(parseInt(intR[i]));
        }
        return arr;
    }

    function mult(sum){ // loops through array created and multiplies elements
        for (var i = 0; i < arr.length; i++){
            result *= arr[i];
        }
        return result;
    }
    while (num.toString().length > 1){ // need to count the iteratiions(loops), that is the answer
        num = toArr(num);
        num = mult(num);
        multP++;
    }
    return multP;
}

multPers();