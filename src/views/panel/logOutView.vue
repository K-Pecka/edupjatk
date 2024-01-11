<script setup>
import { useStore } from '@/stores/userStorage.js'
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const handleAnimationEnd = () => setTimeout(() =>router.push('/'),2500);

(async () => {
    store.logOut();
    handleAnimationEnd();
})();
</script>

<template>
    <div class="goodbye-container">
        <div class="goodbye-message" @animationend="handleAnimationEnd">
            <p>Goodbye!<span class="emoji">👋</span></p>
        </div>
    </div>
</template>

<style scoped>
.goodbye-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
}

.goodbye-message {
    text-align: center;
    font-size: 24px;
    color: #fff;
    padding: 20px;
    background: linear-gradient(to left, rgb(193 65 206), rgb(134 145 217));
    border-radius: 8px;
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeOut 2s ease-in-out forwards;
}

.emoji {
    font-size: 36px;
}
    
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>