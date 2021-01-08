# yelp-camp

#### Description: 
A Full stack web application developed as part of the Web Development bootcamp by Colt Steele.
I have then developed upon this by adding more features and functionality to the application.
Yelp camp is an application for a fictional start up that allows users to add campgrounds that can then be reviewed and rated by other users. 

The application is built using a MongoDB, Express, Node.js stack. Utilizing RESTful architecture. 

A working demonstration of the application can be found [here](https://dry-anchorage-86124.herokuapp.com/).


#### Additional features added:
•	A responsive banner header that is created dependent on the number of photos associated with a campground. 

•	A generated responsive grid photo gallery with light box to view the photos that are associated with each campground.

•	A Fuzzy search, search bar. 

•	Server-side pagination of the campgrounds. If data set was larger this would solve load time issues that could otherwise develop if the application was scaled.

•	Random campground button on the home page that takes you to a randomly selected campground. 


#### Features to be added:  
•	Map overlay to specify click to zoom on map.

•	Enable sorting of the campgrounds by rating.

•	Rating of campground is currently generated through a function I wrote in the seeds file when seeding the database. This feature needs to be added still so that the rating comes from the mean of the reviews. 

•	User Profile Page.
