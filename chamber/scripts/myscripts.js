document.querySelector(
	"#currendate"
).textContent = document.lastModified;

// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("#TodayDate"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;