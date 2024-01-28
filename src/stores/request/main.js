import { defineStore } from 'pinia';
import { backendHost, backendPaths } from '@/endpoint.config.js';

function setPropsRequest(request)
{
    let {method, headers, body, credentials} = request
    return {
        method: method ?? 'GET',
        headers: headers ??{ 'Content-Type': 'application/json' },
        body: JSON.stringify( body ) ?? null,
        credentials: credentials ?? 'include', 
    }
}

export const useRequestStore = defineStore('request', () => {
    
    async function getUser(token,CSR) {
        try {
            const response = await fetch(
                `${backendHost}${backendPaths.user}`, 
                setPropsRequest({method: 'GET',headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                    'X-CSRFToken':CSR
                }})
            );

            if (response.ok) {
                const responseData = await response.json();
                console.log('Response:', responseData);
                return {status:"ok",token:responseData,state:'register'}
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                return {status:"error"}
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function login(data) {
        try {
            const response = await fetch(
                `${backendHost}${backendPaths.login}`, 
                setPropsRequest({method: 'POST',body: data})
            );

            if (response.ok) {
                const responseData = await response.json();
                console.log('Response:', responseData);
                return {status:"ok",token:responseData.token,state:'login'}
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                return {status:"error"}
            }
        } catch (error) {
            return {'error':error};
        }
    }

    
    async function register(data) {
        
        const {username,email,password,first_name,last_name}= data
        try {
            const response = await fetch(`${backendHost}${backendPaths.register}`,
                {
                    method: 'POST',
                    body: {username,email,password,first_name,last_name},},
            )
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

    return { login, register, getUser };
});
