import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import ClassesList from '@/components/modules/classes/ClassesList.vue'
import ModuleOne from '@/components/ModuleOne.vue' // testowe rozwiazanie
import { faHome, faTasks, fa1, fa2, fa3, fa4, fa5, fa6 } from '@fortawesome/free-solid-svg-icons'

export const useCounterStore = defineStore('counter', () => {

    let draggedItemId = null
    let dragEnterId = null
    const choosenOption = ref('classes')
    const rooms = ref([
        {uuid: 1, name: 'apple', color: 'pink', order: '1', allowedUsers: [''], pass: 'hG7pW9fE4sRt'}, // testowe rozwiazanie
        {uuid: 2, name: 'lion', color: 'red', order: '2', allowedUsers: [''], pass: 'jK2lL6oP8qZw'}, // testowe rozwiazanie
        {uuid: 3, name: 'elephant', color: 'orange', order: '3', allowedUsers: [''], pass: 'xN3mM5bV0cXz'}, // testowe rozwiazanie
        {uuid: 4, name: 'giraffe', color: 'magenta', order: '4', allowedUsers: [''], pass: 'aB4nC9iO1vFx'}, // testowe rozwiazanie
        {uuid: 5, name: 'orange', color: 'black', order: '5', allowedUsers: [''], pass: 'dF8gH2jK6lQx'}, // testowe rozwiazanie
        {uuid: 6, name: 'whale', color: 'brown', order: '6', allowedUsers: [''], pass: 'sW5zZ7xY3vBp'}, // testowe rozwiazanie
        {uuid: 7, name: 'newt', color: 'orange', order: '7', allowedUsers: [''], pass: 'rE1tT9uI4oOp'}, // testowe rozwiazanie
        {uuid: 8, name: 'otter', color: 'yellow', order: '8', allowedUsers: [''], pass: 'iU3yY5tR8eAs'}, // testowe rozwiazanie
        {uuid: 9, name: 'llama', color: 'purple', order: '9', allowedUsers: [''], pass: 'gD2hJ0kL6pFq'}, // testowe rozwiazanie
        {uuid: 10, name: 'octopus', color: 'green', order: '10', allowedUsers: [''], pass: 'oX7pP2iI9kUw'},// testowe rozwiazanie
        {uuid: 11, name: 'owl', color: 'red', order: '11', allowedUsers: [''], pass: 'vQ6wW4fF3eGd'}, // testowe rozwiazanie
        {uuid: 12, name: 'leopard', color: 'blue', order: '12', allowedUsers: [''], pass: 'cV9bB1mM4nZx'} // testowe rozwiazanie
    ])

    const kids = [{name: 'Andrzej', class: '3b', hidden: false}, {name: 'Mateusz', class: '2c', hidden: false}, {name: 'Kacper', class: '1a', hidden: true}]

    const options = ['hhhhhhhhhhhh', 'wwwwwwwww', 'ddddddddddd', 'ppppppppppp']
    const side_panel = [
      { text: 'Home', routing: 'classes', icon: faHome},
        { text: 'Module', routing: 'module', icon: faTasks },
        { text: '1', routing: '1', icon: fa1 },
        { text: '2', routing: '2', icon: fa2 },
        { text: '3', routing: '3', icon: fa3 },
        { text: '4', routing: '4', icon: fa4 },
        { text: '5', routing: '5', icon: fa5},
        { text: '6', routing: '6', icon: fa6 }
    ]


    function onDragOver(event) {
        event.preventDefault()
    }

    function onDragStart(id) {
        draggedItemId = id
    }

    function onDragEnter(id) {
        dragEnterId = id
    }

    async function registerMe(data) {
        try {
            const response = await fetch('http://localhost:8008/api/v1/accounts/kid/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
        }
    }
        function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
        async function loginMe() {
        try {
            const data = {
                email: 'jd@pw.pl',
                password: 'aletrudnetohaslolol',
            }
            const response = await fetch('http://localhost:8008/api/v1/accounts/kid/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
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
        }
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

    return { onDragOver, rooms, onDragLeave, onDrop, loginMe, onDragEnter, onDragStart, registerMe, draggedItemId, dragEnterId, choosenOption, currentComponent, options, side_panel, kids }
})