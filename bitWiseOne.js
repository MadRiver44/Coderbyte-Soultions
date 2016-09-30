/*37.
Have the function BitwiseOne(strArr) take the array of strings stored in strArr, 
which will only contain two strings of equal length that represent binary numbers, 
and return a final binary string that performed the bitwise OR operation on both strings. 
A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101" 

*/

function bitwiseOr(arr){
  var x = arr[0];
  var num1 = parseInt(x, 2);
  var y = arr[1];
  var num2 = parseInt(y, 2)
  return (x | y).toString(2); 
}
//bitwiseOr(["1001", "0100"]);