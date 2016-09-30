/*

Have the function LetterCountI(str) take the str parameter being passed and return the first word
with the greatest number of repeated letters. For example: "Today, is the greatest day ever!"
should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2
e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
*/

function letterCount(str){
	var arr = str.split(" ");
	var obj = {};
	for(var i = 0; i < arr.length;i++){
		var word = arr[i];
		obj[word] ={}; 
		obj[word]["letterCount"] = 0;
		
		for(var j = 0; j < word.length; j++){
			var thisLetter = word[j];
			obj[word][thisLetter] === undefined ? obj[word][thisLetter] = 1 :
			obj[word][thisLetter] +=1;
			
			if(obj[word][thisLetter] > obj[word]["letterCount"]){
				obj[word]["letterCount"] = obj[word][thisLetter];
			}
		}
	}
	var answer = {
		word :null,
		count : 1
	};
	
	for(var prop in obj){
		if(obj[prop]["letterCount"] > answer["count"]){
			answer["count"] = obj[prop]["letterCount"];
			answer["word"] = prop;
		}	
	}
	console.log(obj);
	return answer["count"] === 1 ? -1 : answer["word"];
}
//letterCount("Today, is the greattest day ever!");