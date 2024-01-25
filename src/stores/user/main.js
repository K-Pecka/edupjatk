import { defineStore } from 'pinia'
import { useRequestStore } from '@/stores/request/main.js'
import { useBannerStore } from '@/stores/elementPage/banner/main.js'
import { useAccessHTMLstore } from '@/stores/elementPage/accessForm/main.js'
import router from '@/router/index.js'

import userPanel from '@/components/panel/user/InitComponents.vue'
import teacherPanel from '@/components/panel/teacher/InitComponents.vue'

export const useUserStore = defineStore('user', () => {
  const accessHTMLstore = useAccessHTMLstore()
  const { showBanner, setMessage } = useBannerStore()
  const { login, register } = useRequestStore()
  const path = {
    ok: router.paths.panel,
    error: router.paths.access
  }
  const panel = {
    user: userPanel,
    teacher: teacherPanel
  }
  function getAccessPath(path) {
    return isLoggedIn() && router.publicPath.includes(path)
  }
  function getPermission() {
    const activeUser = 'user'
    return activeUser?.permission
  }
  function getPanel() {
    return panel[getPermission()] || userPanel
  }
  function isLoggedIn() {
    return true
  }

  function getUserInfo() {
    const { surname, userName, nickName, email } = {
      surname: 'surname',
      userName: 'userName',
      nickName: 'nickName',
      email: 'email'
    }
    return (
      surname &&
      userName &&
      nickName &&
      email && [
        { value: surname, field: 'nazwisko' },
        { value: userName, field: 'imie' },
        { value: nickName, field: 'nick' },
        { value: email, field: 'emile' }
      ]
    )
  }

  async function sendData(formData, state) {
    const accessPoint = {
      logIn: login,
      signUp: register
    }

    try {
      return await accessPoint[state](formData)
    } catch (error) {
      console.error('Error during login or registration:', error)
    }
  }

  async function sendForm() {
    const { formData, state } = setData()

    return sendData(formData, state).then((response) => {
      if (response.status == 'ok') setMessage('okej', 'success')
      else setMessage('okej', 'error')
      showBanner()
      return path[response.status] || null
    })
  }

  function setFormData(fields) {
    return fields.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
  }

  function setData() {
    const { fields, state } = accessHTMLstore.getState().value
    return {
      formData: setFormData(fields),
      state: state
    }
  }

  return { getAccessPath, sendForm, accessHTMLstore, router, isLoggedIn, getUserInfo, getPanel }
})
