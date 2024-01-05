<template>
    <section>
      <MainHeader :message="headerMessage"/>
      <PrintListButton :buttons="buttons"/>
    </section>
  </template>
  
  <script setup>
  import MainHeader from '@/components/stateless/PrintHeader.vue';
  import PrintListButton from '@/components/stateless/PrintListButton.vue';

  const headerMessage = {
    title: "Lorem ipsum dolor sit amet, adipisicing elit!",
    content: [
      `Lorem <strong>ipsum</strong> <a href="#">dolor</a> sit amet consectetur, adipisicing elit. Quod est incidunt autem consequuntur. Labore neque, veniam ducimus fugiat quia consequatur dolor odit suscipit deserunt at reprehenderit ipsum et nisi cupiditate molestiae natus quibusdam impedit, veritatis maxime illum illo consequuntur officiis est ipsa? Enim ut fugiat voluptatum quia excepturi, quibusdam natus!`,
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod est incidunt autem consequuntur. Labore neque, veniam ducimus fugiat quia consequatur dolor odit suscipit deserunt at reprehenderit ipsum et nisi cupiditate molestiae natus quibusdam impedit, veritatis maxime illum illo consequuntur officiis est ipsa? Enim ut fugiat voluptatum quia excepturi, quibusdam natus!`
    ],
    style:{
        h1:{
            'margin-bottom':'5%',
            'letter-spacing':'5px',
            'text-align': 'justify'
        },
        p:{
            'margin-bottom':'2%',
            'letter-spacing':'2px',
            'text-align': 'justify'
        }
    },
    class:{
        p:['text-justify']
    }
  };
  const buttons = {
    buttons:[
    {
            label:"-",
            to:{name:"logIn"},
            class:['btn-primary']
        },
        {
            label:"zarejestruj się",
            to:{name:"SignUp"},
            class:['btn-secondary']
        }
    ],
    style:{
        button:{
            'width':'80%',
            'padding':'3%',
            'margin-bottom':'5%'
        },
        div:{
            
        }
    },
    className:
    {
        button:['btn'],
        div:['d-flex', 'align-items-center', 'justify-content-center', 'flex-column']
    }
  }
  </script>
  
<style>
body{
    background-image: url('@/assets/background-home.png');
    background-size: cover;
  }
</style>