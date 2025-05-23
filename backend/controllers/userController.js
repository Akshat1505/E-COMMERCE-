// Route for user login
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/UserModel.js";

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req,res) =>{
    try {
        const {email , password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false , message: 'User Doesnt Exists'})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true , token})
        }else{
            res.json({success:false, message: "Invalid Credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false , message: error.message})
    }
}

// Route for user Register

const registerUser = async(req,res)=>{
    try {
        
        const {name , email, password } = req.body;

        // Checking User Already Exists or Not

        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false , message: 'User Already Exists'})
        }

        // validating email format & strong pass
        if (!validator.isEmail(email)) {
            return res.json({success:false , message: 'Please Enter A Valid Email'})
        } 
        if (password.length < 8 ) {
            return res.json({success:false , message: 'Please Make A Strong Password'})
        }
        // hashing user pass
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPass
        })
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true ,token})

    } catch (error) {
        console.log(error);
        res.json({success:false , message: error.message})
        
    }
}

// Route for Admin Login

const adminLogin = async(req,res)=>{

}
export { loginUser, registerUser , adminLogin}