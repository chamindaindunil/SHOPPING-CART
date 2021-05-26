var Product = require('../models/product');

var mongoose = require('mongoose');
const { exists } = require('../models/product');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product({
        imagePath: 'https://gidofgames.com/uploads/posts/2017-10/1507925155_poster-gothic-2.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game !!!!!!!',
        price: 710.00
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/716mcbaBxIL._SL1151_.jpg',
        title: 'Minecraft Video Game',
        description: 'Now that is super awesome!',
        price: 1500.00
    }),
    new Product({
        imagePath: 'https://cdn-prod.scalefast.com/public/assets/user/122595/image/5243deb55a7ee9587ad2db9298e96ca5.jpg',
        title: 'Dark Souls 3 Video Game',
        description: 'I died!',
        price: 560.00
    }),
    new Product({
        imagePath: 'https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_1x-0.jpg',
        title: 'Free Fire Video Game',
        description: 'I Shout!',
        price: 1600.00
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Call_of_Duty_-_Infinite_Warfare_%28promo_image%29.jpg',
        title: 'Call of Duty Video Game',
        description: 'Infinite Warfare underperformed!',
        price: 620.00
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

    