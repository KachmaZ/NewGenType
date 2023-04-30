<script setup>
import KeyBoardKey from './KeyBoardKey.vue';
</script>

<template>
    <div class="keyboard">
        <div class="keyboard_line">
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey class="key_size1"/>
        </div> 
        <div class="keyboard_line">
            <KeyBoardKey class="key_size1" />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
        </div> 
        <div class="keyboard_line">
            <KeyBoardKey class="key_size2" />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey class="key_size2"/>
        </div> 
        <div class="keyboard_line">
            <KeyBoardKey class="key_size3" />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey />
            <KeyBoardKey class="key_size3"/>
        </div> 
        <div class="keyboard_line">
            <KeyBoardKey class="key_space" />
        </div>
    </div>
</template>

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