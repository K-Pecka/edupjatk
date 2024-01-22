import { defineStore } from 'pinia'
import { ref } from 'vue'
import userPanel from '@/components/panel/user/InitComponents.vue'
import teacherPanel from '@/components/panel/teacher/InitComponents.vue'
import router from '@/router/index.js'

export const useStore = defineStore('user', () => {
  const users = ref([
    {
      uuid: 1,
      permission: 'user',
      keyAccess: null,
      password: '123456',
      nickName: 'KPecka',
      email: 'PK@',
      userName: 'Kacper',
      surname: 'Pecka'
    },
    {
      uuid: 2,
      permission: 'teacher',
      keyAccess: null,
      password: '123456',
      nickName: 'JKowalski',
      email: 'JK@',
      userName: 'Jan',
      surname: 'Kowalski'
    }
  ])
  const panel = {
    user: userPanel,
    teacher: teacherPanel
  }
  function findUser(email, password) {
    return users.value.find((u) => u.email === email && u.password === password)
  }

  function storeUserToLocalStorage(user) {
    localStorage.setItem('activeUser', JSON.stringify(user))
  }

  function getUser({ email, password }) {
    console.log(email, password)
    const foundUser = findUser(email, password)
    return new Promise((resolve, reject) => {
      if (foundUser) {
        storeUserToLocalStorage(foundUser);
        resolve({ status: true, message: 'Logowanie powiodło się', time: 2000 });
      } else {
        reject({ status: false, message: 'Logowanie nie powiodło się' });
      }
    });
  }

  function getActiveUserFromLocalStorage() {
    const userJson = localStorage.getItem('activeUser')
    return userJson ? JSON.parse(userJson) : null
  }
  function isLoggedIn() {
    return !!getActiveUserFromLocalStorage()
  }

  function getPermission() {
    const activeUser = getActiveUserFromLocalStorage()
    return activeUser?.permission
  }

  function getPanel() {
    return panel[getPermission()] || userPanel
  }
  function logOut() {
    localStorage.removeItem('activeUser')
  }
  function getAccessPath(path) {
    return isLoggedIn() && router.publicPath.includes(path)
  }
  function getUserInfo() {
    const { surname, userName, nickName, email } = getActiveUserFromLocalStorage()
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
  async function login(data)
  {
    return new Promise((resolve, reject) => {
      getUser(data)
        .then(response => {
          console.log(response);
          if(response.status){
            
            router.goTo(router.paths.panel)
          }
          resolve(response);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    });
    /*try {
      const response = await fetch('https://edupjatk-backend-756c2008b530.herokuapp.com/api/v1/accounts/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: data.email,
              password: data.password,
          }),
          credentials: 'include',
      })
      if (response.ok) {
          const responseData = await response
          console.log('Response:', responseData)
      } else {
          const errorData = await response
          console.error('Error:', errorData)
      }
  } catch (error) {
      console.error('Error:', error)
  }*/
  }
  function register(data)
  {
    return 'pomidor'+data
  }
  async function sendData(formData,state)
  {
    try {
      return state == 'logIn' ? await login(formData) : await register(formData);
    } catch (error) {
      console.error('Error during login or registration:', error);
    }
  }
  return { 
    getPanel, 
    getUser, 
    getPermission, 
    logOut, 
    isLoggedIn, 
    getAccessPath, 
    getUserInfo,
    sendData }
})
