import express from 'express';
import cors from 'cors';
import fs from 'fs';

// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');

const app = express();
const port = 3200;
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/banner', (req, res) => {
    const data = getData('./data/Banner.json');
    res.json(data);
})

app.get('/category', (req, res) => {
    const data = getData('./data/Category.json')
    res.json(data)
})

app.get('/product', (req, res) => {
    const data = getData('./data/Product.json')
    res.json(data)
})
app.get('/product/:id', (req, res) => {
    const data = findData(req.params.id)
    res.json(data)
})

app.listen(3200, ()=>{
    console.log(`Server is Online on localhost port: ${port}`)
})

const getData = (path)=> {
    const data = fs.readFileSync(path, 'utf8', (err, data)=> data)
    return JSON.parse(data)
}

const findData = (id)=> {
    const dataProduct = getData('./data/Product.json');
    const findProduct = dataProduct.find((data)=> data.id == parseInt(id));
    if(!findProduct){
        let dummy = [{
            "id" : 9999, 
            "brand" : "Data Tidak Ditemukan", 
            "price" : 0,
            "promo" : 0, 
            "category" : "null",
        }]
        return dummy;
    }
    return findProduct;
}