/*

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal
number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string,
no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because
there are 6 x's and 5 o's.
*/

// better

function ExOh(str){
	var xs = str.match(/x/gi).length;
	var os = str.match(/o/gi).length;
	if(xs === os){
		return true;
	}
	return false;
}

ExOh("xxxoooxxoo");

function xo(str){
	var x = str.match(/x/gi);
	var o = str.match(/o/gi);
		if(x === null){
			return false;
		}else if(o === null){
			return false
		}else if(x.length === o.length){
			return true;
		}else{
			return false;
		}
}
xo("xo");