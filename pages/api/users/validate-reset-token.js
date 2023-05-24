import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: validateResetToken
});

async function validateResetToken(req, res) {
    const user = await usersRepo.validateresetroken(req.body);
    return res.status(200).json(user);
}