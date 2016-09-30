/*
Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will contain only two elements, both of which will represent an array of positive integers. For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and your goal for this challenge is to add the elements in corresponding locations from both arrays. For the example input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17. 

If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element will exist in each array. 
*/

function ArrayMatching(strArr){
	// first step is to shape my data to be easily utilzed
		 var arr = strArr.map(function(item){
			return item.replace(/[\[\]]/g,'')
			.split(/\s*,\s*/) // matches all spaces and all commas * indicates preceeding char
			.map(function(value){
				return parseInt(value,10);// always use radix
			});
		});

		var results = [];
		var longerArr = Math.max(arr[0].length, arr[1].length);
		
		// loop is as long as biggest arr.length, if we get to an i
		// that doesnt exist in both arrays, in the one that doesn't
		// exist we use zero + number from longer array
			for(var i = 0; i < longerArr; i++){ //loop over arr1
				results.push((arr[0][i] || 0) + (arr[1][i] || 0));
			}	
	return results.join("-");
}

//ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11, 12,14]"]);