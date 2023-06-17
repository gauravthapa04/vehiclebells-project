import { db } from "@/helpers/api";
const UserVehicleInfo = db.UserVehicleInfo

export default async function handler(req, res) {
    const { id } = req.query;
    const result = await UserVehicleInfo.find({ userId: id });
    res.status(200).json({ data: result });
}