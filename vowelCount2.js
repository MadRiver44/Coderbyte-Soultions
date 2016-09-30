/* 
Have the function VowelCount(str) take the str string parameter being passed 
and return the number of vowels the string contains (ie. "All cows eat grass" 
would return 5). Do not count y as a vowel for this challenge. 
*/

//best with Regex

function vowel(str){
	return str.match(/a|e|i|o|u/gi).length;
}

vowel("all cows eat grass");


// same principal with ternary
function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/gi);
  return (vowels === null) ? 0 : vowels.length; 
         
}


// for loop

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