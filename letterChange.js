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