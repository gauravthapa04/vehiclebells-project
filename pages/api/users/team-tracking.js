import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: TeamTracking
});

async function TeamTracking(req, res) {
    await usersRepo.userteamtracking(req.body);
    return res.status(200).json(true);
}