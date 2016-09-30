/*
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word
in the string. If there are two or more words that are the same length, return the first word from 
the string with that length. Ignore punctuation and assume sen will not be empty. 
*/

// best

function longestWord(sen){
    sen = sen.replace(/[^a-zA-Z\d\s]/gi, " ");
    var word = sen.split(" ").sort(function(a, b){
        return b.length - a.length;
        
    });
    console.log(word);
    return word.shift();
}


// beginner

function LongestWord(sen) { 
    
    var x = sen.split(" "); // forms array of sen
    var y = 0; // this is the count placeholder
    var z = null; // z is known to exist now, but it has no type or value
/* 

// foo is known to exist now but it has no type or value:
> var foo = null; foo
"null"
*/

/*
A variable that has not been assigned a value is of type undefined. 
A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
A function returns undefined if a value was not returned.
*/

    for (var i = 0; i < x.length; i++){
        /*this loop iterates over the elements of x (the array formed from
        sen.split(" ")*/
        /*x[i].length;  == word length of array x */
        if (y < x[i].length ){ // the length property gives the size of x
            y = x[i].length; // sets y to x, new value of y is then compared
                             // to x[i] on the next loop
            z = x[i]; // z which was of unknown type, is now set to the 
                      // value at x index i
        }
    }return z; // calls the value at x[i] 
}        

LongestWord("so this is what life");