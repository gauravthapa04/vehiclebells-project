import { db } from "@/helpers/api";
const UserTripsInfo = db.UserTripInfo

export default async function handler(req, res) {
    const { id } = req.query;
    const tripinfo = await UserTripsInfo.find({ userId: id });
    if(tripinfo)
    {
        res.status(200).json(tripinfo);
    }
}