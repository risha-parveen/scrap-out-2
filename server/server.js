const express=require('express')
const mongoose=require('mongoose')
const app=express()
const fs=require('fs')
const userLoginRoute=require('./routes/userRoutes/loginRoute')
const expressMongoDb=require('express-mongo-db')
const collectorLoginRoute=require('./routes/collectorRoutes/loginRoute')
const userGetRoute=require('./routes/userRoutes/getRoute')
const collectorGetRoute=require('./routes/collectorRoutes/getRoute')
const userPostRoute=require('./routes/userRoutes/postRoute')
const collectorPostRoute=require('./routes/collectorRoutes/postRoute')
const collectorAuth=require('./middleware/collectorAuth')
//const auth=require('./middleware/userAuth')

try{
  mongoose.connect('mongodb://127.0.0.1:27017/ScrapOut',{useNewUrlParser:true})
}catch(err){
  console.log(err)
}

const user_db=require('./models/user/user_schema')
const collector_db=require('./models/collector/collector_schema')

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/userlogin',userLoginRoute);

app.use('/collectorlogin',collectorLoginRoute);

app.use('/user',userGetRoute)

app.use('/user/post',userPostRoute)

app.use('/collector',collectorGetRoute)

app.use('/collector/post',collectorPostRoute)

app.listen(5000,()=>{
  console.log('server listening')
})