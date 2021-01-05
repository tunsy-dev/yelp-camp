const mongoose = require('mongoose');
const cities = require('./citiesuk');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb+srv://tdb8976:ZZrUJwkqZGKxDzsP@cluster0.bi9pn.mongodb.net/yelp-camp?retryWrites=true&w=majority', {
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
        const random1000 = Math.floor(Math.random() * 400);
        const price = Math.floor(Math.random() * 20) + 10;
        const rating = Math.floor(Math.random() * 5) + 1;
        const camp = new Campground({
            author: '5fcf9e5d8171231de5501bf8',
            location: `${cities[random1000].city}, ${cities[random1000].country}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et eleifend turpis, eu commodo neque. Quisque semper, libero id rhoncus viverra, nisi dolor mattis magna, posuere luctus augue odio a velit. Pellentesque maximus sem a metus posuere, non egestas purus fringilla. Vivamus non viverra felis. Ut vel sem vulputate, egestas dolor nec, auctor sem. Phasellus elementum, est a auctor hendrerit, neque tellus euismod erat, vel dignissim ligula sem eget mi. Ut egestas nulla vel elementum aliquam.',
            price,
            geometry: {
                type: "Point",
                coordinates: [ 
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                 ]
              },
            rating, 
            images: [
                {
                  url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1609281316/YelpCamp/ipvxagy8nysuspkvgsdv.jpg',
                  filename: 'YelpCamp/zsvg6lkoyv9tzgaa3hmo'
                },
                {
                  url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1607799001/YelpCamp/hxwxzrustmnzkyqoyq8b.jpg',
                  filename: 'YelpCamp/v7mkmi48i1qni3h0qfgp'
                },
                {
                    url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1607799000/YelpCamp/ypgrcniyetszdydlcs3o.jpg',
                    filename: 'YelpCamp/o1qtoy7i0tvyt6lvfamo'
                  },
                  {
                    url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1607524850/YelpCamp/jpnjylox5doba6qyxojn.jpg',
                    filename: 'YelpCamp/zsvg6lkoyv9tzgaa3hmo'
                  },
                  {
                    url: 'https://res.cloudinary.com/tomscloudnamez/image/upload/v1607524849/YelpCamp/yxzlx9znlvenoduzypfk.jpg',
                    filename: 'YelpCamp/v7mkmi48i1qni3h0qfgp'
                  }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})