import { defineStore } from 'pinia';
import { useRequestStore } from '@/stores/request/main.js';
import { useBannerStore } from '@/stores/banner/main.js';
import { useAccessHTMLstore } from '@/stores/static/pageData/accessHTML.js';
import router from '@/router/index.js';

const accessHTMLstore = useAccessHTMLstore();
const { showBanner } = useBannerStore();
const { login, register } = useRequestStore();

const path = {
  'ok': router.paths.panel,
  'error': router.paths.access
};

export const useUserStore = defineStore('user', () => {

  async function sendData(formData, state) {
    const accessPoint = {
      logIn: login,
      signUp: register
    };

    try {
      return await accessPoint[state](formData);
    } catch (error) {
      console.error('Error during login or registration:', error);
    }
  }

  function sendForm() {
    const { formData, state } = setData();

    return sendData(formData, state)
      .then(response => {
        showBanner();
        return path[response.status] || null;
      });
  }

  function setFormData(fields) {
    return fields.reduce((data, field) => {
      data[field.name] = field.value;
      return data;
    }, {});
  }

  function setData() {
    const { fields, state } = accessHTMLstore.getState().value;
    return {
      formData: setFormData(fields),
      state: state
    };
  }

  return { sendForm, accessHTMLstore, router };
});
