/*
Using the JavaScript language, have the function LongestIncreasingSequence(arr) 
take the array of positive integers stored in arr and return the length of the 
longest increasing subsequence (LIS). A LIS is a subset of the original list where 
the numbers are in sorted order, from lowest to highest, and are in increasing order. 
The sequence does not need to be contiguous or unique, and there can be several 
different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS 
is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 
because that is the length of the longest increasing subsequence.
*/

function LongestIncreasingSequence(arr){
	var lis = 0;
	var sorted = arr.sort(function(a,b){
		return a-b;
	});
	sorted.forEach(function(item,index,array){
		if(item[index] < item[index + 1]){

		}
	});
	return sorted;
}
LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]);
