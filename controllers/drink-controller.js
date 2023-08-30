/*
    All imports and middleware
*/
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path');
app.use(express.json());
app.use(cors());
const DrinksModel = require('./models/drinks')
const OrdersModel = require('./models/orders')

require('dotenv').config()


mongoose.connect(
    ""
  );

app.get('/customers', async (req,res) => {
    try {
        const drinks = await DrinksModel.find();
        res.json({ success: true, drinks });
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Error fetching opportunities" });
      }
});

// Hosting images on the path /images
app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, './images', imageName); // Adjust the path accordingly
    res.sendFile(imagePath);
  });

  app.post('/orders', async (req, res) => {
    try {
      const { name, price, picture } = req.body;
  
      console.log(name, price, picture)

      // Send the new order information to the back end to be posted to the database
      const newOrder = new OrdersModel({
        name,
        price,
        picture
      });

       const savedOrder = await newOrder.save();
  
      res.json({ success: true, message: "Order placed successfully" });
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).json({ success: false, message: "Error placing order" });
    }
  });

  app.get('/orders', async (req,res) => {
    try {
      const orders = await OrdersModel.find()
      res.json({ success: true, orders });
    }
    catch {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Error fetching opportunities" });
    }
  })

  app.delete("/orders/:id", async (req, res) => {
    try {
      const orderId = req.params.id;
      await OrdersModel.findByIdAndDelete(orderId);
      res.json({ success: true, message: "Opportunity deleted" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Error deleting opportunity" });
    }
  });

app.listen(process.env.PORT || 3006, () => {
    console.log("Server is up and running");
});