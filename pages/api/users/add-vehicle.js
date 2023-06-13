import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: AddVehicle
});

async function AddVehicle(req, res) {
    await usersRepo.useraddvehicle(req.body);
    return res.status(200).json({});
}