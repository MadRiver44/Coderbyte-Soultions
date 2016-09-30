/*
Have the function AdditivePersistence(num) take the num parameter being passed 
which will always be a positive integer and return its additive persistence which is the
 number of times you must add the digits in num until you reach a single digit. 
 For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 
 and 1 + 8 = 9 and you stop at 9.
*/

*/


// best .. 5/5 pass

function addPers(num){
    var arr = num.toString().split("");
    var sum = 0;
    while(arr.length > 1){
    for(var i = 0; i < arr.length; i++){
        sum += parseInt(arr[i],10);
        console.log(sum);
        }
        return 1 + addPers(sum);
    }
    return 0;
}

addPers(2718);

