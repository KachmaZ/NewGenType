<template>
    <div class="text-field">
        <h2 class="text-field_title" v-if="!store.text">Let's start!</h2>
        <div class="text-field_wrapper" v-else >
            <MainSectionTextUnit v-for="letter, index in store.text" :value="letter" :orderNumber="index" :key="index" />
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
    &_title {
        width: 100%;
        text-align: center;
    }
}
</style>