<template>
    <div class="text-field">
        <p v-if="!store.text">{{ store.name }}</p>
        <p v-else>{{ store.text }}</p>
    </div>
</template>

<script setup>
import MainSectionTextUnit from './MainSectionTextUnit.vue';

import { useIndexStore } from '@/store/index'

const store = useIndexStore();
</script>

<style lang="scss" scoped>

</style>