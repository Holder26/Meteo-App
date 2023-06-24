
const nameCity = document.querySelector("#ville");
const temp = document.querySelector("#temperature")
const conditions = document.querySelector("#conditions")
const iconWeather = document.querySelector(".icon")
const formCity = document.querySelector("form")
const dateTitle = document.querySelector("#date")
const bgImg = document.querySelector("#img")
const searchInput =document.querySelector("#searchInput").value
const addCity = document.querySelector(".addCity")


let dateOn = new Date()
let dateLocale = dateOn.toLocaleString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
})
dateTitle.innerHTML = dateLocale;
console.log(dateLocale)





const clearTab = ["media/clear/clear1.jpg", "media/clear/clear2.jpg", "media/clear/clear3.jpg", "media/clear/clear4.jpg", "media/clear/clear5.jpg"]
const cloudyTab = ["media/cloudy/cloud1.jpg", "media/cloudy/cloud2.jpg", "media/cloudy/cloud3.png", "media/cloudy/cloud4.jpg", "media/cloudy/cloud5.png", "media/cloudy/cloud6.jpg", "media/cloudy/cloud7.jpg", "media/cloudy/cloud8.jpg", "media/cloudy/cloud9.jpg", "media/cloudy/cloud10.jpg", "media/cloudy/cloud11.jpg", "media/cloudy/cloudy12.jpg", "media/cloudy/couvert.jpg",]
const mistTab = ["media/mist/mist1.jpg", "media/mist/mist2.jpg", "media/mist/mist3.jpg", "media/mist/mist4.jpg", "media/mist/mist5.png", "media/mist/mist6.jpg" ]
const rainTab = ["media/rain/rain.jpg", "media/rain/rain2.jpg", "media/rain/rain3.png", "media/rain/rain4.jpg", "media/rain/rain5.jpg",  "media/rain/rain6.jpg",  "media/rain/rain7.jpg",  "media/rain/rain8.jpg",  "media/rain/rain9.png",  "media/rain/rain10.jpg", "media/drizzle/drizzle1.jpg", "media/drizzle/drizzle2.jpg"]
const snowTab = ["media/snow/snow1.jpg"]
const thunderTab = ["media/thunder/thunder1.jpg", "media/thunder/thunder2.jpg", "media/thunder/thunder3.jpg", "media/thunder/thunder4.jpg", "media/thunder/thunder5.jpg", "media/thunder/thunder6.jpg"]












 async function main(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2494dab6c29b86a1f70f0387f7411af4&units=metric&lang=fr`


   let weather = await fetch(url)
    
    .then(resultat => resultat.json())
    .then((data)=> {
        const name = data.name
    const temperature = data.main.temp
    const condition = data.weather[0].main
    const description = data.weather[0].description

        console.log(name)
        console.log(temperature)
        console.log(description)
        console.log(condition)


    nameCity.innerHTML = `${city}`;
    temp.innerHTML = `${temperature}`
    conditions.innerHTML = `${description}`


let nbclear = Math.round(Math.random()* clearTab.length)
let nbcloudy = Math.round(Math.random()* cloudyTab.length)
let nbrain = Math.round(Math.random()* rainTab.length)
let nbmist = Math.round(Math.random()* mistTab.length)
let nbsnow = Math.round(Math.random()* snowTab.length)
let nbthunder = Math.round(Math.random()* thunderTab.length)
console.log(nbcloudy)

    if(condition ==='Rain'){
        iconWeather.innerHTML = '<i class="wi wi-rain"></i>'
        bgImg.setAttribute("src", rainTab[nbrain] )
    }

    else if(condition === 'Drizzle'){
        iconWeather.innerHTML ='<i class="wi wi-rain-mix"></i>'
        bgImg.setAttribute("src", rainTab[nbrain] )
    }
    else if(condition === 'Snow'){
        iconWeather.innerHTML ='<i class="wi wi-snow"></i>'
        bgImg.setAttribute("src", snowTab[nbsnow] )
    }
    else if(condition === 'Clear'){
        iconWeather.innerHTML ='<i class="wi wi-day-sunny"></i>'
        bgImg.setAttribute("src", clearTab[nbclear] )
    }
    else if(condition === 'Clouds'){
        iconWeather.innerHTML ='<i class="wi wi-cloudy"></i>'
        bgImg.setAttribute("src", cloudyTab[nbcloudy])
    }
    else if(condition === 'Fog'){
        iconWeather.innerHTML ='<i class="wi wi-windy"></i>'
        bgImg.setAttribute("src", mistTab[nbmist])
    }
    else if(condition === 'Mist'){
        iconWeather.innerHTML ='<i class="wi wi-windy"></i>'
        bgImg.setAttribute("src", mistTab[nbmist])
    }
    else if(condition === 'Thunderstorm'){
        iconWeather.innerHTML ='<i class="wi wi-thunderstorm"></i>'
        bgImg.setAttribute("src", thunderTab[nbthunder])
    }
    else{
        iconWeather.innerHTML ='<i class="wi wi-thermometer"></i>'
        bgImg.setAttribute("src", thunderTab[nbthunder])
    }

    })


    bgImg.classList.toggle("zoomImg")


   addCity.addEventListener('click', ()=>{
    formCity.classList.add("active")
    console.log("ok")
   }) 

formCity.addEventListener("submit", function(e){
    e.preventDefault()
    let ville = document.querySelector("#searchInput").value
    formCity.classList.remove("active")
    bgImg.classList.toggle("zoomImg")
    

    
    
    
    main(ville)
    

})

}



main("Sucy-en-Brie")





































