const product = require('./models/index');
const connectDB = require('./config/db');
const productJson = require('./product.json')

const start = async () => {
    try {
        await connectDB();
        await product.create(productJson);
        console.log('Product created successfully');

    } catch (error) {
        console.log(error);
        
    }
};

start();