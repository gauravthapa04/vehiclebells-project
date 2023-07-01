'use client';

import { BehaviorSubject, async } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import { useSession, signIn } from "next-auth/react"
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
    TeamTracking,
    validateResetToken,
    getAll,
    getById,
    update,
    delete: _delete,
    editprofile,
    Useraddvehicle,
    Useraddtrip,
    Useraddexpense,
};
async function login(email, password) {
    
    //const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { email, password });

    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    //userSubject.next(user);

    const LoginRes = await signIn("credentials", {
        redirect: false,
        email,
        password
    });
      if (LoginRes && !LoginRes.ok) {
        alertService.error(LoginRes.error);
        console.log(LoginRes.error)
      }
    //useSession(JSON.stringify(user));
    ///localStorage.setItem('user', JSON.stringify(user));
}

async function forgotpassword(email) {

       const user = await fetchWrapper.post(`${baseUrl}/forgotpassword`, email);
       //create reset token that expires after 24 hours
        user.resetToken = new Date().getTime().toString();
        user.resetTokenExpires = new Date(Date.now() + 24*60*60*1000).toISOString();
        localStorage.setItem('user', JSON.stringify(user));

        const resetUrl = `${location.origin}/account/reset-password?token=${user.resetToken}`;
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: user.email,
              subject: 'Forgot Password',
              text: `<h4>Reset Password Email</h4><p>Please click the below link to reset your password, the link will be valid for 1 day:</p><p><a href="${resetUrl}">Click Here</a></p>`,
            }),
          });
          if (response.ok) {
            console.log('Email sent successfully');
          } else {
            console.error('Failed to send email');
          }

}

async function editprofile(data){
    //console.log(data);
    //let users = JSON.parse(localStorage.getItem('user')) || [];
    let id = data.id;
    let firstName = data.firstName;
    let lastName = data.lastName;
    let companyName = data.companyName;
    let phoneNumber = data.phoneNumber;
    let profileImage = data.filename;
    return await fetchWrapper.put(`${baseUrl}/edit-profile`, {id, firstName, lastName, companyName, phoneNumber, profileImage});
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

async function TeamTracking(FormData){
    return await fetchWrapper.post(`${baseUrl}/team-tracking`, FormData);
}

async function Useraddvehicle(info){
    return await fetchWrapper.post(`${baseUrl}/add-vehicle`, info);
}

async function Useraddtrip(info){
    return await fetchWrapper.post(`${baseUrl}/add-trip`, info);
}
async function Useraddexpense(info){
    return await fetchWrapper.post(`${baseUrl}/add-expense`, info);
}
