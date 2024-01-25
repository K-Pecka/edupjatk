import { defineStore } from 'pinia';
import { backendHost, backendPaths } from '@/endpoint.config.js';
import { useBannerStore } from '@/stores/banner/main.js';

const bannerStore = useBannerStore();

export const useRequestStore = defineStore('request', () => {
    async function login(data) {
        try {
            const response = await fetch(`${backendHost}${backendPaths.login}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Response:', responseData);
                const successLogIn = "Logowanie powiodło się"
                bannerStore.setMessage(successLogIn, 'success');
                return {status:"ok",token:responseData.token}
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                const errorLogIn = "Logowanie nie powiodło się"
                bannerStore.setMessage(errorLogIn, 'error');
                return {status:"error"}
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function register(data) {
        
        const {username,email,password,first_name,last_name}= data
        try {
            const response = await fetch(`${backendHost}${backendPaths.register}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username,email,password,first_name,last_name}),
                credentials: 'include',
            })
            if (response.ok) {
                const responseData = await response
                console.log('Response:', responseData)
            } else {
                const errorData = await response
                console.error('Error:', errorData)
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return { login, register };
});
