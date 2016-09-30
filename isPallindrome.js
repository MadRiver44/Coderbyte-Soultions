/*
pallindrome. create a function that accepts a string and detect true if //pallindrome and false if not
 accounts for 1 letter, 2letters, and evern numbers, but not 3 like mom or dad
 */


function pall(str){
    str = str.split(" ").join("").toLowerCase(); // account for sentence pallindromes
    var pallind = str.split("").reverse().join("");
    if (pallind === str){
        return true;
    }else{
        return false;
    }
}
//pall("do geese see god");



var str = "deeeeeem"
console.log(str.split('').reverse().join(""));

var section = str.substring(0, str.length/2);
console.log(section);


//Best

function isPallindrome(str){
    if (str.split("").reverse().join("") === str){
        return "is pallindrome";
    }else {
        return "not a pallindrome";
    }
    
}
isPallindrome("mooom");
// so so

function isPallindrome(str){
    var section = str.substring(0, str.length/2);
    if (str.length%2 === 0){
        if(section === str.substring(str.length/2+1)){
        }return "is a pallindrome";
    }else {
        return "not a pallindrome";
    }
}
isPallindrome("ded");



