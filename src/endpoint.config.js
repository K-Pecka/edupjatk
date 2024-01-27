const backendHost = import.meta.env.VITE_APP_BACKEND_HOST || '';
const api = '/api/v1';
const backendPaths = {
    login: `${api}/accounts/login/`,
    register: `${api}/accounts/register/`,
    user: `${api}/accounts/user/get/`
};

export { backendHost, backendPaths };