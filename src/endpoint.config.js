const backendHost =  'https://edupjatk-backend-756c2008b530.herokuapp.com';
const api = '/api/v1';
const backendPaths = {
    login: `${api}/accounts/login/`,
    register: `${api}/accounts/register/`,
    user: `${api}/accounts/user/get/`
};

export { backendHost, backendPaths };