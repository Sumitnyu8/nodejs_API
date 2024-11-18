const product = require('../models/index');

const getAllProducts = async (req, res) => {
    res.status(200).json({
        msg: 'hii you got me'
    });
};

const getAllProductsTesting = async (req, res) => {
    const queryObject = {};
    const { company, name, sort, select, page, limit} = req.query;

    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    let result = product.find(queryObject);

    // Apply sorting if provided
    if (sort) {
        const sortValue = sort.split(',').join(' ');
        result = result.sort(sortValue);
    }
    if (select) {
        const selectValue = select.split(',').join(' ');
        result = result.select(selectValue);
    }
    if (page || limit) {
        const pagee = Number(page) || 1;
        const limitee = Number(limit) || 3;
        const skip = (pagee-1)*limitee;
        result = result.skip(skip).limit(limitee);
    }


    const myData = await result;
    res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
