import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    put: ResetPassword
});

async function ResetPassword(req, res) {
    const user = await usersRepo.resetpassword(req.body);
    return res.status(200).json(user);
}