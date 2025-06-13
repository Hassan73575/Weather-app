document.getElementById("btn").addEventListener("click",  async function() { 
    let usinp = document.getElementById("input").value;
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${usinp}&appid=3a7c219a70a130d5a0bee11ecbad7e73`)
    const res = await data.json();
    if (res.cod == 404) {
        alert("Please enter a valid city name.");
    }else{
        document.getElementById("degree").innerHTML = Math.round(res.main.temp)-273 + "°C";
        document.getElementById("degree1").innerHTML = Math.round(res.main.temp)-273 + "°C";
        document.getElementById("wind").innerHTML = Math.round(res.wind.speed) + "km/h";
        document.getElementById("humidity").innerHTML = `${res.main.humidity}` + "%";
        document.getElementById("location").innerHTML = `${res.name}`;
        document.getElementById("cloud").innerHTML=`${res.clouds.all}` + "%";
    
    };
});
async function getWeather() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=3a7c219a70a130d5a0bee11ecbad7e73`)
    const res = await data.json();

    document.getElementById("degree").innerHTML = Math.round(res.main.temp)-273 + "°C";
    document.getElementById("degree1").innerHTML = Math.round(res.main.temp)-273 + "°C";
    document.getElementById("wind").innerHTML = Math.round(res.wind.speed) + "km/h";
    document.getElementById("humidity").innerHTML = `${res.main.humidity}` + "%";
    document.getElementById("location").innerHTML = `${res.name}`;
    document.getElementById("cloud").innerHTML=`${res.clouds.all}` + "%";
}
getWeather();

function changeImage() {
  const img = document.getElementById("timeImage");
  const hour = new Date().getHours();
  let imagePath = "";

  if (hour >= 5 && hour < 12) {
    imagePath = "106.jpg";
  } else if (hour >= 9 && hour < 17) {
    imagePath = "2716.jpg";
  } else if (hour >= 17 && hour < 20) {
    imagePath = "3261.jpg";
  } else {
    imagePath = "2151700741.jpg";
  }

  img.src = imagePath;
}
changeImage();