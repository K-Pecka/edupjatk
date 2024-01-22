import { defineStore } from 'pinia'
import { ref } from 'vue'

export const bannerStorage = defineStore('banner', () => {
  const cookies = {
    cookiesProperty: {
      content: 'Ta strona używa plików cookie, aby zapewnić najlepsze doświadczenia.',
      button: {
        title: 'akceptuj'
      }
    },
    showCookieBanner: ref(true),
    checkCookiesAccept: () => !sessionStorage.getItem('cookiesAccepted'),
    setSessionAccept: () => sessionStorage.setItem('cookiesAccepted', 'true'),
    setShowCookies: () => (cookies.showCookieBanner.value = false),
    acceptCookies: () => {
      cookies.setSessionAccept()
      cookies.setShowCookies()
    }
  }
  const logOut = {
    property:{
      title:"Do zobaczenia w krótce!",
      delay:2000
    }
  }

  if (!cookies.checkCookiesAccept()) {
    cookies.setShowCookies()
  }

  return { cookies, logOut }
})
