import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import ClassesList from '@/components/modules/classes/ClassesList.vue'
import ModuleOne from '@/components/ModuleOne.vue' // testowe rozwiazanie


export const useCounterStore = defineStore('counter', () => {

    let draggedItemId = null
    let dragEnterId = null
    const choosenOption = ref('classes')
    const rooms = ref([
        {uuid: 1, name: 'apple', image: 'src/assets/icons/more_horiz.svg', order: '1', allowedUsers: [''], pass: 'hG7pW9fE4sRt'}, // testowe rozwiazanie
        {uuid: 2, name: 'lion', image: 'src/assets/images/square.png', order: '2', allowedUsers: [''], pass: 'jK2lL6oP8qZw'}, // testowe rozwiazanie
        {uuid: 3, name: 'elephant', image: 'src/assets/images/square.png', order: '3', allowedUsers: [''], pass: 'xN3mM5bV0cXz'}, // testowe rozwiazanie
        {uuid: 4, name: 'giraffe', image: 'src/assets/icons/more_horiz.svg', order: '4', allowedUsers: [''], pass: 'aB4nC9iO1vFx'}, // testowe rozwiazanie
        {uuid: 5, name: 'orange', image: 'src/assets/images/square.png', order: '5', allowedUsers: [''], pass: 'dF8gH2jK6lQx'}, // testowe rozwiazanie
        {uuid: 6, name: 'whale', image: 'src/assets/images/square.png', order: '6', allowedUsers: [''], pass: 'sW5zZ7xY3vBp'}, // testowe rozwiazanie
        {uuid: 7, name: 'newt', image: 'src/assets/icons/more_horiz.svg', order: '7', allowedUsers: [''], pass: 'rE1tT9uI4oOp'}, // testowe rozwiazanie
        {uuid: 8, name: 'otter', image: 'src/assets/images/square.png', order: '8', allowedUsers: [''], pass: 'iU3yY5tR8eAs'}, // testowe rozwiazanie
        {uuid: 9, name: 'llama', image: 'src/assets/images/square.png', order: '9', allowedUsers: [''], pass: 'gD2hJ0kL6pFq'}, // testowe rozwiazanie
        {uuid: 10, name: 'octopus', image: 'src/assets/images/square.png', order: '10', allowedUsers: [''], pass: 'oX7pP2iI9kUw'},// testowe rozwiazanie
        {uuid: 11, name: 'owl', image: 'src/assets/images/square.png', order: '11', allowedUsers: [''], pass: 'vQ6wW4fF3eGd'}, // testowe rozwiazanie
        {uuid: 12, name: 'leopard', image: 'src/assets/icons/more_horiz.svg', order: '12', allowedUsers: [''], pass: 'cV9bB1mM4nZx'} // testowe rozwiazanie
    ])

    const options = ['hhhhhhhhhhhh', 'wwwwwwwww', 'ddddddddddd', 'ppppppppppp']
    const side_panel = [{ text: 'Home', routing: 'classes' }, { text: 'Module', routing: 'module' }, { text: 'Home', routing: 'classes' }, { text: 'Module', routing: 'module' }, { text: 'Home', routing: 'classes' }, { text: 'Module', routing: 'module' }, { text: 'Home', routing: 'classes' }, { text: 'Module', routing: 'module' }]


    function onDragOver(event) {
        event.preventDefault()
    }

    function onDragStart(id) {
        draggedItemId = id
    }

    function onDragEnter(id) {
        dragEnterId = id
    }

    function onDragLeave(event) {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            dragEnterId = null
        }
    }

    function onDrop(event) {
        event.preventDefault()

        if (
            draggedItemId !== null &&
            dragEnterId !== null &&
            draggedItemId !== dragEnterId
        ) {
            const fromIndex = Number(draggedItemId)
            const toIndex = Number(dragEnterId)

            if (!isNaN(fromIndex) && !isNaN(toIndex)) {
                const temp = rooms.value[fromIndex]
                rooms.value[fromIndex] = rooms.value[toIndex]
                rooms.value[toIndex] = temp

                draggedItemId = null
                dragEnterId = null
                return
            }
        }
        draggedItemId = null
        dragEnterId = null
    }

    const currentComponent = computed(() => {
        switch(choosenOption.value) {
            case 'classes':
                return ClassesList
            case 'module':
                return ModuleOne
            default:
                return ClassesList
        }
    })

    return { onDragOver, rooms, onDragLeave, onDrop, onDragEnter, onDragStart, draggedItemId, dragEnterId, choosenOption, currentComponent, options, side_panel }
})