import { defineStore } from 'pinia'
import {ref} from 'vue'
export const userStorage = defineStore('banner', () => {
    const showCookieBanner = ref(!sessionStorage.getItem('cookiesAccepted'));
    const cookies = {
        content:"This website uses cookies to ensure you get the best experience.",
        button:{
            title:"accept"
        }
    }

    const acceptCookies = () => {
        sessionStorage.setItem('cookiesAccepted', 'true');
        showCookieBanner.value = false;
    };
    return {cookies,showCookieBanner,acceptCookies}
})