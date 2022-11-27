// *MENU* 
//Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 


// DATE
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