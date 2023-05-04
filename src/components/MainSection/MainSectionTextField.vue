<template>
    <div class="text-field">
        <h2 class="text-field_title" v-if="store.processedText.length === 0">Let's start!</h2>
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

const store = useIndexStore();
</script>

<style lang="scss" scoped>
.text-field {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    font-size: 24px;

    &_title {
        width: 100%;
        text-align: center;
    }
}
</style>