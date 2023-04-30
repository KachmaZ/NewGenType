<template>
    <span class="text-unit">
        {{ value }}
    </span>
</template>

<script setup>
const props = defineProps({
  value: String,
});
</script>

<style lang="scss" scoped>

</style>