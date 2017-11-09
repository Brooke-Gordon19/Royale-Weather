// Default location (area code or city, state – in quotes)
var lc = "Los Angeles, CA";


// Really Simple Weather Plug-In Details

reallySimpleWeather.weather({
  wunderkey: '', // leave blank for Yahoo API
  location: 'Los Angeles, CA', //your location here, also works in lat/lon
  woeid: '', // "Where on Earth ID" optional alternative to location
  unit: 'f', // 'c' also works
  success: function(weather) {
    // sample data to display city and temperature
    html = '<main>';
    html += '<section class="top">';
    html += '<h1 class="wdata-01">'+weather.city+', '+weather.region+'<br>'+weather.country+'</h1>'; 
    html += '<h2 class="wdata-02">'+weather.temp+'°'+weather.units.temp+'</h2>';
    html += '<h3 class="wdata-03">'+weather.low+'°'+weather.units.temp+'</h3>'; 
    html += '<h4 class="wdata-04">'+weather.high+'°'+weather.units.temp+'</h4>';
    html += '<i class="icon icon-' + weather.code + '"></i>';
    html += '</section>';

    html += '<div class="middle">';
    html += '<h9 class="wdata-09">HUMIDITY <br> '+weather.humidity+'</h9>'; 
    html += '<h10 class="wdata-10">VISIBILITY <br> '+weather.visibility+'</h10>';
    html += '<h11 class="wdata-11">SUNRISE <br> '+weather.sunrise+'</h11>';
    html += '<h12 class="wdata-12">SUNSET <br> '+weather.sunset+'</h12>';
    html += '<h13 class="wdata-13">WIND SPEED <br> '+weather.wind.speed+' '+weather.units.speed+'</h12>';
    html += '</div class="middle">';
    html += '</section>';

    html += '<div class="bottom">';
    html += '<img src="img/JV.svg">'
    html += '</div class="bottom">';
    html += '</section>';
    html += '</main>';
	  document.getElementById('weather').innerHTML = html;
  },
  error: function(error) {
	  document.getElementById('weather').innerHTML = '<p>'+error+'</p>';
  }
});

