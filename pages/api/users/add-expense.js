import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: AddExpense
});

async function AddExpense(req, res) {
    await usersRepo.useraddexpense(req.body);
    return res.status(200).json({});
}