import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: AddTrip
});

async function AddTrip(req, res) {
    await usersRepo.useraddtrip(req.body);
    return res.status(200).json({});
}