<template>
    <header class="header">
        <h1 class="header_title">NewGenType</h1>
        <hr class="header_line">
    </header>
</template>

<script setup>

</script>

<style lang="scss">
.header {
    width: 100%;

    margin-bottom: 40px;

    text-align: center;

    &_title {
        margin: 34px 0 15px;
        font-size: 40px;
        font-weight: 600;
        line-height: 44px;
    }

    &_line {
        border: 0;
        border-top: 1px solid $lines-color;
    }
}
</style>