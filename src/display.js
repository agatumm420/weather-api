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
export {Today, Week}