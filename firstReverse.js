function FirstReverse(str) { 
  var newString = '';
  for (var i = str.length -1; i >=0 ; i--) { // simply loop starting at the end of array
    newString += str[i];
  }
  return newString; 
         
}
  
// Or....

function FirstReverse(str) { 
  var newString = '';	  // this needed to be defined outside the for loop, when it was 
  						          // in the for loop, it keep being defined as empty and would 
 						            // never hold the values, it kept emptying

  for (var i = str.length -1; i >=0 ; i--) {
      					// though the word is actually 6 characters, the string length is 
      					// really 5 because the index starts at 0.
    					// newString +=  newString + str[i];
    					// this is incorrect, newString keeps adding newString AND the letter
    					// at str[i]
    					// it should only be..
    newString += str[i];
    					//console.log(newString);
 } 						// code goes here  
  return newString; 
         
}

FirstReverse('RockMachine');