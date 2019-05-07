// let des;
// let temp;
// let icon;
// $(document).ready(function () {
//     $("#getWeather2").click(function () {
//         $.get(
//             "http://api.openweathermap.org/data/2.5/weather?q=Dusseldorf,DE&APPID=bab672808d995e00419525a12207abe7", function(data, status){
//             console.log('Data:' + JSON.stringify(data) + "\nstatus:" + status);  
//             des  = data['weather'][0] ['description'];
//             temp = data['main'] ['temp'];
//             icon = data['weather'][0] ['icon'];
//             console.log(des, temp, icon);


//             document.getElementById('myDiv').innerHTML = des + temp + icon;
//         });
//     }
//     );

// });



$(document).ready(function(){
    $('#getWeather').click(function(){
    var city = $("#city").val();
    var key = 'bab672808d995e00419525a12207abe7';
    
    $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    datatype: 'json',
    type: 'GET',
    data: {q: city, appid: key, units: 'metric'},
    
    success:function(data)
    {
    var wf = '';
    $.each(data.weather, function(index, val){
    wf += '<p><b>' + data.name + " " + "</b><img src=" + "http://openweathermap.org/img/w/" + data['weather'][0].icon + ".png></p>" + 
    data.main.temp + '&deg;c' + ' | ' + val.main + "," + 
    val.description
    
    });
    $("#myDiv").html(wf);
    }
    });
    });
});