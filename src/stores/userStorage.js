import { defineStore } from 'pinia'

import userPanel from '@/components/panel/user/initComponents.vue'
import techerPanel from '@/components/panel/teacher/initComponents.vue'

export const useStore = defineStore('user', () => {
    
    function getPermission()
    {
        return 'teacher'
    }
    function getPanel()
    {
        const panel={
            'user':userPanel,
            'teacher':techerPanel
        }
        return panel[getPermission()] || userPanel
    }
    return {getPanel,getPermission}
})