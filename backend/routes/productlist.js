const router = require('express').Router();
let ProductList = require('../models/productlist.model');

router.route('/').get((req,res) => {
    ProductList.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const title = req.body.title;
    const img = req.body.img;
    const price = Number(req.body.price);
    const company = req.body.company;
    const info = req.body.info;
    const count_num = Number(req.body.count_num);
    const type = req.body.type;

    const newProduct = new ProductList({
        title,
        img,
        price,
        company,
        info ,
        count_num ,
        type ,
    });

    newProduct.save()
    .then(() => res.json('productlist added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;