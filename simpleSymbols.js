/*Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter
 being passed and determine if it is an acceptable sequence by either returning the string 
 true or false. The str parameter will be composed of + and = symbols with several letters between t
 hem (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. 
 So the string to the left would be false. The string will not be empty and will have at least one letter.


*/

function simpleSyms(str){
	var syms = str.match(/\+[a-zA-Z]\+/gi);
	var letters = str.match(/[a-zA-Z]/gi);
	if(syms.length === letters.length){
		return true;
	}else{
		return false;
	}
}

//simpleSyms("+++s+===+D+==++V+==");


var str = "+3+==d+f+==+e+";
var newStr = "";
function SimpleSymbols(str) { 

    if (str.match(/\+[A-z]\+/g)){
        return true;
    }else {
        return false;
    }
}
simpleSym(str);