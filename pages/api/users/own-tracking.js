import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: OwnTracking
});

async function OwnTracking(req, res) {
    await usersRepo.userowntracking(req.body);
    return res.status(200).json(true);
}