/*
Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
*/

function division(num1,num2){
	var newNum = Math.round(num1 / num2);
	var str = newNum.toString();
	var newStr = str;
	
	if(str.length > 3){
		var arr = str.split("");
		for(var i = arr.length -3; i > 0 ; i = i - 3){
			arr.splice(i, 0, ",")
			}
			newStr = arr.join("");
		}return newStr;
}
//division(123467892, 1000);