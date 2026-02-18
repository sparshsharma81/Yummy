import User from '../model/User.js';

import jwt from 'jsonwebtoken';
import TryCatch from '../middlewares/trycatch.js';

export const loginUser = TryCatch(async(req , res)=>{
    //we need not to define the type because we have defined it in middleware folder 
     const {name, email , picture} = req.body;
        let user = await User.findOne({email}); 
        //EMAIL IS UNIQUE..SO WE FIND USER BY EMAIL

        user ??= await User.create({
            name,
            email,
            image : picture,
        });

        const token = jwt.sign({user},process.env.JWT_SECRET as string, {expiresIn : "2d"});
        res.status(200).json({
            message: "Login Successfull",
            token,
            user,
        });

}
);

const allowedRole = ["customer","rider","seller"] as const;
//the reason why we have given this is ....user can not select the role as admin

type Role = (typeof allowedRole)[number]; //we have given this to restrict the role to only these three roles

export const addUserRole = TryCatch(async(req,res)=>{
   if(!req.user?._id){
    return res
   }
})