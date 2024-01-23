import { defineStore } from 'pinia';
import { useRequestStore } from '@/stores/request/main.js';

const {login,register} = useRequestStore()
export const useUserStore = defineStore('user', () => {
    
    async function sendData(formData,state)
    {
        let accessPoint = {
            'logIn': login,
            'signUp':register
        }
        try {
            await accessPoint[state](formData);
        } catch (error) {
            console.error('Error during login or registration:', error);
        }

    }
    return {sendData}
});