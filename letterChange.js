/* 

Using the JavaScript language, have the function LetterChanges(str) t
ake the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet 
(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string 
(a, e, i, o, u) and finally return this modified string.

*/

function letterChg(str){
	var converted = str.replace(/[a-zA-Z]/gi, function(letter){
		// charCodeAt gives me unicode number of letter, String.fromCharCode gives me a letter
		return letter === "z" || letter === "Z" ? "a" : String.fromCharCode(letter.charCodeAt() + 1)
	});
	var caps = converted.replace(/a|e|i|o|u/gi, function(vowel){
		return vowel.toUpperCase();
	});
	return caps;
}

