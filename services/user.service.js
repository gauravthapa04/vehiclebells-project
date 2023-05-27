import { BehaviorSubject, async } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import { fetchWrapper } from 'helpers';
import { alertService } from './alert.service';

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user')));


export const userService = {
    user: userSubject.asObservable(),
    get userValue() { return userSubject.value },
    login,
    logout,
    register,
    forgotpassword,
    resetPassword,
    OwnTracking,
    validateResetToken,
    getAll,
    getById,
    update,
    delete: _delete
};

async function login(email, password) {
    const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { email, password });

    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
}

async function forgotpassword(email) {

    const user = await fetchWrapper.post(`${baseUrl}/forgotpassword`, email);
       //create reset token that expires after 24 hours
        user.resetToken = new Date().getTime().toString();
        user.resetTokenExpires = new Date(Date.now() + 24*60*60*1000).toISOString();
        localStorage.setItem('user', JSON.stringify(user));
        setTimeout(() => {
            const resetUrl = `${location.origin}/account/reset-password?token=${user.resetToken}`;
            alertService.info('<h4>Reset Password Email</h4><p>Please click the below link to reset your password, the link will be valid for 1 day:</p><p><a href="'+resetUrl+'">"'+resetUrl+'"</a></p><div><strong>NOTE:</strong> The fake backend displayed this "email" so you can test without an api. A real backend would send a real email.</div>', { autoClose: false });
        }, 1000);
}

async function resetPassword(password) {

        let users = JSON.parse(localStorage.getItem('user')) || [];
        let id = users.id;
        return await fetchWrapper.put(`${baseUrl}/reset-password`, {id, password});
    }

function validateResetToken(token) {
    let users = JSON.parse(localStorage.getItem('user')) || [];
    let resetToken = users.resetToken;
    let resetTokenExpires = users.resetTokenExpires;
    return fetchWrapper.post(`${baseUrl}/validate-reset-token`, { token, resetToken, resetTokenExpires});
}

function logout() {
    alertService.clear();
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem('user');
    userSubject.next(null);
    Router.push('/account/login');
}

async function register(user) {
    await fetchWrapper.post(`${baseUrl}/register`, user);
}

async function getAll() {
    return await fetchWrapper.get(baseUrl);
}

async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);

    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
        // update local storage
        const user = { ...userSubject.value, ...params };
        localStorage.setItem('user', JSON.stringify(user));

        // publish updated user to subscribers
        userSubject.next(user);
    }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper.delete(`${baseUrl}/${id}`);

    // auto logout if the logged in user deleted their own record
    if (id === userSubject.value.id) {
        logout();
    }
}

async function OwnTracking(Formdata){
    return await fetchWrapper.post(`${baseUrl}/own-tracking`, Formdata); 
}