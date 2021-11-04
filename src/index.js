import { getWeather, getForecast } from "./weather";
import { Today , Week} from "./display";

//getWeather("london");
const searchBar=document.querySelector("#search-bar");
const searchBtn=document.querySelector("#search-icon");
searchBtn.addEventListener('click',async (e)=>{
    if(searchBar.value==""){
        return;
    }
    let value=searchBar.value;
    // console.log(value);
    let results= await getWeather(value);
    let forecast= await getForecast(value);
    // console.log(forecast);
    Today.Display(results);
    Today.Background(results);
//    console.log(Week.DayofTheWeek("2021-10-27"));// działa
   console.log(forecast[0].date);

  console.log(Week.DayofTheWeek(forecast[0].date));
   //Week.DateSplitter("2021-10-27");
    Week.Display(forecast);


});
const celsius=document.querySelector("#celsius");
celsius.addEventListener('click', async (e)=>{
    console.log("C");
    Today.C();
    Week.C();
});
const faren=document.querySelector("#fahrenheit");
faren.addEventListener('click', async (e)=>{
    console.log("F");
    Today.F();
    Week.F();
});