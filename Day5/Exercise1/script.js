"use strict";

function FizzBuzz() {
	for (let i=1; i <= 100; i++) {
	 if (i%3===0 && i%5===0){
	 	console.log("fizzbuzz");
	 }
	 else if (i%3===0){
	 	console.log("fizz");
	 }
	 else if (i%5===0){
	 	console.log("buzz");
	 }
	 else {
	 	console.log(i);
	 } 
	}

}

function ReverseStr(myStr) {
	let newStr="";
	for (let a = myStr.length; a >= 0; a--) {
		newStr += myStr.substr(a, 1);
	}
	console.log(newStr);
	return newStr;
}

function CapitalizeLetter() {
	let myStr = "Hello world todd Prange 1day";
	let myArray = myStr.split(" ");
	let newStr = "";
	for (let i = 0; i < myArray.length; i++) {
		let tmpword = myArray[i].substr(0,1).toUpperCase() + myArray[i].substr(1,myArray[i].length-1);
		newStr += " " + tmpword;
	}
	newStr = newStr.substring(1, newStr.length-0);
	console.log(newStr);
}

function StrCompression() {
	let myStr = "aaabbbbbccccaacccbbbaaabbbaaa";
	let previousLetter = myStr.substr(0, 1);
	let newStr = "";
	let letterCounter = 1;
	
	for (let a = 1; a <= myStr.length; a++) {
		let newLetter = myStr.substr(a, 1);
		if (newLetter === previousLetter) {
			letterCounter++;
		} else
		if (newLetter != previousLetter) {
			newStr += letterCounter + previousLetter;
			letterCounter = 1;
		}
		previousLetter = newLetter;
	}
	console.log(newStr);
}

function Palindrome() {
	let strData = "dad";
	let newStrData = strData.replace(/\W/g, '');
	let revNewStrData = "";
	revNewStrData = ReverseStr(newStrData);
	if (newStrData === revNewStrData) {
		console.log("\"" + strData + "\" is a Palindrome.");
	} else
		{
			console.log("\"" + strData + "\" is NOT a Palindrome.");
		}
				

}

function HappyNumbers(){
	for(let i = 1;i<=1000;i++){
		let newNum = i;
		let pastNums = [];
		while(pastNums.indexOf(newNum)===-1){
			let temporary = 0;
			pastNums.push(newNum);
			while(newNum>0){
				temporary += (newNum%10) * (newNum%10);
				newNum = parseInt(newNum/10);
			}
			newNum = temporary;
			if(newNum === 1){
				console.log(i);
			}
		}
	}
}

function PrimeNumbers() {
	let maxPrimeNbr = 100;
	for (let i=1;i<=maxPrimeNbr;i++) {
		if (i-1>1){
			let dividingNumber = 2;
			let isPrime = false;
			while (isPrime === false) {
				if (dividingNumber <= (i/2)){
					if (i%dividingNumber>0){
						dividingNumber++;
					} else {
						break;
					}
				} else {
				isPrime = true;
				}
 			}
			if (isPrime === true){
				console.log(i + "is a Prime Number!")
			}
		} else {
			console.log(i + "is a Prime Number!")
		}
	}
}

function Fibonacci() {
	let startingNum=1;
	let numArray = [startingNum,startingNum];
	
	for (let i=1;i<=10;i++) {
		let previousIndex = i-1;
		let currentIndex = i;
		let newIndex = i+1;
		numArray[newIndex] = numArray[previousIndex] + numArray[currentIndex];
		
	}
	console.log(numArray.join(", "));
}

function RomanToDecimal(){
	let numeral = prompt("Enter in a Roman Numeral:").split('');
	let decimal = 0;
	for(let i = 0; i<numeral.length;i++){
		if(numeral[i] === "I"){
			if(numeral[i+1] === "V" || numeral[i+1] === "X"){
				decimal -= 1;
			}
			else{
				decimal += 1;
			}
		}
		else if(numeral[i] === "V"){
			decimal += 5;
		}
		else if(numeral[i] === "X"){
			if(numeral[i+1] === "L" || numeral[i+1] === "C"){
				decimal -= 10;
			}
			else{
				decimal += 10;
			}
		}
		else if(numeral[i] === "L"){
			decimal += 50;
		}
		else if(numeral[i] === "C"){
			if(numeral[i+1] === "D" || numeral[i+1] === "M"){
				decimal -= 100;
			}
			else{
				decimal += 100;
			}
		}
		else if(numeral[i] === "D"){
			decimal += 500;
		}
		else if(numeral[i] === "M"){
			decimal += 1000;
		}
	}
	console.log(decimal);
}

function NbrToRoman() {
	let nbr = prompt("Enter a number:");
    if (!+nbr) {
    	return NaN;
    }
    let digits = String(+nbr).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    console.log(Array(+digits.join("") + 1).join("M") + roman);
	
}

function stringSplosion() {
	let strData = prompt("Enter a word:");
	let stringSplosion = "";
	for (let i=1;i<=strData.length;i++) {
		stringSplosion += strData.substr(0,i);
	}
	console.log(stringSplosion);
}

function withoutString() {
	let string1 = prompt("Enter a word:");
	let string2 = prompt("Enter search phrase:")
	let re = new RegExp(string2,"i");
	string1 = string1.replace(re,"");
	console.log(string1);
	
}

/*FizzBuzz();
ReverseStr("Hello");
CapitalizeLetter();
StrCompression();*/
Palindrome();
/*HappyNumbers();
PrimeNumbers();
Fibonacci();
RomanToDecimal();
NbrToRoman();
stringSplosion();
withoutString()*/