import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();

const User = db.User;

export const usersRepo = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });

    if (!(user && bcrypt.compareSync(password, user.hash))) {
        throw 'Email or password is incorrect';
    }

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' });

    return {
        ...user.toJSON(),
        token
    };
}

// function forgotPassword() {
//     const { email } = body();
//     const user = User.find(x => x.email === email);
    
//     // always return ok() response to prevent email enumeration
//     if (!user) return ok();
    
//     // create reset token that expires after 24 hours
//     user.resetToken = new Date().getTime().toString();
//     user.resetTokenExpires = new Date(Date.now() + 24*60*60*1000).toISOString();
//     localStorage.setItem(usersKey, JSON.stringify(users));

//     // display password reset email in alert
//     setTimeout(() => {
//         const resetUrl = `${location.origin}/account/reset-password?token=${user.resetToken}`;
//         alertService.info(`
//             <h4>Reset Password Email</h4>
//             <p>Please click the below link to reset your password, the link will be valid for 1 day:</p>
//             <p><a href="${resetUrl}">${resetUrl}</a></p>
//             <div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>
//         `, { autoClose: false });
//     }, 1000);

//     return ok();
// }

async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function create(params) {
    // validate
    if (await User.findOne({ email: params.email })) {
        throw 'Email "' + params.email + '" is already taken';
    }

    const user = new User(params);

    // hash password
    if (params.password) {
        user.hash = bcrypt.hashSync(params.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, params) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== params.email && await User.findOne({ email: params.email })) {
        throw 'Email "' + params.email + '" is already taken';
    }

    // hash password if it was entered
    if (params.password) {
        params.hash = bcrypt.hashSync(params.password, 10);
    }

    // copy params properties to user
    Object.assign(user, params);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}