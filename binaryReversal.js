/*
Using the JavaScript language, have the function BinaryReversal(str) take the str 
parameter being passed, which will be a positive integer, take its binary 
representation, reverse that string of bits, and then finally return the new 
reversed string in decimal form. For example: if str is "47" then the binary 
version of this integer is 00101111. Your program should reverse this binary 
string which then becomes: 11110100 and then finally return the decimal version 
of this string, which is 244.
*/

function BinaryReversal(str){

	var binary = parseInt(str);
	var newBinary = binary.toString(2).split('');
	while (newBinary.length%8  !== 0){ // have to add zeros to get proper binary number
		newBinary.unshift("0");
	}
	return parseInt(newBinary.reverse().join(''),2).toString();
	
}

BinaryReversal("47");