import { computed } from '@vue/reactivity';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useIndexStore = defineStore('index',() => {
    // Text data
    const text = ref('');
    const processedText = computed(() => text.value.split('').filter(filterDoubleSpaces));

    // Current letter data
    const currentLetterIndex = ref(0);
    const currentLetter = ref('');

    // Total taps
    const taps = ref(0);

    // Mistakes data
    const mistakes = computed(() => taps.value - currentLetterIndex.value);
    const lastMistake = ref('');

    async function fetchText() {
        // Fetching text
        let response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1&paras=2&format=text', 
        function(baconGoodness){
            resolve(baconGoodness[0]);
        })
        
        text.value = await response.text();

        // Resetting variables on restart
        currentLetterIndex.value = 0;
        currentLetter.value = processedText.value[currentLetterIndex.value];
    }  

    function nextLetter() {
        // Incrementing current letter data
        currentLetterIndex.value++;
        currentLetter.value = text.value[currentLetterIndex.value];
    }

    function incrementTaps() {
        // Increment taps data
        taps.value++;
    }

    function setLastMistake(newMistake) {
        // Increment mistakes data
        lastMistake.value = newMistake;
    }

    function filterDoubleSpaces(letter, index, text) {
        // Text preprocessing: remove double whitespaces after dots
        return !(text[index] === ' ' && text[index - 1] === ' ');
    }

    function startReset() {
        fetchText();
    }

    return {processedText, currentLetterIndex, currentLetter, taps, mistakes, lastMistake, fetchText, nextLetter, incrementTaps, setLastMistake, startReset}
})