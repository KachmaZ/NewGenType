<template>
    <span class="text-unit" :class="{
        'text-unit__current': isCurrent, 
        'text-unit__passed': isPassed, 
        'text-unit__mistake': isMistake}"
        >
        {{ value }}        
    </span>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, watch} from 'vue';
import { useIndexStore } from '../../store';

const props = defineProps({
  value: String,
  orderNumber: Number,
});

const store = useIndexStore();

const isMistake = ref(false);
const isCurrent = ref(store.currentLetterIndex === props.orderNumber);
const isPassed = ref(false);

const {currentLetterIndex, lastMistake} = storeToRefs(store)

function checkStatus() {
    if (currentLetterIndex.value === props.orderNumber) {
        isMistake.value = false;
        isCurrent.value = true;
        isPassed.value = false;
    }
    else if (currentLetterIndex.value > props.orderNumber) {
        isMistake.value = false;
        isCurrent.value = false;
        isPassed.value = true;
    }
    else {        
        isMistake.value = false;
        isCurrent.value = currentLetterIndex.value === props.orderNumber;
        isPassed.value = false;
    }
}

function lightMistake() {
    if (currentLetterIndex.value === props.orderNumber) {
        isMistake.value = true;
    }
}

watch(currentLetterIndex, () => {
    checkStatus();
});

watch(lastMistake, () => {
    lightMistake();
});
</script>

<style lang="scss" scoped>
.text-unit {
    display: inline-block;

    line-height: 18px;
    white-space: pre-wrap;

    transition: linear 100ms;

    border-radius: 4px;
    &__current {
        transform: scale(1.2);
    }

    &__passed {
        color: $complite-text-color;
    }

    &__mistake {
        background-color: $mistake-bg-color;

    }
}
</style>