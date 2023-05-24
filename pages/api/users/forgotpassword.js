import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: forgotpassword
});

async function forgotpassword(req, res) {
    const user = await usersRepo.forgotPassword(req.body);
    return res.status(200).json(user);
}