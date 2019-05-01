import axios from 'axios';
import { SET_CURRENT_USER } from './types';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
// import jwt from 'jsonwebtoken';

// export function setCurrentUser(user) {
//     return {
//         type: SET_CURRENT_USER,
//         user
//     }
// }

// export function logout() {
//     return dispatch => {
//         localStorage.removeItem('jwtToken');
//         localStorage.removeItem('user');
//         //setAuthorizationToken(false);
//         dispatch(setCurrentUser({}));
//     };
// }

export const login = (data) => dispatch => {
    return axios.post('http://localhost:4000/user/login', data)
        .then(res=>{
            console.log({res});
            localStorage.setItem('jwt', res.data);
            //var token = res.data;
            
            //var user = jwt.decode(token);
            //localStorage.setItem('jwtToken', token);
            //setAuthorizationToken(token);
            //dispatch(setCurrentUser(user));
        });

}

export const register = (data) => dispatch => {
    return axios.post('http://localhost:4000/user/register', data)
        .then(res => {
            console.log(res);
        });
}