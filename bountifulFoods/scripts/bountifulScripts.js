// *MENU* 
//Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// What does toggle mean? Instead of add and remove, toggle means add the class name (the parameter, which in this case is named 'responsive') if it does not currently exist, and remove the 


// DATE FOOTER
document.querySelector(
	"#currendate"
).textContent = document.lastModified;


// Weather select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const humidityInfo = document.querySelector('#humidity');
const infoday1 = document.querySelector('#day1');
const infoday2 = document.querySelector('#day2');
const infoday3 = document.querySelector('#day3');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/forecast?id=5368361&units=imperial&appid=3599ef865c1609d0d90179d4ccf7175f';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
   
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
	humidityInfo.innerHTML = weatherData.list[0].main.humidity;

	//Get Day and temperature
	const now = new Date();
	let bannerDay = now.getDay();
	infoday1.innerHTML = GetdayWeekend(bannerDay) + `<strong>${weatherData.list[2].main.temp.toFixed(0)}</strong>`;
	infoday2.innerHTML = GetdayWeekend(bannerDay + 1) + `<strong>${weatherData.list[9+1].main.temp.toFixed(0)}</strong>`;
	infoday3.innerHTML = GetdayWeekend(bannerDay + 2) + `<strong>${weatherData.list[18].main.temp.toFixed(0)}</strong>`;
	
	

	console.log(GetdayWeekend(7));
}

function GetdayWeekend(numberday){
	if (numberday == 0 || numberday == 7){
		return "Sun: ";
	}else if (numberday == 1 || numberday == 8){
		return "Mon: ";
	}else if (numberday == 2){
		return "Tue: ";
	}else if (numberday == 3){
		return "Wed: ";
	}else if (numberday == 4){
		return "Thur: ";
	}else if (numberday == 5){
		return "Fri: ";
	}else if (numberday == 6){
		return "Sat: ";
	}
}
