 /*
 Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters 
 being passed and return the string true if num2 is greater than num1, otherwise return the string false. 
 If the parameter values are equal to each other then return the string -1. 
*/

// better
function CheckNums(num1, num2){
	return (num1 === num2 ? -1 :(num1 > num2) ? true : false); 
}
CheckNums(34,39);


function CheckNums(num1,num2) { 
    if (num2 > num1){
        return "true";
    }else if (num1 == num2){
        return -1;
    }else {
        return "false";
    }
}