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
    forgotPassword,
    resetpassword,
    validateresetroken,
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
        user.hash = bcrypt.hashSync(params.password, 10);
    }

    // // copy params properties to user
    Object.assign(user, params.password);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}

async function forgotPassword(params) {

    const user = await User.findOne({ email: params.email })
    //return user.email;
    if (!user) return "Error";
    return user;
}

async function resetpassword(params){
    //return params.id+'---'+params.password;
    const user = await User.findOne({ _id: params.id });

    if (!user) return "User Not Found";
    // hash password if it was entered
    if (params.password) {
        const password = bcrypt.hashSync(params.password, 10);

        // Update the user's password in the database
        await User.updateOne(
            { _id: params.id },
            { $set: { hash: password } }
        );

        //User.updateOne({ email: 'testbytecode1@gmail.com' }, { $set: { hash : password } });
        return 'ok';
    }

}

function validateresetroken(params) {
    //return new Date().toISOString() +'----'+ params.resetTokenExpires;
    if(params.resetToken == params.token && new Date().toISOString() < params.resetTokenExpires)
    {
        return true;
    }
    else{
        return 'Invalid token';
    }
}