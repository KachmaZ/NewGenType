<template>
    <button>
        Заново
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
    width: 100%;
    height: 58px;

    font-size: 17px;
    font-weight: 600;
    color: $base-text-color;
    background: $base-bg-color;

    border-radius: 4px;

    transition: ease-in 100ms;
    
    cursor: pointer;

    &:hover {
        color: $field-text-color;
        background-color: $field-bg-color;
        border: 1px solid $field-text-color;
    }
}
</style>