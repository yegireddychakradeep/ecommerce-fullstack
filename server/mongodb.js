 
  const  dbConnect = ()=>
 {

 
 const mongoose = require('mongoose');


 const URI = process.env.MONGODB_URL;
mongoose.connect(URI,
    {
        // deprecated code not necessary
    // useCreateIndex:true,
    // useFindAndModify:false,
    // useNewUrlParser:true,
    // useUnifiedTopology:true

    }

).then(()=>
    {
        console.log("connected db")
    }).catch((err)=>
    
{
  console.log("error in connecting to mongodb");
})
 }
 module.exports = dbConnect;