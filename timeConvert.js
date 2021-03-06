/*
Using the JavaScript language, have the function TimeConvert(num) take the num parameter 
being passed and return the number of hours 
and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon. 
*/


// better
function time(num){
		var hours = Math.floor(num / 60);
		var mins = num % 60; 
		return hours + " : " + mins;
}
//time(63);


// ok
function TimeConvert(num) { 

    var hour = num / 60
    var min = num % 60;
    if (num < 60){
        return 0 + ":"+ num;
    }
    return hour.toFixed() + ":" + min.toFixed();

  // code goes here  
  return num; 
         
}
  