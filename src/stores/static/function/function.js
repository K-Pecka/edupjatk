import { defineStore } from 'pinia'

export const functionStore = defineStore('function', () => {
    const capitalizeText = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return { capitalizeText }
})
