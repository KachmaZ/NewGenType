<template>
    <span class="text-unit" :class="{
        'text-unit__current': isCurrent, 
        'text-unit__passed': isPassed, 
        'text-unit_mistake': isMistake}"
        >
        {{ value }}
    </span>
</template>

<script setup>
import { ref} from 'vue';
import { useIndexStore } from '../../store';

const props = defineProps({
  value: String,
  orderNumber: Number,
});

const store = useIndexStore();

const isMistake = ref(false);
const isCurrent = ref(store.currentLetterIndex === props.orderNumber);
const isPassed = ref(false);

function checkStatus() {
    if (store.currentLetterIndex === props.orderNumber) {
        isMistake.value = false;
        isCurrent.value = true;
        isPassed.value = false;
    }
    else if (store.currentLetterIndex > props.orderNumber) {
        isMistake.value = false;
        isCurrent.value = false;
        isPassed.value = true;
    }
    else {        
        isMistake.value = false;
        isCurrent.value = store.currentLetterIndex === props.orderNumber;
        isPassed.value = false;
    }
}

store.$subscribe((mutation, state) => {
    console.log(state.currentLetterIndex)
    if (state.currentLetterIndex !== undefined) {
        checkStatus()
    }
})
</script>

<style lang="scss" scoped>
.text-unit {
    border-radius: 2px;
    &__current {
        background-color: $current-bg-color;
    }

    &__passed {
        color: $complite-text-color;
    }

    &__mistake {
        background-color: $mistake-bg-color;

    }
}
</style>