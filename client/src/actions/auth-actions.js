import axios from 'axios';
import { LOGIN, LOGOUT } from '../constants/auth-constants';
import { BASE_URL } from '../constants/common';

export function login(user, password) {
    return {
        type: LOGIN,
        payload: axios.post(`${BASE_URL}/auth/login`, { user, password }),
    };
}
export function logout() {
    return {
        type: LOGOUT,
        payload: axios.post(`${BASE_URL}/auth/logout`, { }),
    }
}
