import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    put: EditProfile
});

async function EditProfile(req, res) {
    const user = await usersRepo.editprofile(req.body);
    return res.status(200).json(user);
}