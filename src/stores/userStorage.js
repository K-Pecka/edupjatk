import { defineStore } from 'pinia'
import { ref } from 'vue'
import userPanel from '@/components/panel/user/InitComponents.vue'
import teacherPanel from '@/components/panel/teacher/InitComponents.vue'

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
  const publicPath = ['/login', '/register', '/']
  function findUser(email, password) {
    return users.value.find((u) => u.email === email && u.password === password)
  }

  function storeUserToLocalStorage(user) {
    localStorage.setItem('activeUser', JSON.stringify(user))
  }

  function getUser({ email, password }) {
    console.log(email, password)
    const foundUser = findUser(email, password)
    if (foundUser) {
      storeUserToLocalStorage(foundUser)
      return { status: true, message: 'Logowanie powiodło się', time: 2000 }
    } else {
      return { status: false, message: 'Logowanie nie powiodło się' }
    }
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
    console.log(getActiveUserFromLocalStorage())
  }
  function getAccessPath(path) {
    return isLoggedIn() && publicPath.includes(path)
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
  return { getPanel, getUser, getPermission, logOut, isLoggedIn, getAccessPath, getUserInfo }
})
