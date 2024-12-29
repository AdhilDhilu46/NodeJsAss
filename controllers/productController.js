const store = require('../store');

const getAllProducts = (req, res,next) => {
    res.status(200).json({data:store});
};
const getparticularProduct = (req, res, next) => {
    console.log(req.params);

    const prodId = parseInt(req.params.id);
    let product = null;

    for (let i = 0; i < store.length; i++) {
        console.log(store[i].id, prodId);

        if (store[i].id === prodId) {
            product = store[i];
            break;
        }
    }

    res.status(200).json({ data: product });
};
const getdata = (req, res) => {
    console.log(req.query);
    res.status(200).json(store);
};

module.exports = {getAllProducts, getparticularProduct, getdata};