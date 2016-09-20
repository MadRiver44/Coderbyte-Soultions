/*
close , and first attempt with regex's, still can't not shift nums and letters
*/


var re = /[A-Za-z]/gi;
var str = "_Adkeiikke99";
var d = str.split("");
var newStr = "";
var char = str.charCodeAt([i]);

for (var i = 0; i< str.length; i++){
    var char = str.charCodeAt([i]);
    console.log(char);
    newStr += String.fromCharCode(char +1).toLowerCase();
    
    //if (str[i] == /A-z/gi){
       // newStr += str.charCodeAt(str[i]);
}    

//str.match(re);
//str.charCodeAt(str[i]);
//String.fromCharCode(str.charCodeAt(i+1));

// this one below is close


/* Using the JavaScript language, have the function LetterChanges(str) t
ake the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet 
(ie. c becomes d, z becomes a). Then capitalize every vowel in this new string 
(a, e, i, o, u) and finally return this modified string.
*/


var re = /\d+\W+/g;
var str = "_Adkeiikke99";
var d = str.split("");
var newStr = "";

function letterChanges(str){
for (var i = 0; i< str.length; i++){
    var char = str.charCodeAt([i]);
    newStr += String.fromCharCode(char +1).toLowerCase();
    }return newStr;    
}    
//letterChanges(str);
str.charAt(1);