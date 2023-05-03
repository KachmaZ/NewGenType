<template>
    <div class="indicator">
        <div class="indicator_data">
            <span class="indicator_data_value">{{ indicatorValue }}</span>
            <span class="indicator_data_measure">{{ measure }}</span>
        </div>
        <div class="indicator_title" @click="test">
            {{ title }}
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useIndexStore } from "../../store";

const store = useIndexStore();

const props = defineProps({
    title: String,
    measure: String,
    firstParam: String,
    secondParam: String,
    multiplier: Number,
});


// const firstParam = computed(() => {store[props.firstParam]})
// const secondParam = computed(() => {store[`${props.secondParam}`]})

const indicatorValue = computed(() => {
    if (store[`${props.firstParam}`] && store[`${props.secondParam}`]) {
        return (store[`${props.firstParam}`] / store[`${props.secondParam}`] * props.multiplier).toFixed()
    }
    else {
        return 0;
    } 
});

function test() {
    console.log(store['taps'])
    console.log(store[`${props.secondParam}`])
    console.log(store[`${props.firstParam}`], store[`${props.secondParam}`])
}
</script>

<style lang="scss" scoped>
.indicator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    &_data {
        &_value {
            font-size: 32px;
            font-weight: 300;
        }
        &_measure {
            font-size: 12px;
        }
    }

    &_title {
        color: $complite-text-color;
    }
}
</style>