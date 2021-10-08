function getWeatherData(){
    var cityName = document.getElementById('city_name').value;
    axios.get('http://api.weatherapi.com/v1/forecast.json?key=f2ce95e7710a4f83a45101319210110&q='+cityName+'&days=2&aqi=no&alerts=no')
    .then((response) => {
        console.log(response.data);

        let city_name = response.data.location.name;
        let country_name = response.data.location.country;
        let lastUpdatedDate = response.data.current.last_updated;
        let currentTemp = response.data.current.temp_c;
        let imageTemp = response.data.current.condition.icon
        let tempText = response.data.current.condition.text;

        document.getElementById('location').innerText = city_name + " - " + country_name;
        document.getElementById('last_updt').innerText = lastUpdatedDate;
        document.getElementById('current_temp').innerHTML = currentTemp + '<span> &#8451; </span>';
        document.getElementById('icon').innerHTML = `<img src= ${imageTemp}>`;
        document.getElementById('current_weather').innerHTML = tempText;
    })
}