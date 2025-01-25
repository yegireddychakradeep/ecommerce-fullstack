const Users = require("../models/userModels");

const userCtrl =
  {
  register:async (req,res)=>
  {
    try{
         
         const {userName,email,password} = req.body;
         const user = await Users.findOne({email});
          
            if(user) return res.status(400).json({msg:"user email already exists"});
            
            if(password.length < 6)
            {
                return res.status(400).json({msg:"password should be 6 characters"});
            }

            const newUser = new Users(
                {
                   userName,email,password
                }
            )
            // save user
             await  newUser.save();

            res.json({msg:"request sucess"});
            
    }
    catch(err)
    {   
        return res.status(500).json({ msg: err.message })
    }
  }
}
module.exports = userCtrl;