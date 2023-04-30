<template>
    <div class="key" :class="classObject">
        {{ value }}
    </div>
</template>

<script setup>
import {computed, toRefs} from "vue";

const props = defineProps({
  value: String,
  size: Number,
});

const {value, size} = toRefs(props);

const classObject = computed({
    get() {
        console.log(size.value);
        return size.value?`key_size${size.value}`:''
    }
})
</script>

<style lang="scss" scoped>
.key {
    width: 46px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: $kb-text-color;
    font-size: 16px;
    font-weight: 300;
    line-height: 17.6px;

    background-color: $kb-bg-color;
    border-radius: 4px;
}

.key_size1 {
    width: 72px;

    font-size: 12px;
}
.key_size2 {
    width: 87px;
}
.key_size3 {
    width: 110px;
}
.key_size4 {
    width: 390px;
}
</style>