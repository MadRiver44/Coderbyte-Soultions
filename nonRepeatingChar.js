/*27.
Using the JavaScript language, have the function NonrepeatingCharacter(str) 
take the str parameter being passed, which will contain only alphabetic characters 
and spaces, and return the first non-repeating character. For example: if str is 
"agettkgaeee" then your program should return k. The string will always contain at 
least one character and there will always be at least one non-repeating character. 

*/

function NonrepeatingCharacter(str){

	var arr = str.split(""); // we're trying to reduce down to one value, thus use reduce!
	var initialValue = {}; // reduce initial value, an empty object

    // letter is the accumulator whose initial value is {}(initialValue) on first loop
    // count is the value in the array, arr
    // So, "if object with a property of count does not exist, set value to one, 
    // if it does, increment count +1"
    var reducer = function(letter, count){  
		if(!letter[count]){
			letter[count] = 1;
		}else{
			letter[count] += 1;
		}
		return letter;
	};
// run reduce on str split into an array
var results = arr.reduce(reducer,initialValue);

// find the property whose value === 1, return prop
for(var prop in results){
	console.log(results[prop]);
	if(results[prop] == 1){
		return prop;
		}
	}
}

NonrepeatingCharacter("agettkgaeee");