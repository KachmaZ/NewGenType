<template>
    <span class="text-unit">
        {{ value }}
    </span>
</template>

<script setup>
const props = defineProps({
  value: String,
  orderNumber: Number,
});
</script>

<style lang="scss" scoped>

</style>