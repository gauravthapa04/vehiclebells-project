import { expressjwt } from 'express-jwt';
import util from 'util';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const middleware = expressjwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate',
            '/api/users/forgotpassword',
            '/api/users/validate-reset-token',
            '/api/users/reset-password',
            '/api/users/own-tracking',
            '/api/users/team-tracking',
            '/api/users/edit-profile',
            '/api/users/add-vehicle',
            '/api/users/add-trip',
            '/api/users/add-expense'
        ]
    });

    return util.promisify(middleware)(req, res);
}