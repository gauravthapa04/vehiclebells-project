import { connectToMongoDB } from "../../lib/mongodb";
import User from "../../models/UserModel"
import { hash } from "bcryptjs"
import mongoose from "mongoose"

const handler = async (req, res) => {

    connectToMongoDB().catch(err => res.json(err))

    //res.status(200).send({msg : "Hi Test"})

    if(req.method !== "POST"){
        res.status(405).send({msg : "Only post request are allowed"})
        return
    }
    const {email, password, first_name, last_name, company} = req.body
    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(409).json({ error: "User Already exists" })
    }
    else{
        if (password.length < 6)
                return res.status(409).json({ error: "Password should be 6 characters long" })
        const hashedPassword = await hash(password, 12)
        User.create({
            email,
            password: hashedPassword,
            first_name,
            last_name,
            company          
        }).then((data)=>{
            console.log(data);
            res.status(201).send(data)
        })
    }
}
export default handler