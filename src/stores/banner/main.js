import { defineStore } from 'pinia';
import { toRefs, reactive } from 'vue';
export const useBannerStore = defineStore('bannerInfo', () => {
    const state = reactive({
    message: '',
    status: 'success', 
    duration: 5000,
    timerId: null,
  });
  async function setMessage(message, status = 'success')
  {
    state.message = message;
    state.status = status;
  }
  function showBanner() {
    if (state.timerId) {
      clearTimeout(state.timerId);
    }

    state.timerId = setTimeout(() => {
      hideBanner();
    }, state.duration);
  }

  function hideBanner() {
    state.isVisible = false;
    state.timerId = null;
  }
  function getInfo()
  {
    return  {
        message:state.message,
        status:state.status
    }
  }
  return {
    ...toRefs(state),
    showBanner,
    hideBanner,
    setMessage,
    getInfo
  };
});
