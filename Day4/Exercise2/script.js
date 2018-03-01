"use strict";

function runPayCalculator() {
	let weeklyPay = "";
	let firstName = document.getElementById('fname').value;
	let workHours = document.getElementById('hours_worked').value;
	let hourlyRate = document.getElementById('wage').value;
	let standardWorkWeek = "40";
	let otHours = getOvertimeHours(standardWorkWeek,workHours);
	
	validateForm(firstName,hourlyRate,workHours);
	weeklyPay = getOvertimePay(hourlyRate,standardWorkWeek, workHours) + getStandardtimePay(standardWorkWeek, workHours, hourlyRate);
	console.log(firstName + "'s weekly pay was $" + weeklyPay.toFixed(2));
	return document.getElementById("myP").innerHTML = firstName + "'s weekly pay is $" + weeklyPay.toFixed(2);

	}

function validateForm(firstName, hourlyRate, workHours) {

	if (firstName == "") {
	    alert("First name must be filled out");
	    return false;
		} else if (hourlyRate == "") {
		    alert("Wage must be filled out");
		    return false;
			} else if (workHours == "") {
			    alert("Hours worked must be filled out");
			    return false;
				} 
}

function getOvertimeHours(standardWorkWeek, workHours) {
	let hours = 0;
	if (workHours > standardWorkWeek) {
		hours = workHours - standardWorkWeek;
	} 
	return hours;
}

function getOvertimePay(hourlyRate,standardWorkWeek, workHours) {
	let otPay = getOvertimeHours(standardWorkWeek, workHours) * (hourlyRate * 1.5);
	return otPay;
}

function getStandardtimePay(standardWorkWeek, workHours, hourlyRate) {
	let stdPay = 0;
	if (workHours <= standardWorkWeek) {
		stdPay = workHours * hourlyRate;
	} else 
		{
			stdPay = standardWorkWeek * hourlyRate;
		}
	return stdPay;
}