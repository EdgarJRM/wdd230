
let date1 = document.querySelector("#currentdate");

try {
	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric",
	};
	date1.innerHTML = `Today is <span>${new Date().toLocaleDateString("en-UK", options)}</span>!`;
} catch (e) {
	alert("Error with code or your browser does not support Locale");
}



let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let d = new Date();
let year = d.getFullYear();
let fulldate = `${year}`;
document.querySelector("#currendate").textContent = fulldate;