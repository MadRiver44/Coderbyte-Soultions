/*

Have the function MeanMode(arr) take the array of numbers stored in arr and return 
1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] 
should return 1 because the mode (3) equals the mean (3)). The array will not be empty, 
will only contain positive integers, and will not contain more than one mode.

*/

function calcMean(arr){
	var mean = arr.reduce(function(all, item){
		return all + item;
	});
	return mean / arr.length;
}
//calcMean([5,3,3,3,1]);

function calcMode(arr){
	var obj = {};
	for(var i = 0; i < arr.length; i++){
		var thisNum = arr[i];
		obj[thisNum] === undefined ? obj[thisNum] = 1 : obj[thisNum] +=1;
	}
	var answer = {
		number : null,
		count : 0
	};
	
	for(var prop in obj){
		if(obj[prop] > answer["count"]){
			answer["count"] = obj[prop];
			answer["number"] = answer["count"];
		}
	}
	return answer["number"];
}

function meanMode(arr){
	if(calcMode(arr) === calcMean(arr)){
		return 1;
	}else{
		return 0;
	}
}

//meanMode([5,3,2,4,3,1]);