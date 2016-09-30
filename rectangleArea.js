/*
Have the function RectangleArea(strArr) take the array of strings stored in strArr, 
which will only contain 4 elements and be in the form (x y) where x and y are both 
integers, and return the area of the rectangle formed by the 4 points on a Cartesian 
grid. The 4 elements will be in arbitrary order. For example: if strArr is 
["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the 
width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height. 

*/

function area(arr){
  //match and shape data
    var coord1 = arr[0].match(/\d+/g);
    var coord2 = arr[1].match(/\d+/g);
    var coord3 = arr[2].match(/\d+/g);
    var coord4 = arr[3].match(/\d+/g);
    var coordArr = [coord1, coord2, coord3, coord4];
  // seperate axises
  var xArr = [];
  var yArr =[];
  for(var i = 0; i < coordArr.length; i++){
    xArr.push(coordArr[i][0]);
    yArr.push(coordArr[i][1]);
  }
  //eliminate repeats in each arr
  var newXArr = xArr.filter(function(elem, index, array){
    return array.indexOf(elem) !== index;
  });
  var newYArr = yArr.filter(function(elem, index, array){
    return array.indexOf(elem) !==index;
  });
  //take diff
  var xlen = Math.abs(newXArr[0] - newXArr[1]);
  var ylen = Math.abs(newYArr[0] - newYArr[1]);
  
  return xlen * ylen;
}
//area(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]);