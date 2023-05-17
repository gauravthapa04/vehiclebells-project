import dbConnect from "@/lib/dbConn";
import User from "@/models/User";
import {NextResponse} from "next/server";
import { hash } from "bcryptjs"

const handler = async (req, res) => {
    dbConnect();
    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" })
    }
}

export default handler