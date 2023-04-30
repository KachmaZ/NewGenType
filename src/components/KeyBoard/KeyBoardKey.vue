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
  position: String,
});

const {value, size, position} = toRefs(props);

const classObject = computed({
    get() {
        let position_class;
        const size_class = size.value?`key_size__${size.value}`:'';
        if (position.value === 'left') {
            position_class = "key_position__left"
        }
        else if (position.value === 'right') {
            position_class = "key_position__right"
        }

        return [position_class, size_class]
    }
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
}
</style>