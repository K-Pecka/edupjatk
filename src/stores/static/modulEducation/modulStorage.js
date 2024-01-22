import { defineStore } from 'pinia'
import { ref } from 'vue'

export const bannerStorage = defineStore('modulEducation', () => {
    const existModuls =ref({
        math:{
            path:'math/',
            card:{
                    title:'Matematyka',
                    content:'Zaprawszamy do świata cyferek i równań',
                    src:'/subject/math.jpg',
                },
            modul:[{
                path:'/1',
                card:{
                    title:'Matematyka w praktyce',
                    content:'Rozdział poświęcony jest wykorzystaniem matematyki w praktyce',
                    src:'/subject/math/1.jpg'
                },
                chapter:[
                    {
                        path:'/1',
                        card:{
                            title:'działania na zegarze',
                            content:'W tym epizodzie nauczysz się jak działa zegar, nauczysz się jak ustawiać zegar nalogiczny, na podstawie cyfrowego',
                            src:'/subject/math/1/1.jpg'
                        }
                    }
                ]
                },
                {
                    path:'/2',
                    card:{
                        title:'Wprowadzenie do równań',
                        content:'W tym rozdziale wprowadzamy pojęcie równości i nierówności',
                        src:'/subject/math/2.jpg'
                    },
                    chapter:[
                        {
                            path:'/1',
                            card:{
                                title:'"Równi i równiejsi',
                                content:'Epizod ten poświęcimy na zrozumienie mojęcią, "większy", "mniejszy" ',
                                src:'/subject/math/2/1.jpg'
                            }
                        }
                    ]
                    },{
                        path:'/3',
                        card:{
                            title:'Pojęcie niewiadomej',
                            content:'Rozdział poświęcony jest wprowadzeniu niewiadomych do równania',
                            src:'/subject/math/3.jpg'
                        },
                        chapter:[
                            {
                                path:'/1',
                                card:{
                                    title:'"Wprowadzenie do nie wiadomych',
                                    content:'Wyjaśnimy na czym polega nie wiadoma, w matematyce',
                                    src:'/subject/math/3/1.jpg'
                                }
                            }
                        ]
                        }]
            },
        });
    return {existModuls}
});