import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
    const navigationMain = {
        buttons: [
          { label: 'start', to: { name: 'start' }, class: [] },
          //{ label: 'ustawienia', to: { name: 'setting' }, class: [] },
          { label: 'moduły', to: { name: 'educationModule' }, class: [] },
          { label: 'profil', to: { name: 'profile' }, class: [] },
          { label: 'testy', to: { name: 'profile' }, class: [] },
          { label: 'statystyki', to: { name: 'statistic' }, class: [] },
          { label: 'wyloguj', to: { name: 'logOut' }, class: [] }
        ],
        style: {
          button: {
            normal: {
              width: '80%',
            },
            hover: {
              
            }
          },
          div: {}
        },
        className: {
          button: ['btn', 'animation-1','mx-2','p-md-3','text-uppercase'],
          div: ['d-flex', 'align-items-center', 'justify-content-beetwen']
        }
      }
      const typeOfNavigation = {
        'main': navigationMain
      }
      const getNavigation =(type) =>typeOfNavigation[type] ?? null
    return {getNavigation}
})