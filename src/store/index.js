import { computed } from '@vue/reactivity';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useIndexStore = defineStore('index',() => {
    // Text data
    const text = ref('');
    const processedText = computed(() => text.value.split('').filter(filterDoubleSpaces));

    // Current letter data
    const currentLetterIndex = ref(0);
    const currentLetter = computed(() => processedText.value[currentLetterIndex.value]);

    // Total taps
    const taps = ref(0);

    // Mistakes data
    const mistakes = computed(() => taps.value - currentLetterIndex.value);
    const lastMistake = ref('');

    // Timer ID
    const timer = ref(0);
    const timerID = ref(undefined)

    async function fetchText() {
        // Fetching text
        let response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1&paras=1&format=text', 
        function(baconGoodness){
            resolve(baconGoodness[0]);
        })
        
        text.value = await response.text();
    }  

    function nextLetter() {
        // Incrementing current letter data
        currentLetterIndex.value++;
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

    function onKeyDown(event) {
        event.preventDefault();
        
        if (event.key !== 'Shift') {
            // Successes handling
            if(event.key === currentLetter.value){            
                if (currentLetterIndex.value === processedText.value.length - 1) {
                    finish();
                }
                else {
                    nextLetter();
                }            
            }
            // Mistakes handling
            else {
                setLastMistake(event.key)
            }
            
            incrementTaps();
        }
    
        return false
    }

    function startReset() {
        // Resetting variables on restart
        currentLetterIndex.value = 0;
        taps.value = 0;
        lastMistake.value = '';
        timer.value = 0;

        window.removeEventListener('keydown', onKeyDown)
        window.addEventListener('keydown', onKeyDown)

        if (typeof timerID.value !== 'undefined'){
            clearInterval(timerID.value);        
        }

        fetchText();
        timerID.value = setInterval(()=> {
            timer.value++
        }, 1000)
    }

    function finish() {
        clearInterval(timerID.value);
        window.removeEventListener('keydown', onKeyDown)
    }

    return {processedText, currentLetterIndex, currentLetter, taps, lastMistake, timer, fetchText, nextLetter, incrementTaps, setLastMistake, startReset, finish}
})