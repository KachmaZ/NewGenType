<template>
    <section class="main-section">
        <div class="main-section_text-field">
            <MainSectionTextField />
        </div>
        <div class="main-section_ui">
            <MainSectionIndicator 
                :title="'Скорость'"
                :measure="'зн./мин'"
                :firstParam="'currentLetterIndex'"
                :secondParam="'timer'"
                :multiplier="60"/>
            <MainSectionIndicator 
                :title="'Точность'"
                :measure="'%'"
                :firstParam="'currentLetterIndex'"
                :secondParam="'taps'"
                :multiplier="100"/>
            <MainSectionButton @click="store.startReset"/>
        </div>
    </section>
</template>

<script setup>
import MainSectionTextField from "./MainSectionTextField.vue";
import MainSectionIndicator from "./MainSectionIndicator.vue";
import MainSectionButton from "./MainSectionButton.vue";

import { useIndexStore } from "../../store";

const store = useIndexStore();
</script>

<style lang="scss" scoped>
.main-section {
    width: 750px;
    height: 290px;

    padding: 22px 10px;
    margin-bottom: 40px;

    display: flex;

    color: $field-text-color;
    background-color: $field-bg-color;

    border-radius: 4px;

    &_text-field {
        width: calc(100% - 143px);
        height: 100%;
        
        padding: 8px;
        
        border-right: 1px solid $lines-color;

        overflow: hidden;
    }

    &_ui {
        width: 143px;
        height: 100%;
        margin-left: 8px;
        padding: 8px 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>