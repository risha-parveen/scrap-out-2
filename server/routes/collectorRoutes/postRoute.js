const express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/collectorAuth");

const router=express.Router()

try {
  mongoose.connect("mongodb://127.0.0.1:27017/ScrapOut", {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

const collector_db=require('../../models/collector/collector_schema')
const list_db=require('../../models/collector/list_schema')
const product_db=require('../../models/collector/product_schema')
const order_db=require('../../models/user/order_schema')

router.post('/confirm_order',auth,async(req,res)=>{
  try{
    result=await order_db.find({})
  }catch(err){
    console.log(err)
    res.status(500).send({
      action:"something went wrong",
      success:false
    })
  }
})

module.exports=router;