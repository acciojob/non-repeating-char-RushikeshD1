function firstNonRepeatedChar(str) {
 // Write your code here

	let hm = {};

	for(let ch of str){
		hm[ch] = (hm[ch] || 0) + 1;
	}

	for(let ch of str){
		if (hm[ch] === 1){
			return ch;
		}
	}

	return null;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
