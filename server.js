const express = require('express');
// import express from 'express';
// import configViewEngine from './src/configs/viewEngine';
require('dotenv').config();
const config = require('./src/configs/viewEngine');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

console.log('>>> check port: ',port);

config(app);
// app.get('/hi', (req, res) => {
//   res.sendFile(path.join(__dirname, '/index.html'));
// })
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/manufacturerHomepage', (req, res) => {
  res.render('manufacturerHomePage.ejs')
})
app.get('/addProduct', (req, res) => {
  res.render('addProduct.ejs')
  })
app.get('/accountManufacturer', (req, res) => {
    res.render('accountManufacturer.ejs')
    })
app.get('/storeHomepage', (req, res) => {
    res.render('storeHomePage.ejs')
    })
app.get('/purchaseProduct', (req, res) => {
      res.render('purchaseProduct.ejs')
      })
app.get('/accountStore', (req, res) => {
    res.render('accountStore.ejs')
    })      
  // app.get('/block', (req, res) => {
  //   res.render('index3.ejs')
  // })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})