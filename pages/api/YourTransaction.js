import { db } from "@/helpers/api";
const UserExpensesInfo = db.UserExpenseInfo

export default async function handler(req, res) {
    const { id } = req.query;
    const tripinfo = await UserExpensesInfo.find({ userId: id });
    if(tripinfo)
    {
        res.status(200).json(tripinfo);
    }
}