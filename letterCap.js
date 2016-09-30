/*
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being 
passed and capitalize the first letter of each word. Words will be separated by only one space.
*/

// best with Regex, and replace() second param can take function
function letterCap(str){
    return str.replace(/\b[a-zA-z]/gi, function(char){
        return char.toUpperCase();
    });
}



function LetterCapitalize(str) { 
var newSen = "";
var arr= str.split(" ");

for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (word[0] == word[0].toLowerCase()){
        var newWord = word.replace(word[0].toLowerCase(), word[0].toUpperCase());
        newSen += " "+ newWord ;
        }
    }return newSen;
} 

// practice round, took way longer than expected

var sen = "the quick brown fox heads over the hill";
var newSen = "";
var arr= sen.split(" ");

function cap(sen) {
for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (word[0] == word[0].toLowerCase()){
        var newWord = word.replace(word[0].toLowerCase(), word[0].toUpperCase());
        newSen += " "+ newWord ;
        }
    }return newSen;
}   
    

cap(sen);
