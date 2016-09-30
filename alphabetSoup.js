/* 
Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter 
being passed and return the string with the letters in alphabetical order 
(ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
*/

// preferred method with a sort comparison 
function alpha(str){
	return str.split("").sort(function(a,b){
		return a > b;
	}).join("");
}

// with no sort comparison

function AlphabetSoup(str) { 
  return str.split("").sort().join("");
         
}

