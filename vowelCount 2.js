// Vowel Count

// Using the Javascript language, have a function "vowelCount(str)" take the str parameter and return the number of vowels the string contains (ie. "All Cows eat grass" would return 5).  Do not count y as a vowel for this challenge.

// Example:
// Input: vowelCount("Good Job");
// Output: 3

//*** Write the vowelCount Function below ***



function VowelCount(str) { 
var vowels =  "aeiou";
var count = 0;
for (var i = 0; i < str.length; i++){
    for (var q =  0; q < vowels.length; q++){
       if(vowels[q] === str[i]){
                count++;
            }

        }
    }return count;
}




/* incorrect attempt

function vowelCount(str) {
	var count = 0;
	var vowels = "aeiou";
	str = str.toLowerCase();
	for(var i = 0; i <str.length; i++){
		if(vowels.indexOf(str[i])){
			console.log(str[i]);
			count++
		}
	}
	console.log(count);
}
vowelCount("GOOd Job");
*/