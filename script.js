const apiKey="688c8bbf7eeb6d9e0f163a129be80756";
const apiUrl_forecast="https://api.openweathermap.org/data/2.5/forecast?units=metric&unit=Metric&cnt=12&q=";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


var search_city=document.querySelector('.search-bar input')
var weather_background=document.querySelector('.background')

var weather=document.querySelector("#weather-condition")

var weather_forecast=document.querySelector('.weather-status0')
var weather_forecast1=document.querySelector('.weather-status1')
var weather_forecast2=document.querySelector('.weather-status2')
var weather_forecast3=document.querySelector('.weather-status3')
var weather_forecast4=document.querySelector('.weather-status4')
var weather_forecast5=document.querySelector('.weather-status5')
var weather_forecast6=document.querySelector('.weather-status6')

var sunrise_img=document.querySelector("#sunrise")
var sunset_img=document.querySelector("#sunset")

document.querySelector('.error').style.display='none';
document.querySelector('.background').style.display='none';


async function inspect_weather(city){
    const value=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(value.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.background').style.display='none';
    }else{
        document.querySelector('.background').style.display='block';
        document.querySelector('.error').style.display='none';

    }
    const data= await value.json();
    console.log(data)
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.country').innerHTML=data.sys.country;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector("#weather-description").innerHTML=data.weather[0].description;

    if(data.weather[0].main=="Clouds"){
        weather.src="weather_images/cloudy.png"
        weather_background.style.backgroundImage="url(weather_images/cloud_background.jpg)";
    }else if(data.weather[0].main=="Mist"){
        weather.src="weather_images/mist.png"
        weather_background.style.backgroundImage="url(weather_images/mist_background.jpg)";
    }else if(data.weather[0].main=="Clear"){
        weather.src="weather_images/sunny.png"
        weather_background.style.backgroundImage="url(weather_images/weather_background.jpg)";
    }else if(data.weather[0].main=="Rain"){
        weather.src="weather_images/rain.png"
        weather_background.style.backgroundImage="url(weather_images/rain_background.jpg)";
    }else if(data.weather[0].main=="Drizzel"){
        weather.src="weather_images/cloudy.png"
        weather_background.style.backgroundImage="url(weather_images/drizzel_background.jpg)";
    }else if(data.weather[0].main=="Snow"){
        weather.src="weather_images/snow.png"
        weather_background.style.backgroundImage="url(weather_images/snow_background.jpg)";
    }else if(data.weather[0].main=="Haze"){
        weather.src="weather_images/haze.png"
        weather_background.style.backgroundImage="url(weather_images/haze_background.jpg)";

    }



    document.querySelector('.real-feel').innerHTML=data.main.feels_like;
    document.querySelector('.rain').innerHTML=data.weather[0].description;
    document.querySelector('.wind').innerHTML=data.wind.speed + " Km/h";
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";

    document.querySelector('.pressure').innerHTML=data.main.pressure +" mbar";
    document.querySelector('.visibility').innerHTML=data.visibility;    

    var unix_sunrise=data.sys.sunrise;
    let date_sunrise = new Date(unix_sunrise*1000).toLocaleTimeString("en-US");
    console.log(date_sunrise)
    document.querySelector('.sunrise').innerHTML=date_sunrise;

    var unix_sunset=data.sys.sunset;
    let date_sunset = new Date(unix_sunset*1000).toLocaleTimeString("en-US");
    console.log(date_sunset)
    document.querySelector('.sunset').innerHTML=date_sunset;

    sunrise_img.src="weather_images/sunrise.png"
    sunset_img.src="weather_images/sunset.png"

    
    //  document.querySelector('.background').style.display='block';



}
// inspect_weather();


async function forecast_weather(city){
    const value=await fetch(apiUrl_forecast + city + `&appid=${apiKey}`);
   
    const data= await value.json();
    console.log(data)
    document.querySelector('.upcomming-days-temp1').innerHTML=Math.round(data.list[0].main.temp) + "°C";
    document.querySelector('.upcomming-days-temp2').innerHTML=Math.round(data.list[1].main.temp) + "°C";
    document.querySelector('.upcomming-days-temp3').innerHTML=Math.round(data.list[2].main.temp) + "°C";
    document.querySelector('.upcomming-days-temp4').innerHTML=Math.round(data.list[3].main.temp) + "°C";
    document.querySelector('.upcomming-days-temp5').innerHTML=Math.round(data.list[4].main.temp) + "°C";
    document.querySelector('.upcomming-days-temp6').innerHTML=Math.round(data.list[5].main.temp) + "°C";
    document.querySelector('.upcomming-days-temp7').innerHTML=Math.round(data.list[6].main.temp) + "°C";

    if(data.list[0].weather[0].main=="Clouds"){
        weather_forecast.src="weather_images/cloudy.png"
    }else if(data.list[0].weather[0].main=="Mist"){
        weather_forecast.src="weather_images/mist.png"
    }else if(data.list[0].weather[0].main=="Clear"){
        weather_forecast.src="weather_images/sunny.png"
    }else if(data.list[0].weather[0].main=="Rain"){
        weather_forecast.src="weather_images/rain.png"
    }else if(data.list[0].weather[0].main=="Drizzel"){
        weather_forecast.src="weather_images/cloudy.png"
    }else if(data.list[0].weather[0].main=="Snow"){
        weather_forecast.src="weather_images/snow.png"
    }else if(data.list[0].weather[0].main=="Haze"){
        weather_forecast.src="weather_images/haze.png"
    }


    if(data.list[1].weather[0].main=="Clouds"){
        weather_forecast1.src="weather_images/cloudy.png"
    }else if(data.list[1].weather[0].main=="Mist"){
        weather_forecast1.src="weather_images/mist.png"
    }else if(data.list[1].weather[0].main=="Clear"){
        weather_forecast1.src="weather_images/sunny.png"
    }else if(data.list[1].weather[0].main=="Rain"){
        weather_forecast1.src="weather_images/rain.png"
    }else if(data.list[1].weather[0].main=="Drizzel"){
        weather_forecast1.src="weather_images/cloudy.png"
    }else if(data.list[1].weather[0].main=="Snow"){
        weather_forecast1.src="weather_images/snow.png"
    }else if(data.list[1].weather[0].main=="Haze"){
        weather_forecast1.src="weather_images/haze.png"
    }

    if(data.list[2].weather[0].main=="Clouds"){
        weather_forecast2.src="weather_images/cloudy.png"
    }else if(data.list[2].weather[0].main=="Mist"){
        weather_forecast2.src="weather_images/mist.png"
    }else if(data.list[2].weather[0].main=="Clear"){
        weather_forecast2.src="weather_images/sunny.png"
    }else if(data.list[2].weather[0].main=="Rain"){
        weather_forecast2.src="weather_images/rain.png"
    }else if(data.list[2].weather[0].main=="Drizzel"){
        weather_forecast2.src="weather_images/cloudy.png"
    }else if(data.list[2].weather[0].main=="Snow"){
        weather_forecast2.src="weather_images/snow.png"
    }else if(data.list[2].weather[0].main=="Haze"){
        weather_forecast2.src="weather_images/haze.png"
    }

    if(data.list[3].weather[0].main=="Clouds"){
        weather_forecast3.src="weather_images/cloudy.png"
    }else if(data.list[3].weather[0].main=="Mist"){
        weather_forecast3.src="weather_images/mist.png"
    }else if(data.list[3].weather[0].main=="Clear"){
        weather_forecast3.src="weather_images/sunny.png"
    }else if(data.list[3].weather[0].main=="Rain"){
        weather_forecast3.src="weather_images/rain.png"
    }else if(data.list[3].weather[0].main=="Drizzel"){
        weather_forecast3.src="weather_images/cloudy.png"
    }else if(data.list[3].weather[0].main=="Snow"){
        weather_forecast3.src="weather_images/snow.png"
    }else if(data.list[3].weather[0].main=="Haze"){
        weather_forecast3.src="weather_images/haze.png"
    }

    if(data.list[4].weather[0].main=="Clouds"){
        weather_forecast4.src="weather_images/cloudy.png"
    }else if(data.list[4].weather[0].main=="Mist"){
        weather_forecast4.src="weather_images/mist.png"
    }else if(data.list[4].weather[0].main=="Clear"){
        weather_forecast4.src="weather_images/sunny.png"
    }else if(data.list[4].weather[0].main=="Rain"){
        weather_forecast4.src="weather_images/rain.png"
    }else if(data.list[4].weather[0].main=="Drizzel"){
        weather_forecast4.src="weather_images/cloudy.png"
    }else if(data.list[4].weather[0].main=="Snow"){
        weather_forecast4.src="weather_images/snow.png"
    }else if(data.list[4].weather[0].main=="Haze"){
        weather_forecast4.src="weather_images/haze.png"
    }

    if(data.list[5].weather[0].main=="Clouds"){
        weather_forecast5.src="weather_images/cloudy.png"
    }else if(data.list[5].weather[0].main=="Mist"){
        weather_forecast5.src="weather_images/mist.png"
    }else if(data.list[5].weather[0].main=="clear"){
        weather_forecast5.src="weather_images/sunny.png"
    }else if(data.list[5].weather[0].main=="Rain"){
        weather_forecast5.src="weather_images/rain.png"
    }else if(data.list[5].weather[0].main=="Drizzel"){
        weather_forecast5.src="weather_images/cloudy.png"
    }else if(data.list[5].weather[0].main=="Snow"){
        weather_forecast65.src="weather_images/snow.png"
    }else if(data.list[5].weather[0].main=="Haze"){
        weather_forecast5.src="weather_images/haze.png"
    }

    if(data.list[6].weather[0].main=="Clouds"){
        weather_forecast6.src="weather_images/cloudy.png"
    }else if(data.list[6].weather[0].main=="Mist"){
        weather_forecast6.src="weather_images/mist.png"
    }else if(data.list[6].weather[0].main=="clear"){
        weather_forecast6.src="weather_images/sunny.png"
    }else if(data.list[6].weather[0].main=="Rain"){
        weather_forecast6.src="weather_images/rain.png"
    }else if(data.list[6].weather[0].main=="Drizzel"){
        weather_forecast6.src="weather_images/cloudy.png"
    }else if(data.list[6].weather[0].main=="Snow"){
        weather_forecast6.src="weather_images/snow.png"
    }else if(data.list[6].weather[0].main=="Haze"){
        weather_forecast6.src="weather_images/haze.png"
    }




    document.querySelector('.time1').innerHTML=data.list[0].dt_txt
    document.querySelector('.time2').innerHTML=data.list[1].dt_txt
    document.querySelector('.time3').innerHTML=data.list[2].dt_txt
    document.querySelector('.time4').innerHTML=data.list[3].dt_txt
    document.querySelector('.time5').innerHTML=data.list[4].dt_txt
    document.querySelector('.time6').innerHTML=data.list[5].dt_txt;
    document.querySelector('.time7').innerHTML=data.list[6].dt_txt;

    var time_zone=data.city.timezone;
    var time_date=new Date(time_zone*1000).getTimezoneOffset();
    console.log(time_date)

    document.querySelector('.timezone').innerHTML=time_date;
    document.querySelector('.population').innerHTML=data.city.population;
   
}
// forecast_weather();

document.querySelector('.search').addEventListener('click',()=>{
    inspect_weather(search_city.value);
    forecast_weather(search_city.value);
})