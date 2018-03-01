"use strict";

let firstName = "";

let workHours = "";
let hourlyRate = "";
let weeklyPay = "";
let test = "";



function validateForm() {
	firstName = document.getElementById('fname').value;
	workHours = document.getElementById('hours_worked').value;
	hourlyRate = document.getElementById('wage').value;

   if (firstName == "") {
        alert("First name must be filled out");
        return false;
    } else
  if (hourlyRate == "") {
        alert("Wage must be filled out");
        return false;
    } else 
 if (workHours == "") {
        alert("Hours worked must be filled out");
        return false;
    } 

if (workHours <= 40) {
	weeklyPay = workHours * hourlyRate;
} else {
	weeklyPay = ((workHours - 40) * (hourlyRate * 1.5)) + (hourlyRate * 40);
}
	


console.log(firstName + "'s weekly pay was $" + weeklyPay.toFixed(2));
	return document.getElementById("myP").innerHTML = "Your weekly pay is $" + weeklyPay.toFixed(2);
}


