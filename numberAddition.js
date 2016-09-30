/*
 Using the JavaScript language, have the function NumberSearch(str) take the str parameter, 
 search for all the numbers in the string, add them together, then return that final number. 
 For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate 
 between single digit numbers and multiple digit numbers like in the example above. So "55Hello" 
 and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 
 */

function numSearch(str){
	var arr = str.match(/\d+/g);
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += parseInt(arr[i], 10); // always use radix
	}
	return sum;
}

numSearch("5Hello 5");




var str = "88Hello99 3World!"; // sample numberSring
var sum = 0;

var searchNum = function numberString(str){
 var s = str.match(/\d+/g); // regex matched, tested via Regexer.com (great tool)
     for (var i = 0; i < s.length; i++){ // loop through string
         sum += parseInt(s[i]); // parseInt() parses a string and returns an integer of spec'd radix (base)
        }return sum;
     };

searchNum(str);

// with for loop

function numberString(str){
 var s = str.match(/\d+/g);
     for (var i = 0; i < str.length; i++){
         if (str[i] == s  /*str.match(/\d+/g)*/){
        }return s;
     }for (var q = 0; q < s.length; q++){
         total += parseInt(s[i]);
     }return total;
}
numberString(str);
