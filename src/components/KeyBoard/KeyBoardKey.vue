<template>
    <div class="key" :class="classObject">
        {{ innerText }}
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import {computed, ref, toRefs, watch} from "vue";

import { useIndexStore } from "../../store";

const store = useIndexStore();

const props = defineProps({
  innerText: String,
  size: Number,
  position: String,
});

const {innerText, size, position} = toRefs(props);
const isCurrent = ref(false);
const isMistake = ref(false);

const {currentLetter, lastMistake} = storeToRefs(store);

const classObject = computed({
    get() {
        return [
            position.value ? `key_position__${position.value}` : '', 
            size.value ? `key_size__${size.value}` : '', 
            isCurrent.value ? 'key_status__current' : '', 
            isMistake.value ? 'key_status__mistake' : '',
        ]
    }
})

function checkStatus() {
    if (currentLetter.value.toLowerCase() === innerText.value 
            || currentLetter.value === ' ' && innerText.value === 'space') {
        isMistake.value = false;
        isCurrent.value = true;
    }
    else {
        isMistake.value = false;
        isCurrent.value = false;
    }
    
    if (/^[A-Z]*$/.test(currentLetter.value) 
            && innerText.value.includes('shift'))
    {
        isMistake.value = false;
        isCurrent.value = true;
    }
}

function lightMistake() {
    if (lastMistake.value === innerText.value
    || lastMistake.value === ' ' && innerText.value === 'Space') {
        isMistake.value = true;
    }
}

watch(currentLetter, () => {
    checkStatus()
})

watch(lastMistake, () => {
    lightMistake()
})
</script>

<style lang="scss" scoped>
.key {
    width: 46px;
    height: 100%;

    padding: 0 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: $kb-text-color;
    font-size: 16px;
    font-weight: 300;
    line-height: 17.6px;
    text-transform: uppercase;

    background-color: $kb-bg-color;
    border-radius: 4px;

    &_size {
        &__1 {
            width: 72px;

            font-size: 12px;
        }

        &__2 {
            width: 87px;
            
            font-size: 12px;
        }

        &__3 {
            width: 110px;

            font-size: 12px;
        }

        &__4 {
            width: 390px;
        }
    }

    &_position {
        &__left {
            justify-content: start;
        }

        &__right {
            justify-content: end;
        }
    }

    &_status {
        &__current {
            color: $kb-current-text-color;
        }

        &__mistake {
        color: $kb-mistake-text-color;
        }
    }
}
</style>