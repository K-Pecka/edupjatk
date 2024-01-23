import { defineStore } from 'pinia';
import { ref } from 'vue';

export const moduleStorage = defineStore('modulEducation', () => {
    const existModuls = ref({
        math: {
            path: 'math/',
            card: {
                title: 'Matematyka',
                content: 'Zapraszamy do świata cyferek i równań',
                src: {
                    folder: 'math/',
                    image: 'math.png',
                },
            },
            modul: [
                {
                    path: '/1',
                    card: {
                        title: 'Matematyka w praktyce',
                        content: 'Rozdział poświęcony jest wykorzystaniem matematyki w praktyce',
                        src: {
                            folder: '/1',
                            image: '1.png',
                        },
                    },
                    chapter: [
                        {
                            path: '/1',
                            card: {
                                title: 'Działania na zegarze',
                                content: 'W tym epizodzie nauczysz się jak działa zegar, nauczysz się jak ustawiać zegar analogiczny, na podstawie cyfrowego',
                                src: {
                                    folder: '/1',
                                    image: '1.png',
                                },
                            },
                        },
                    ],
                },
                {
                    path: '/2',
                    card: {
                        title: 'Wprowadzenie do równań',
                        content: 'W tym rozdziale wprowadzamy pojęcie równości i nierówności',
                        src: {
                            folder: '/2',
                            image: '2.png',
                        },
                    },
                    chapter: [
                        {
                            path: '/1',
                            card: {
                                title: '"Równi i równiejsi"',
                                content: 'Epizod ten poświęcimy na zrozumienie pojęcia "większy", "mniejszy"',
                                src: {
                                    folder: '/1',
                                    image: '1.png',
                                },
                            },
                        },
                    ],
                },
                {
                    path: '/3',
                    card: {
                        title: 'Pojęcie niewiadomej',
                        content: 'Rozdział poświęcony jest wprowadzeniu niewiadomych do równania',
                        src: {
                            folder: '/3',
                            image: '3.png',
                        },
                    },
                    chapter: [
                        {
                            path: '/1',
                            card: {
                                title: '"Wprowadzenie do nie wiadomych"',
                                content: 'Wyjaśnimy na czym polega nie wiadoma w matematyce',
                                src: {
                                    folder: '/1',
                                    image: '1.png',
                                },
                            },
                        },
                    ],
                },
            ],
        },
    });
    const subject = 'math'
    const getModul = () => {
        const modules = existModuls.value[subject].modul;
        const formattedModul = modules.map(module => {
            let imagePath = `${module.card.src.folder}/${module.card.src.image}`;
            return {
                card: {
                    title: module.card.title,
                    content: module.card.content,
                },
                path: module.path,
                imagePath: imagePath,
            };
        });

        return {
            data:formattedModul,
            title:"Dostępne moduły:"
        };
    };

    const getChapter = (modulPath) => {
        const chapters = existModuls.value[subject].modul.find(module => module.path === `/${modulPath}`)?.chapter || [];
        const formattedChapters = chapters.map(chapter => {
            let imagePath = `${chapter.card.src.folder}/${chapter.card.src.image}`;
            return {
                card: {
                    title: chapter.card.title,
                    content: chapter.card.content,
                },
                path: `/${modulPath}${chapter.path}`,
                imagePath: imagePath,
            };
        });
        console.log(formattedChapters)
        return {
            data:formattedChapters,
            title:"Dostępne rodziały:"
            };
    };

    return { getModul, getChapter };
});
