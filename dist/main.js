/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Today": () => (/* binding */ Today),
/* harmony export */   "Week": () => (/* binding */ Week)
/* harmony export */ });
const Today = (() => {
    const container=document.querySelector(".container");
    const boxes=document.querySelectorAll(".box");
    const C=()=>{
     
            const p3=document.getElementById("temp-tag");
            const temp_now=p3.innerHTML;
            if(temp_now.includes("°C")){
                return;
            }
            else{
                let matches = Number(temp_now.match(/(\d+)/));
                console.log(matches);
                let cel=((matches-32)/1.800).toFixed(1);
                p3.innerHTML=cel+"°C";
            
            }
      
    };
    const F=()=>{
        const p3=document.getElementById("temp-tag");
        const temp_now=p3.innerHTML;
            if(temp_now.includes("°F")){
                return;
            }
            else{
                let matches = Number(temp_now.match(/(\d+)/));
                
                console.log(matches);
                let far=((matches+32)*1.800).toFixed(1);
                console.log(far);
                p3.innerHTML=far+"°C";
            
            }

    };
    const Display=(data)=>{
     boxes.forEach((box, index)=>{
     // const p=box.querySelector("p")
      if(index==0){
          const p1=document.getElementById("city-tag");
          p1.innerHTML=data.city;
      }
      if(index==1){
          const p2=document.getElementById("description");
          const img=document.querySelector("#icon");
          img.src=`http://openweathermap.org/img/wn/${data.icon}@2x.png`;
          p2.innerHTML=data.description;          
      }
      if(index==2){
        const p3=document.getElementById("temp-tag");
        const temp=Number(data.temperature)-273.15;
        const t=Number(temp).toFixed(1);
        p3.innerHTML=t+"°C";
        
      }
      if(index==3){
          const p4=document.getElementById("feel-tag");
          const temp2=Number(data.feel)-273.15;
          const t2=Number(temp2).toFixed(1);
          p4.innerHTML="Feels like "+t2+"°C";
      }
     
     })
    }
    const Background=(data)=>{
      if(data.description=="clear sky"){
          container.classList.add("clear");

      }
      if(data.description=="few clouds"||data.description=="scattered clouds"){
          container.classList.add("few-clouds");
      }
      if(data.description=="broken clouds"){
          container.classList.add("cloudy");
      }
      if(data.descriction=="shower rain"||data.description=="rain"){
          container.classList.add("rain")
      }
      if(data.description=="thunderstorm"){
          container.classList.add("thunder");
      }
      if(data.description=="snow"){
          container.classList.add("snow");
      }
      if(data.description=="mist"){
        container.classList.add("mist");
    }
       
    }
   return{Display, Background, C, F}
   
})();
const Week=(()=>{
    const spots=document.querySelectorAll(".spot");
    // const DateSplitter=(date)=>{
    //     let datey=toString(date);
    //     let list=datey.split("-");
    //     let y= list[0];
    //     let m=list[1];
    //     let d=list[2];
    //     console.log(y);
    //     console.log(m);
    //     console.log(d);
    //    return [y, m, d];
    // }
    const DayofTheWeek=(date)=>{
        
        let list=date.split("-");
        let y= list[0];
        let m=list[1];
        let d=list[2];
     
        let t=[0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        if ( m < 3 )
        {
        y -= 1;
        }
        let day=Math.round((y + y/4 - y/100 + y/400 + t[m-1] + d) % 7)
        switch (day){
            case 0:
                return "Sunday";
                break;
            case 1:
               return "Monday";
               break;
            case 2:
                return "Tuesday";
                break;
            case 3:
                return "Wednesday";
                 break;
            case 4:
                return "Thursday";
                break;
            case 5:
                return "Friday";
                break;
            case 6:
                return "Saturday";
                break;
        }
        
    }
    const C=()=>{
        const temps=document.querySelectorAll(".temp");
        temps.forEach((temp, index)=>{
            const temp_now=temps[index].innerHTML;
            if(temp_now.includes("°C")){
                return;
            }
            else{
                let matches = Number(temp_now.match(/(\d+)/));
                console.log(matches);
                let cel=((matches-32)/1.800).toFixed(1);
                console.log(far)
                temps[index].innerHTML=cel+"°C";
            
            }
            
        });

    };
    const F=()=>{
        const temps=document.querySelectorAll(".temp");
        temps.forEach((temp, index)=>{
            const temp_now=temps[index].innerHTML;
            if(temp_now.includes("°F")){
                return;
            }
            else{
                let matches = Number(temp_now.match(/(\d+)/));
                console.log(matches);
                let far=((matches+32)*1.800).toFixed(1);
                temps[index].innerHTML=far+"°F";
            
            }

        });
    };
    const Display=(data)=>{
       const temps=document.querySelectorAll(".temp");
       const days=document.querySelectorAll(".day");
       const rains=document.querySelectorAll(".rain");
       const icons=document.querySelectorAll(".icon");
       spots.forEach((spot, index)=>{
        temps[index].innerHTML=data[index].temp+"°C";
        let fixed=data[index].date;
        console.log(fixed);
        let day_week=DayofTheWeek(fixed);
        days[index].innerHTML=day_week;
        rains[index].innerHTML="Chance of rain: "+data[index].rain;
        icons[index].src=data[index].icon;
       })


    }
   return{DayofTheWeek, Display, C, F}
})();


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "getForecast": () => (/* binding */ getForecast)
/* harmony export */ });
const Api_key="4ee8a0365d121e44fd106ced5a8cbb20";

const ConvertData=(data)=>{
    let city=data.name;
    let temperature=data.main.temp;
    let humidity=data.main.humidity;
    let feel=data.main.feels_like;  //checked  
    let description=data.weather[0].description;//checked
    let icon= data.weather[0].icon;
    return{city, temperature, humidity, feel, description, icon}
}
const ConvertForecast=(data)=>{
    let day1_temp=data.forecast.forecastday[0].day.avgtemp_c;
    let day1_date=data.forecast.forecastday[0].date;
    let day1_rain=data.forecast.forecastday[0].day.daily_chance_of_rain;
    let day1_icon=data.forecast.forecastday[0].day.condition.icon;
    let day2_temp=data.forecast.forecastday[1].day.avgtemp_c;
    let day2_date=data.forecast.forecastday[1].date;
    let day2_rain=data.forecast.forecastday[1].day.daily_chance_of_rain;
    let day2_icon=data.forecast.forecastday[1].day.condition.icon;
    let day3_temp=data.forecast.forecastday[2].day.avgtemp_c;
    let day3_date=data.forecast.forecastday[2].date;
    let day3_rain=data.forecast.forecastday[2].day.daily_chance_of_rain;
    let day3_icon=data.forecast.forecastday[2].day.condition.icon;
    const DayFactory=(temp, date, rain, icon)=>{
        return{temp, date, rain, icon}
    }
    const day1=DayFactory(day1_temp, day1_date, day1_rain, day1_icon);
    const day2=DayFactory(day2_temp, day2_date, day2_rain, day2_icon);
    const day3=DayFactory(day3_temp, day3_date, day3_rain, day3_icon);
    return[day1,day2, day3];
}
async function getWeather(city){
    //const request=`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4ee8a0365d121e44fd106ced5a8cbb20`;
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&days=7&appid=4ee8a0365d121e44fd106ced5a8cbb20`, { mode: "cors" })
        const predata =await response.json();
        //console.log(predata);
        const data=ConvertData(predata);
        //console.log(data);
               
        if(!response.ok){
           throw new Error(`City ${city} not found!`)
        }
        return data;
    }
    catch{
      console.log("err2")
    }

}
async function getForecast(city){
   //
    try{
        const response= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=970a6d59caa54a7d88b103812212810&q=${city}&days=7&aqi=no&alerts=no`, { mode: "cors" })
        const predata =await response.json();
        console.log(predata);
        const data=ConvertForecast(predata);
        console.log(data);
               
        if(!response.ok){
           throw new Error(`City ${city} not found!`)
        }
        return data;
    }
    catch{
      console.log("err2")
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");



//getWeather("london");
const searchBar=document.querySelector("#search-bar");
const searchBtn=document.querySelector("#search-icon");
searchBtn.addEventListener('click',async (e)=>{
    if(searchBar.value==""){
        return;
    }
    let value=searchBar.value;
    // console.log(value);
    let results= await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(value);
    let forecast= await (0,_weather__WEBPACK_IMPORTED_MODULE_0__.getForecast)(value);
    // console.log(forecast);
    _display__WEBPACK_IMPORTED_MODULE_1__.Today.Display(results);
    _display__WEBPACK_IMPORTED_MODULE_1__.Today.Background(results);
//    console.log(Week.DayofTheWeek("2021-10-27"));// działa
   console.log(forecast[0].date);

  console.log(_display__WEBPACK_IMPORTED_MODULE_1__.Week.DayofTheWeek(forecast[0].date));
   //Week.DateSplitter("2021-10-27");
    _display__WEBPACK_IMPORTED_MODULE_1__.Week.Display(forecast);


});
const celsius=document.querySelector("#celsius");
celsius.addEventListener('click', async (e)=>{
    console.log("C");
    _display__WEBPACK_IMPORTED_MODULE_1__.Today.C();
    _display__WEBPACK_IMPORTED_MODULE_1__.Week.C();
});
const faren=document.querySelector("#fahrenheit");
faren.addEventListener('click', async (e)=>{
    console.log("F");
    _display__WEBPACK_IMPORTED_MODULE_1__.Today.F();
    _display__WEBPACK_IMPORTED_MODULE_1__.Week.F();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1o7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvREFBVTtBQUNqQyx3QkFBd0IscURBQVc7QUFDbkM7QUFDQSxJQUFJLG1EQUFhO0FBQ2pCLElBQUksc0RBQWdCO0FBQ3BCLG1EQUFtRDtBQUNuRDs7QUFFQSxjQUFjLHVEQUFpQjtBQUMvQjtBQUNBLElBQUksa0RBQVk7OztBQUdoQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBTztBQUNYLElBQUksNENBQU07QUFDVixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBTztBQUNYLElBQUksNENBQU07QUFDVixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vc3JjL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2RheSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGJveGVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm94XCIpO1xuICAgIGNvbnN0IEM9KCk9PntcbiAgICAgXG4gICAgICAgICAgICBjb25zdCBwMz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtdGFnXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVtcF9ub3c9cDMuaW5uZXJIVE1MO1xuICAgICAgICAgICAgaWYodGVtcF9ub3cuaW5jbHVkZXMoXCLCsENcIikpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBOdW1iZXIodGVtcF9ub3cubWF0Y2goLyhcXGQrKS8pKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgY2VsPSgobWF0Y2hlcy0zMikvMS44MDApLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgcDMuaW5uZXJIVE1MPWNlbCtcIsKwQ1wiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICB9O1xuICAgIGNvbnN0IEY9KCk9PntcbiAgICAgICAgY29uc3QgcDM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLXRhZ1wiKTtcbiAgICAgICAgY29uc3QgdGVtcF9ub3c9cDMuaW5uZXJIVE1MO1xuICAgICAgICAgICAgaWYodGVtcF9ub3cuaW5jbHVkZXMoXCLCsEZcIikpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBOdW1iZXIodGVtcF9ub3cubWF0Y2goLyhcXGQrKS8pKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXRjaGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgZmFyPSgobWF0Y2hlcyszMikqMS44MDApLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFyKTtcbiAgICAgICAgICAgICAgICBwMy5pbm5lckhUTUw9ZmFyK1wiwrBDXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgIH07XG4gICAgY29uc3QgRGlzcGxheT0oZGF0YSk9PntcbiAgICAgYm94ZXMuZm9yRWFjaCgoYm94LCBpbmRleCk9PntcbiAgICAgLy8gY29uc3QgcD1ib3gucXVlcnlTZWxlY3RvcihcInBcIilcbiAgICAgIGlmKGluZGV4PT0wKXtcbiAgICAgICAgICBjb25zdCBwMT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktdGFnXCIpO1xuICAgICAgICAgIHAxLmlubmVySFRNTD1kYXRhLmNpdHk7XG4gICAgICB9XG4gICAgICBpZihpbmRleD09MSl7XG4gICAgICAgICAgY29uc3QgcDI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICBjb25zdCBpbWc9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpO1xuICAgICAgICAgIGltZy5zcmM9YGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5pY29ufUAyeC5wbmdgO1xuICAgICAgICAgIHAyLmlubmVySFRNTD1kYXRhLmRlc2NyaXB0aW9uOyAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIGlmKGluZGV4PT0yKXtcbiAgICAgICAgY29uc3QgcDM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLXRhZ1wiKTtcbiAgICAgICAgY29uc3QgdGVtcD1OdW1iZXIoZGF0YS50ZW1wZXJhdHVyZSktMjczLjE1O1xuICAgICAgICBjb25zdCB0PU51bWJlcih0ZW1wKS50b0ZpeGVkKDEpO1xuICAgICAgICBwMy5pbm5lckhUTUw9dCtcIsKwQ1wiO1xuICAgICAgICBcbiAgICAgIH1cbiAgICAgIGlmKGluZGV4PT0zKXtcbiAgICAgICAgICBjb25zdCBwND1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWwtdGFnXCIpO1xuICAgICAgICAgIGNvbnN0IHRlbXAyPU51bWJlcihkYXRhLmZlZWwpLTI3My4xNTtcbiAgICAgICAgICBjb25zdCB0Mj1OdW1iZXIodGVtcDIpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgcDQuaW5uZXJIVE1MPVwiRmVlbHMgbGlrZSBcIit0MitcIsKwQ1wiO1xuICAgICAgfVxuICAgICBcbiAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgQmFja2dyb3VuZD0oZGF0YSk9PntcbiAgICAgIGlmKGRhdGEuZGVzY3JpcHRpb249PVwiY2xlYXIgc2t5XCIpe1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xlYXJcIik7XG5cbiAgICAgIH1cbiAgICAgIGlmKGRhdGEuZGVzY3JpcHRpb249PVwiZmV3IGNsb3Vkc1wifHxkYXRhLmRlc2NyaXB0aW9uPT1cInNjYXR0ZXJlZCBjbG91ZHNcIil7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmZXctY2xvdWRzXCIpO1xuICAgICAgfVxuICAgICAgaWYoZGF0YS5kZXNjcmlwdGlvbj09XCJicm9rZW4gY2xvdWRzXCIpe1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvdWR5XCIpO1xuICAgICAgfVxuICAgICAgaWYoZGF0YS5kZXNjcmljdGlvbj09XCJzaG93ZXIgcmFpblwifHxkYXRhLmRlc2NyaXB0aW9uPT1cInJhaW5cIil7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyYWluXCIpXG4gICAgICB9XG4gICAgICBpZihkYXRhLmRlc2NyaXB0aW9uPT1cInRodW5kZXJzdG9ybVwiKXtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRodW5kZXJcIik7XG4gICAgICB9XG4gICAgICBpZihkYXRhLmRlc2NyaXB0aW9uPT1cInNub3dcIil7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbm93XCIpO1xuICAgICAgfVxuICAgICAgaWYoZGF0YS5kZXNjcmlwdGlvbj09XCJtaXN0XCIpe1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1pc3RcIik7XG4gICAgfVxuICAgICAgIFxuICAgIH1cbiAgIHJldHVybntEaXNwbGF5LCBCYWNrZ3JvdW5kLCBDLCBGfVxuICAgXG59KSgpO1xuY29uc3QgV2Vlaz0oKCk9PntcbiAgICBjb25zdCBzcG90cz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNwb3RcIik7XG4gICAgLy8gY29uc3QgRGF0ZVNwbGl0dGVyPShkYXRlKT0+e1xuICAgIC8vICAgICBsZXQgZGF0ZXk9dG9TdHJpbmcoZGF0ZSk7XG4gICAgLy8gICAgIGxldCBsaXN0PWRhdGV5LnNwbGl0KFwiLVwiKTtcbiAgICAvLyAgICAgbGV0IHk9IGxpc3RbMF07XG4gICAgLy8gICAgIGxldCBtPWxpc3RbMV07XG4gICAgLy8gICAgIGxldCBkPWxpc3RbMl07XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHkpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhtKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZCk7XG4gICAgLy8gICAgcmV0dXJuIFt5LCBtLCBkXTtcbiAgICAvLyB9XG4gICAgY29uc3QgRGF5b2ZUaGVXZWVrPShkYXRlKT0+e1xuICAgICAgICBcbiAgICAgICAgbGV0IGxpc3Q9ZGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgIGxldCB5PSBsaXN0WzBdO1xuICAgICAgICBsZXQgbT1saXN0WzFdO1xuICAgICAgICBsZXQgZD1saXN0WzJdO1xuICAgICBcbiAgICAgICAgbGV0IHQ9WzAsIDMsIDIsIDUsIDAsIDMsIDUsIDEsIDQsIDYsIDIsIDRdO1xuICAgICAgICBpZiAoIG0gPCAzIClcbiAgICAgICAge1xuICAgICAgICB5IC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRheT1NYXRoLnJvdW5kKCh5ICsgeS80IC0geS8xMDAgKyB5LzQwMCArIHRbbS0xXSArIGQpICUgNylcbiAgICAgICAgc3dpdGNoIChkYXkpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlN1bmRheVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgcmV0dXJuIFwiTW9uZGF5XCI7XG4gICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2VkbmVzZGF5XCI7XG4gICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiRnJpZGF5XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgY29uc3QgQz0oKT0+e1xuICAgICAgICBjb25zdCB0ZW1wcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXBcIik7XG4gICAgICAgIHRlbXBzLmZvckVhY2goKHRlbXAsIGluZGV4KT0+e1xuICAgICAgICAgICAgY29uc3QgdGVtcF9ub3c9dGVtcHNbaW5kZXhdLmlubmVySFRNTDtcbiAgICAgICAgICAgIGlmKHRlbXBfbm93LmluY2x1ZGVzKFwiwrBDXCIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaGVzID0gTnVtYmVyKHRlbXBfbm93Lm1hdGNoKC8oXFxkKykvKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgbGV0IGNlbD0oKG1hdGNoZXMtMzIpLzEuODAwKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhcilcbiAgICAgICAgICAgICAgICB0ZW1wc1tpbmRleF0uaW5uZXJIVE1MPWNlbCtcIsKwQ1wiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuICAgIGNvbnN0IEY9KCk9PntcbiAgICAgICAgY29uc3QgdGVtcHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wXCIpO1xuICAgICAgICB0ZW1wcy5mb3JFYWNoKCh0ZW1wLCBpbmRleCk9PntcbiAgICAgICAgICAgIGNvbnN0IHRlbXBfbm93PXRlbXBzW2luZGV4XS5pbm5lckhUTUw7XG4gICAgICAgICAgICBpZih0ZW1wX25vdy5pbmNsdWRlcyhcIsKwRlwiKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlcyA9IE51bWJlcih0ZW1wX25vdy5tYXRjaCgvKFxcZCspLykpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1hdGNoZXMpO1xuICAgICAgICAgICAgICAgIGxldCBmYXI9KChtYXRjaGVzKzMyKSoxLjgwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICB0ZW1wc1tpbmRleF0uaW5uZXJIVE1MPWZhcitcIsKwRlwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBEaXNwbGF5PShkYXRhKT0+e1xuICAgICAgIGNvbnN0IHRlbXBzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcFwiKTtcbiAgICAgICBjb25zdCBkYXlzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5XCIpO1xuICAgICAgIGNvbnN0IHJhaW5zPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmFpblwiKTtcbiAgICAgICBjb25zdCBpY29ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmljb25cIik7XG4gICAgICAgc3BvdHMuZm9yRWFjaCgoc3BvdCwgaW5kZXgpPT57XG4gICAgICAgIHRlbXBzW2luZGV4XS5pbm5lckhUTUw9ZGF0YVtpbmRleF0udGVtcCtcIsKwQ1wiO1xuICAgICAgICBsZXQgZml4ZWQ9ZGF0YVtpbmRleF0uZGF0ZTtcbiAgICAgICAgY29uc29sZS5sb2coZml4ZWQpO1xuICAgICAgICBsZXQgZGF5X3dlZWs9RGF5b2ZUaGVXZWVrKGZpeGVkKTtcbiAgICAgICAgZGF5c1tpbmRleF0uaW5uZXJIVE1MPWRheV93ZWVrO1xuICAgICAgICByYWluc1tpbmRleF0uaW5uZXJIVE1MPVwiQ2hhbmNlIG9mIHJhaW46IFwiK2RhdGFbaW5kZXhdLnJhaW47XG4gICAgICAgIGljb25zW2luZGV4XS5zcmM9ZGF0YVtpbmRleF0uaWNvbjtcbiAgICAgICB9KVxuXG5cbiAgICB9XG4gICByZXR1cm57RGF5b2ZUaGVXZWVrLCBEaXNwbGF5LCBDLCBGfVxufSkoKTtcbmV4cG9ydCB7VG9kYXksIFdlZWt9IiwiY29uc3QgQXBpX2tleT1cIjRlZThhMDM2NWQxMjFlNDRmZDEwNmNlZDVhOGNiYjIwXCI7XG5cbmNvbnN0IENvbnZlcnREYXRhPShkYXRhKT0+e1xuICAgIGxldCBjaXR5PWRhdGEubmFtZTtcbiAgICBsZXQgdGVtcGVyYXR1cmU9ZGF0YS5tYWluLnRlbXA7XG4gICAgbGV0IGh1bWlkaXR5PWRhdGEubWFpbi5odW1pZGl0eTtcbiAgICBsZXQgZmVlbD1kYXRhLm1haW4uZmVlbHNfbGlrZTsgIC8vY2hlY2tlZCAgXG4gICAgbGV0IGRlc2NyaXB0aW9uPWRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjsvL2NoZWNrZWRcbiAgICBsZXQgaWNvbj0gZGF0YS53ZWF0aGVyWzBdLmljb247XG4gICAgcmV0dXJue2NpdHksIHRlbXBlcmF0dXJlLCBodW1pZGl0eSwgZmVlbCwgZGVzY3JpcHRpb24sIGljb259XG59XG5jb25zdCBDb252ZXJ0Rm9yZWNhc3Q9KGRhdGEpPT57XG4gICAgbGV0IGRheTFfdGVtcD1kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2M7XG4gICAgbGV0IGRheTFfZGF0ZT1kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7XG4gICAgbGV0IGRheTFfcmFpbj1kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICBsZXQgZGF5MV9pY29uPWRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCBkYXkyX3RlbXA9ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jO1xuICAgIGxldCBkYXkyX2RhdGU9ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlO1xuICAgIGxldCBkYXkyX3JhaW49ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gICAgbGV0IGRheTJfaWNvbj1kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBsZXQgZGF5M190ZW1wPWRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfYztcbiAgICBsZXQgZGF5M19kYXRlPWRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZTtcbiAgICBsZXQgZGF5M19yYWluPWRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgIGxldCBkYXkzX2ljb249ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb247XG4gICAgY29uc3QgRGF5RmFjdG9yeT0odGVtcCwgZGF0ZSwgcmFpbiwgaWNvbik9PntcbiAgICAgICAgcmV0dXJue3RlbXAsIGRhdGUsIHJhaW4sIGljb259XG4gICAgfVxuICAgIGNvbnN0IGRheTE9RGF5RmFjdG9yeShkYXkxX3RlbXAsIGRheTFfZGF0ZSwgZGF5MV9yYWluLCBkYXkxX2ljb24pO1xuICAgIGNvbnN0IGRheTI9RGF5RmFjdG9yeShkYXkyX3RlbXAsIGRheTJfZGF0ZSwgZGF5Ml9yYWluLCBkYXkyX2ljb24pO1xuICAgIGNvbnN0IGRheTM9RGF5RmFjdG9yeShkYXkzX3RlbXAsIGRheTNfZGF0ZSwgZGF5M19yYWluLCBkYXkzX2ljb24pO1xuICAgIHJldHVybltkYXkxLGRheTIsIGRheTNdO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KXtcbiAgICAvL2NvbnN0IHJlcXVlc3Q9YGFwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbix1ayZBUFBJRD00ZWU4YTAzNjVkMTIxZTQ0ZmQxMDZjZWQ1YThjYmIyMGA7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZT0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZkYXlzPTcmYXBwaWQ9NGVlOGEwMzY1ZDEyMWU0NGZkMTA2Y2VkNWE4Y2JiMjBgLCB7IG1vZGU6IFwiY29yc1wiIH0pXG4gICAgICAgIGNvbnN0IHByZWRhdGEgPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcmVkYXRhKTtcbiAgICAgICAgY29uc3QgZGF0YT1Db252ZXJ0RGF0YShwcmVkYXRhKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICBpZighcmVzcG9uc2Uub2spe1xuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5fSBub3QgZm91bmQhYClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY2F0Y2h7XG4gICAgICBjb25zb2xlLmxvZyhcImVycjJcIilcbiAgICB9XG5cbn1cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGNpdHkpe1xuICAgLy9cbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT05NzBhNmQ1OWNhYTU0YTdkODhiMTAzODEyMjEyODEwJnE9JHtjaXR5fSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub2AsIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICAgICAgY29uc3QgcHJlZGF0YSA9YXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcmVkYXRhKTtcbiAgICAgICAgY29uc3QgZGF0YT1Db252ZXJ0Rm9yZWNhc3QocHJlZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgIGlmKCFyZXNwb25zZS5vayl7XG4gICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2l0eSAke2NpdHl9IG5vdCBmb3VuZCFgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjYXRjaHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyMlwiKVxuICAgIH1cbn1cblxuZXhwb3J0IHtnZXRXZWF0aGVyLCBnZXRGb3JlY2FzdH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyLCBnZXRGb3JlY2FzdCB9IGZyb20gXCIuL3dlYXRoZXJcIjtcbmltcG9ydCB7IFRvZGF5ICwgV2Vla30gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG4vL2dldFdlYXRoZXIoXCJsb25kb25cIik7XG5jb25zdCBzZWFyY2hCYXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYmFyXCIpO1xuY29uc3Qgc2VhcmNoQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWljb25cIik7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFzeW5jIChlKT0+e1xuICAgIGlmKHNlYXJjaEJhci52YWx1ZT09XCJcIil7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHZhbHVlPXNlYXJjaEJhci52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgbGV0IHJlc3VsdHM9IGF3YWl0IGdldFdlYXRoZXIodmFsdWUpO1xuICAgIGxldCBmb3JlY2FzdD0gYXdhaXQgZ2V0Rm9yZWNhc3QodmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcbiAgICBUb2RheS5EaXNwbGF5KHJlc3VsdHMpO1xuICAgIFRvZGF5LkJhY2tncm91bmQocmVzdWx0cyk7XG4vLyAgICBjb25zb2xlLmxvZyhXZWVrLkRheW9mVGhlV2VlayhcIjIwMjEtMTAtMjdcIikpOy8vIGR6aWHFgmFcbiAgIGNvbnNvbGUubG9nKGZvcmVjYXN0WzBdLmRhdGUpO1xuXG4gIGNvbnNvbGUubG9nKFdlZWsuRGF5b2ZUaGVXZWVrKGZvcmVjYXN0WzBdLmRhdGUpKTtcbiAgIC8vV2Vlay5EYXRlU3BsaXR0ZXIoXCIyMDIxLTEwLTI3XCIpO1xuICAgIFdlZWsuRGlzcGxheShmb3JlY2FzdCk7XG5cblxufSk7XG5jb25zdCBjZWxzaXVzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2Vsc2l1c1wiKTtcbmNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSk9PntcbiAgICBjb25zb2xlLmxvZyhcIkNcIik7XG4gICAgVG9kYXkuQygpO1xuICAgIFdlZWsuQygpO1xufSk7XG5jb25zdCBmYXJlbj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZhaHJlbmhlaXRcIik7XG5mYXJlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiRlwiKTtcbiAgICBUb2RheS5GKCk7XG4gICAgV2Vlay5GKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=