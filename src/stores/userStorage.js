import { defineStore } from 'pinia'


export const useStore = defineStore('user', () => {
    
    function getPermission()
    {
        return getPanel('user')
    }
    function getPanel()
    {
        let panel={
            'user':import('@components/Panel/user/init.vue'),
            'teacher':import('@components/Panel/teacher/init.vue')
        }
        return panel[getPermission()]
    }
})