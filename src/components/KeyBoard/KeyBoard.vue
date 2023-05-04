<template>
    <div class="keyboard">
        <div class="keyboard_line" v-for="line, index in kb_config" :key="index">
            <KeyBoardKey v-for="key in line" 
            :innerText="key.value" 
            :size="key.size" 
            :position="key.position"
            :key="key.value"/>
        </div> 
    </div>
</template>

<script setup>
import KeyBoardKey from './KeyBoardKey.vue';

// Keyboard line-buttoned configuration
import kb_config from '../../../keyboard.config'
</script>

<style lang="scss" scoped>
.keyboard {
    width: 100%;
    padding: 22px 15px;

    border: 1px solid $kb-bg-color;
    border-radius: 4px;

    &_line {
        height: 46px;
        display: flex;
        justify-content: space-between;

        margin-bottom: 4px;

        &:last-child {
            margin-bottom: 0;

            justify-content: center;
        }
    }
}
</style>