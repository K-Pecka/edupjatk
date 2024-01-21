import { defineStore } from 'pinia'
import { ref } from 'vue'
import LogInForm from '@/components/access/logIn/LogInForm.vue'
import SignUpForm from '@/components/access/signUp/SignUpForm.vue'

export const accessHTMLstore = defineStore('accessFormData', () => {
  const defaultState = {
    logIn: {
      component: LogInForm,
      state: 'logIn',
      classPanelPage: 'logIn',
      title: 'Zaloguj się',
      btn: {
        main: { title: 'Zaloguj się' },
        second: { title: 'Zarejestruj się' }
      },
      fields: [
        {
          label: 'Login',
          name: 'email',
          type: 'text'
        },
        {
          label: 'Hasło',
          name: 'password',
          type: 'password'
        }
      ]
    },
    signUp: {
      state: 'signUp',
      component: SignUpForm,
      classPanelPage: 'signUp',
      title: 'Zarejestruj się',
      btn: {
        main: { title: 'zarejestruj się' },
        second: { title: 'Zaloguj się' }
      },
      fields: [
        {
          label: 'Imie',
          name: 'name',
          type: 'text'
        },
        {
          label: 'Nazwisko',
          name: 'surname',
          type: 'text'
        },
        {
          label: 'Login',
          name: 'login',
          type: 'text'
        },
        {
          label: 'emile',
          name: 'login',
          type: 'email'
        },
        {
          label: 'Typ konta',
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
