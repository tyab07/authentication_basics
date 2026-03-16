import User from "../models/userSchema.js";   
import crypto from "crypto";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({path:"./config/config.env"  });


export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }   

        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex"); 
        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        const AccessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1m" });   


        res.status(201).json({ message: "User registered successfully",
            user: {
                username: newUser.username,
                email: newUser.email,   

                 }, token });

    }
     catch (error) {
        console.error("Error registering u ser:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}   

export async function getMe(req, res) {
    
    const token  = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        res.json({ user });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(401).json({ message: "Invalid token" });
    }       


}

