import { defineStore } from 'pinia'

export const useFunctionStore = defineStore('function', () => {
    const capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1);
    const setCookies = ({token,time,value}) => {
      const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + time);

        document.cookie = `${token}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    }
    const getCookies = (token) => {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [cookieToken, cookieValue] = cookie.split('=');
            if (cookieToken === token) {
                return cookieValue;
            }
        }
        return null;
    }
    const deleteCookies = () =>{
      document.cookies="";
    }
  return { capitalizeText,getCookies,setCookies,deleteCookies }
})
