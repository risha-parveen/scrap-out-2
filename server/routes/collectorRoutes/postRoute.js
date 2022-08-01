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

router.post('/add_products',auth,async(req,res)=>{
  category=req.body.category
  item=req.body.item
  price = req.body.price 
  try{
    result=await product_db.find({shopname:req.collector.shopname})
    console.log(result[0].shopname)
    console.log(Object.keys(result[0].toJSON()))
    for(let i=0;i<Object.keys(result[0].toJSON()).length;i++){
      key=Object.keys(result[0].toJSON())[i]
      if(key===category){
        console.log(key)
        console.log(typeof result[0][key])
        data=result[0][key]
        keyVal={}
        keyVal[item]=price
        result[0][key].push(keyVal)
        console.log(result[0])

        try{
          inserted=await product_db.replaceOne({shopname:req.collector.shopname},result[0])
          res.status(200).send({
            action:"successfully inserted product",
            success:true
          })
        }
        catch(err){
          console.log(err)
          res.status(500).send({
            action:"something went wrong",
            success:false
          })
        }
      }
    }   
  }catch(err){
    console.log(err)
    res.status(500).send({
      action:"something went wrong",
      success:false
    })
  }
})

module.exports=router;