# Weather-forecasting-app
A Project by Ishan Porwal.
This is an app which shows temperature and weather forecast of the complete day.
WORKING OF APP :-
In the home page the user have to enter the name of the city of which he/she wants to check the temperature and weather of for that day.There are three bold lines present in the subsequent html page which shows the temperature at that current time, 3 hours later, & 6 hours later respectively.There are photos of the weather present for different weathers with a short description. 
BACKEND DEVELOPMENT :-
I used the node.js and express.js to write the backend of the app. I used express.static to add css to homepage of the web application.
**I have used port 3000 to host the app on my local system.**
I took the api from https://openweathermap.org/ and used cnt=3 property to add the timestamps for 3 hours which enables the browser to tell the temperature at an interval of 3 hours for three time stamps, for returning the weather after user clicks the check button on the home page.  
