import Products from './model/product.model.js';
import categories from './model/categories.model.js';
import banners from './model/banners.model.js';
import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors())
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hi, You have connected to Server!!");
});

app.get("/products", (req, res) => {
  res.status(200).json(Products);
});

app.post("/addProduct",(req,res)=>{
  res.status(200).json({
    "response": "Success",
    "responseMessage": "Product added to cart successfully"
  })
})
    
app.get("/categories", (req, res) => {
  res.status(200).json(categories);
});

app.get("/banners", (req, res) => {
  res.status(200).json(banners);
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});