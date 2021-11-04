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

export {getWeather, getForecast};