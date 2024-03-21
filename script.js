function toCase(text) {
  // write your code here
	let str = text.toLowerCase()
	let str2 = text.toUpperCase()
	return str+"-"+str2 
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
