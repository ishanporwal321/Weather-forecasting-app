const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static("Public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + query +"&cnt=3&units=metric&appid=ff4d32dbb6b503dd7214a891b016672a";

  https.get(url, function(response) {
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp1 = weatherData.list[0].main.temp;
      const icon1 = weatherData.list[0].weather[0].icon;
      const imageURL1 = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png" ;
      const temp2 = weatherData.list[1].main.temp;
      const icon2 = weatherData.list[1].weather[0].icon;
      const imageURL2 = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png" ;
      const temp3 = weatherData.list[2].main.temp;
      const icon3 = weatherData.list[2].weather[0].icon;
      const imageURL3 = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png" ;


        res.write("<h1>The temperature in " +query+ " is " + temp1 + " degrees celcius.</h1>");
        res.write("The weather is currently " + weatherData.list[0].weather[0].description);
        res.write("<img src=" + imageURL1 + ">");
        res.write("")
        res.write("<h1>The temperature after 3 hours in " +query+ " will be  " + temp2 + " degrees celcius.</h1>");
        res.write("The weather after 3 hours will be " + weatherData.list[1].weather[0].description);
        res.write("<img src=" + imageURL2 + ">");
        res.write("")
        res.write("<h1>The temperature after 6 hours in " +query+ " will be " + temp3 + " degrees celcius.</h1>");
        res.write("The weather after 6 hours will be " + weatherData.list[2].weather[0].description);
        res.write("<img src=" + imageURL3 + ">");
        res.write("")
        res.send();
      });
    });
  })


app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
