const mongoose = require('mongoose');
const Product = require('../../models/product');
let uri = "mongodb://localhost:27017/shopping-cart";
// let uri = "mongodb://shoppingcart:shoppingcart1234@cluster0-shard-00-00-tuwa5.mongodb.net:27017,cluster0-shard-00-01-tuwa5.mongodb.net:27017,cluster0-shard-00-02-tuwa5.mongodb.net:27017/shoppingcart?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const adminDelete = async (req, res) => {
    const idToDelete = req.params.id;
    await Product.deleteOne({ _id: idToDelete }).exec();
    res.redirect('/admin');
}

module.exports = adminDelete;