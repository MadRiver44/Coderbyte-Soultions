/*
Using the JavaScript language, have the function NextPalindrome(num) take the num 
parameter being passed and return the next largest palindromic number. The input 
can be any positive integer. For example: if num is 24, then your program should 
return 33 because that is the next largest number that is a palindrome. 
*/



function NextPalindrome(num){
	num++ // in this case you have to increase num immediatly
		  // the why is because single digits fail without and also double numm like 99
		while(num.toString()!= num.toString().split('').reverse().join("")){
		num++;
	}
	return num;
}
NextPalindrome(24);



/*
