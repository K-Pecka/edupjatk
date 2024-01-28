import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBannerCookiesStore = defineStore('bannerCookies', () => {
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

  if (!cookies.checkCookiesAccept()) {
    cookies.setShowCookies()
  }

  return { cookies }
})
