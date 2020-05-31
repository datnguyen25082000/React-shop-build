const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: { type: String, required: true},
    img: { type: String, required: true},
    price: { type: Number, required: true},
    company: { type: String, required: true},
    info: { type: String, required: true},
    count_num: { type: Number, required: true},
    type: { type: String, required: true},
}, {
    timestamps: true,
});

const ProducList = mongoose.model('ProductList', productSchema);

module.exports = ProducList;