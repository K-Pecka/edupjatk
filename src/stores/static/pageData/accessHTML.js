import { defineStore } from 'pinia'
import { ref } from 'vue'
import LogInForm from '@/components/access/logIn/logInForm.vue'
import SignUpForm from '@/components/access/signUp/SignUpForm.vue'

export const accessHTMLstore = defineStore('accessFormData', () => {
  const defaultState = {
    logIn: {
      component: LogInForm,
      state: 'logIn',
      classPanelPage: 'logIn',
      title: 'Log In',
      btn: {
        main: { title: 'Log In' },
        second: { title: 'Sign Up' }
      },
      fields: [
        {
          label: 'login',
          name: 'email',
          type: 'text'
        },
        {
          label: 'password',
          name: 'password',
          type: 'password'
        }
      ]
    },
    signUp: {
      state: 'signUp',
      component: SignUpForm,
      classPanelPage: 'signUp',
      title: 'Sign Up',
      btn: {
        main: { title: 'Sign Up' },
        second: { title: 'Log In' }
      },
      fields: [
        {
          label: 'name',
          name: 'name',
          type: 'text'
        },
        {
          label: 'surname',
          name: 'surname',
          type: 'text'
        },
        {
          label: 'login',
          name: 'login',
          type: 'text'
        },
        {
          label: 'emile',
          name: 'login',
          type: 'email'
        },
        {
          label: 'type',
          name: 'type',
          type: 'checkbox'
        }
      ]
    }
  }

  const accessState = ref(defaultState.logIn)

  function getState() {
    return accessState
  }

  const changeState = async () => {
    accessState.value =
      accessState.value.state === 'logIn' ? defaultState.signUp : defaultState.logIn
  }

  return { getState, changeState }
})
