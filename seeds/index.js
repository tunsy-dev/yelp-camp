const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 400; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '5fb814ea9f73c760fc11796b',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident saepe recusandae praesentium aut nisi aliquam, repellat at optio veritatis facere animi magnam doloribus ipsa consectetur. Beatae repellat ullam facere?',
            price,
            geometry: {
                type: "Point",
                coordinates: [ 
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                 ]
              },
            images: [
                {
                  url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1606253297/YelpCamp/letcubmkbsfcvkn0md3r.jpg',
                  filename: 'YelpCamp/letcubmkbsfcvkn0md3r'
                },
                {
                  url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1606253297/YelpCamp/kmtkr3gppmtwenbtadms.jpg',
                  filename: 'YelpCamp/kmtkr3gppmtwenbtadms'
                }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})