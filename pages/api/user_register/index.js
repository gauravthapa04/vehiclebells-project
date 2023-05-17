import dbConn from "@/lib/dbConn";
import User from "@/models/User";
import {NextResponse} from "next/server";
import { hash } from "bcryptjs"

export async function POST(req, res)
{
    try{
        const {first_name, last_name, company, email, password} = await req.body;

        await dbConn();
        const userExists = await User.findOne({ email })
        if (userExists) {
            return NextResponse.json(
                { message: "User Already exists" },
                { status: 409 }
            )
        }else{
            if(password.length < 6)
            {
                return NextResponse.json(
                    { message: "Password should be 6 characters long" },
                    { status: 409 }
                )                
            }
            else{
                const hashedPassword = await hash(password, 12)
                await User.create({
                    first_name,
                    last_name,
                    company,
                    email,
                    password: hashedPassword,
                });

                return NextResponse.json({
                    message:"User Create successfully!"
                }, {
                    status: 200
                })
            }
        }
    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}