<template>
    <div class="text-field">
        <h2 class="text-field_title" v-if="!store.processedText">Let's start!</h2>
        <div class="text-field_wrapper" v-else >
            <MainSectionTextUnit v-for="letter, index in store.processedText" 
            :value="letter" 
            :orderNumber="index" 
            :key="index" 
            />
        </div>
    </div>
</template>

<script setup>
import MainSectionTextUnit from './MainSectionTextUnit.vue';

import { useIndexStore } from '@/store/index'
import { onMounted } from 'vue';

const store = useIndexStore();

function onKeyDown(event) {
    event.preventDefault();
    
    if (event.key !== 'Shift') {
        // Обработка верно нажатой клавиши
        if(event.key === store.currentLetter){
            store.nextLetter();
        }
    }

    return false
}

onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
}) 
</script>

<style lang="scss" scoped>
.text-field {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    &_title {
        width: 100%;
        text-align: center;
    }
}
</style>