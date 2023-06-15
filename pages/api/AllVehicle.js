import { db } from "@/helpers/api";
const UserVehicleInfo = db.UserVehicleInfo

export default async function handler(req, res) {
    const { id } = req.query;
    const vehicleinfo = await UserVehicleInfo.find({ userId: id });
    //res.status(200).json(vehicleinfo);
    if(vehicleinfo)
    {
        //const data = JSON.parse(vehicleinfo)
        res.status(200).json(vehicleinfo);
    }
}