/*
Have the function DashInsert(str) insert dashes ('-') between each two odd 
numbers in str. For example: if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number. 
*/

function dashInsert(str){
	var arr = str.split("");
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0){
			arr[i] += "-";    //concatenation, splice results in infinite loop
		}
	}
	return arr.join("");
}
//dashInsert("454793");