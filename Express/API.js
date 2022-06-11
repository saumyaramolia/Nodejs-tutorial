// API - JSON route

/* This responses in the form of a JSON 
    NOTES : 
    1. Always add [] then add objects in them.
    2. Always add status
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json([{name: 'saumya', id:1},{name:'ashay', id:2}]);
})

app.listen(5000, () => {
    console.log('listening');
})

// This is how we can get data from another files objects. 
const express = require('express');
const app1 = express();

const {products} = require('./data')

app1.get('/', (req, res) => {
    res.status(200).json(products);
})

app.listen(5000, () => {
    console.log('listening');
})

// some other examples 
const express = require('express');
const app3 = express();

const {products} = require('./Express/data')

app3.get('/', (req, res) => {
    res.status(200).send('<h1>Products page</h1> <a href="/api/products">Products</a>')
})

app3.get('/api/products', (req, res) => {
    const newProduct = products.map((product)=>{            //used .map() of js
        const {id, name, price} =product;
        return {id, name, price}
    })
    
    res.send(newProduct)
})

app3.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => {product.id === 1})   //used .find() of js 
    res.send(singleProduct)
})

app3.listen(5000, () => {
    console.log('listening')
})

