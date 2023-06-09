import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';
import { async } from 'rxjs';
import { alertService } from '@/services';

const { serverRuntimeConfig } = getConfig();

const User = db.User;
const OwnTracking = db.OwnTracking
const TeamTracking = db.TeamTracking
const UserVehicleInfo = db.UserVehicleInfo
const UserTripInfo = db.UserTripInfo
const UserExpenseInfo = db.UserExpenseInfo
export const usersRepo = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    forgotPassword,
    resetpassword,
    userowntracking,
    userteamtracking,
    validateresetroken,
    delete: _delete,
    editprofile,
    useraddvehicle,
    useraddtrip,
    useraddexpense,
};

async function authenticate({ email, password }) {
    const user = await User.findOne({ email });

    if (!(user && bcrypt.compareSync(password, user.hash))) {
        alertService.error('Email or password is incorrect');
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

async function editprofile(params)
{
    //console.log(params.data)
    const user = await User.findOne({ _id: params.id });
    if (!user) return "User Not Found";
    await User.updateOne(
        { _id: params.id },
        { $set: { firstName: params.firstName, lastName: params.lastName, companyName: params.companyName, phoneNumber: params.phoneNumber, profileImage: params.profileImage } }
    );
    return params.profileImage;
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

async function userowntracking(params) {

    const ownTracking = new OwnTracking(params);
    await ownTracking.save();

}

async function userteamtracking(params){
    const teamTracking = new TeamTracking(params);
    await teamTracking.save();  
}

async function useraddvehicle(params){
    if(params.vehicleDefault == true || params.vehicleDefault == 'true')
    {
        await UserVehicleInfo.updateOne(
            { userId: params.userId },
            { $set: { vehicleDefault: 'false' } }
        );       
    }
    const UserAddVehicle = new UserVehicleInfo(params);
    await UserAddVehicle.save();
}

async function useraddtrip(params){
    const UserTrip = new UserTripInfo(params);
    await UserTrip.save();
}

async function useraddexpense(params){
    const UserExpense = new UserExpenseInfo(params);
    await UserExpense.save();
}