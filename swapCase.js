/*
Have the function SwapCase(str) take the str parameter and swap the case of 
ach character. For example: if str is "Hello World" the output should be hELLO wORLD. 
Let numbers and symbols stay the way they are.
*/


var newStr = ""; 
 
for (var i = 0; i < str.length; i++){   // loop thru string
    var char = str[i];
    if (char === char.toLowerCase()){       // test if char is upper or lower
        newStr = newStr + char.toUpperCase();    // var holds uppser switch
    } else {
        newStr = newStr + char.toLowerCase();   // var holds lower switch
    } 
  } 
  return newStr; 
         
}

swap("Hello World");



