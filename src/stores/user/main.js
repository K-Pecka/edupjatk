import { defineStore } from 'pinia'
import { useRequestStore } from '@/stores/request/main.js'
import { useBannerStore } from '@/stores/elementPage/banner/main.js'
import { useAccessHTMLstore } from '@/stores/elementPage/accessForm/main.js'
import { useFunctionStore } from '@/stores/function/main.js'
import router from '@/router/index.js'

import userPanel from '@/components/modules/panels/user/InitComponents.vue'
import teacherPanel from '@/components/modules/panels/teacher/InitComponents.vue'

export const useUserStore = defineStore('user', () => {
  const accessHTMLstore = useAccessHTMLstore()
  const { showBanner, setMessage } = useBannerStore()
  const { login, getUser } = useRequestStore()
  const {getCookies,setCookies,deleteCookies} = useFunctionStore()
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
    const activeUser= {permission:'user'}
    return activeUser?.permission
  }
  function getPanel() {
    return panel[getPermission()] || userPanel
  }
  function isLoggedIn() {
    return !!getCookies('userToken')
  }

  function getUserInfo() {
    const token = getCookies('userToken') ?? null;
    const CSR = getCookies('csrftoken') ?? null
    try{
      if(token && CSR)
      {
        setMessage('wystąpił problem z tokenem', 'error')
      }
      console.log(getUser(token,CSR))
    }
    catch(exeption)
    {
      console.error(exeption)
    }

    
    //const { surname, userName, nickName, email } = getUser(token,CSR)
    const { surname, userName, nickName, email } = {
      surname: "Nowak", userName:"Nowak", nickName:"JNowak", email:"Jnowak@wp.pl"}
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
  async function register2()
  {
    return {status:"ok",token:"123",state:'register'}
  }
  async function sendData(formData, state) {
    const accessPoint = {
      logIn: login,
      signUp: register2
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
      const {token = null, status, state} =response
      if (status == 'ok' && token)
      {
        if(state=='login')
          setMessage('Logowanie przebiegło pomyślnie!', 'success')
        else 
          setMessage('Rejestracja przebiegło pomyślnie!', 'success')

        setCookies({token:'userToken',value:token})
      }  
      else 
        if(state=='login'){
          setMessage('Nie poprawne dane logowanie!', 'error')
        } 
        else 
          setMessage('Rejestracja przebiegło pomyślnie!', 'success')
      showBanner()
      return path[status] || null
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
  function logOut()
  {
    deleteCookies('userToken')
  }
  return { getAccessPath, sendForm, accessHTMLstore, router, isLoggedIn, getUserInfo, getPanel,logOut }
})
