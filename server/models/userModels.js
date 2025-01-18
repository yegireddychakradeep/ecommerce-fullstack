const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        userName :
        {
            type: String,
            required : true,
        },
        email:
        {
            type:String,
            required : true,
        },
        password :
        {
            type:String,
            required : true,
        },
        role : 
        {
            type : Number,
            default : 0
        },
        cart:
        {
            type:Array,
            default : []
        },

    },    
  {
        timeStamps: true
  }
        
    
)


module.exports =  mongoose.model('Users',userSchema);