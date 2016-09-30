/*
Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return thesecondlowest and
second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106]
the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky
if there's just two numbers!
*/

function second(arr){
	var newArr = arr.filter(function(elem, index, array){
		 return array.indexOf(elem) === index;
	})
	var s = newArr.sort(function(a, b){
		return b - a;
	});
	if(s.length < 2){
		return s[0] + " " + s[1];
	}else{
		return s[1] + " " + s[s.length-2];
	}
}
//second([7,7,1,9,101,100]);