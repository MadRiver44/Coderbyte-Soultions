// Create the function switchCase(string) take the str parameter and switch the case (lowercase or uppercase) of each character.  

// **EXAMPLE**

// - INPUT: `swapCase("i LOVE PiZzA");`
// - OUTPUT: `"I love pIzZa"

//  1.take the parameter (string) and compare the case to a var that
// iterates through a variable that stores the alphabet
// in the appropriate case
// 2. if there is a match, switch the case use the toCase() method
// 3. update the string held in a variable
// 4. return the changed string


swapCase("i LOVE PiZzA");
function swapCase(string){
var newStr = "";   //reverse the case
 
for (var i = 0; i < string.length; i++){   // loop thru string
    var char = string[i];
    if (char === char.toLowerCase()){       // test if char is upper or lower
        newStr = newStr + char.toUpperCase();    // var holds uppser switch
    } else {
        newStr = newStr + char.toLowerCase();   // var holds lower switch
    } //Got it, now to return it in one line
    
}console.log(newStr);  // the var newStr has held all values and is printed outside function
}
swapCase("Sup DUDE!!?");

//2/22/15 8:57 at this point it is switching, but whole, not parts
// need to use push to add the new switched case to a new variable