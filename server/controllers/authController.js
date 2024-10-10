import e from "express";
import user from "../Model/user.js";
import jwt from "jsonwebtoken";

const test = (req, res) => {
    res.json("test is working");
}

const registeruser = async (req, res) => {
    try {
        // validation 
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ error: "please fill all the fields" });
        }
        if (password.length < 6) {
            return res.json({ error: "password should be at least 6 characters" });
        }
        // check email
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.json({ error: "email already exists" });
        }

        const newUser = new user({
            name,
            email,
            password
        });
        await newUser.save();

        return res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ error: "please fill all the fields" });
        }
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.json({ error: "email does not exist" });
        }
        if (password !== existingUser.password) {
            return res.json({ error: "Invalid password" });
        }

        jwt.sign({
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email
        }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Internal server error" });
            }
            res.cookie("token", token).json({ message: "Login successful", user: existingUser });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const profile = (req, res) => {
    const {token} = req.cookies;
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {

        },(err, user) => {
            if(err){
                return res.status(401).json({error: "Unauthorized"});
            }
            return res.json(user);
        });
    }else{
        res.json(null);
    }
}

export { test, registeruser, loginuser,profile };
