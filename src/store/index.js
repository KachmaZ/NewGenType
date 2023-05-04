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
    const lastMistake = ref('');

    // Timer ID
    const timer = ref(0);
    const timerID = ref(undefined)

    async function fetchText() {
        // Fetching text from public API
        let response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1&paras=1&format=text', 
        function(baconGoodness){
            resolve(baconGoodness[0]);
        })
        
        text.value = await response.text();
    }  

    // Incrementing current letter data
    function nextLetter() {
        currentLetterIndex.value++;
    }

    // Increment taps data
    function incrementTaps() {
        taps.value++;
    }

    // Increment mistakes data
    function setLastMistake(newMistake) {
        lastMistake.value = newMistake;
    }

    // Function to fix double-space bug
    function filterDoubleSpaces(letter, index, text) {
        // Text preprocessing: remove double whitespaces after dots
        return !(text[index] === ' ' && text[index - 1] === ' ');
    }

    // Keyboard handler
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

    // Emits on start button click
    function startReset() {
        // Resetting variables on restart
        currentLetterIndex.value = 0;
        taps.value = 0;
        lastMistake.value = '';
        timer.value = 0;

        if (typeof timerID.value !== 'undefined'){
            clearInterval(timerID.value);        
        }
        timerID.value = setInterval(()=> {
            timer.value++
        }, 1000)


        // Refreshing onKeyDown event listener
        window.removeEventListener('keydown', onKeyDown)
        window.addEventListener('keydown', onKeyDown)

        // Fetching new text
        fetchText();
    }

    // Emits on finishing text input
    function finish() {
        clearInterval(timerID.value);
        window.removeEventListener('keydown', onKeyDown)
    }

    return {
        processedText, 
        currentLetterIndex, 
        currentLetter, 
        taps, 
        lastMistake, 
        timer, 
        fetchText, 
        nextLetter, 
        incrementTaps, 
        setLastMistake, 
        startReset, 
        finish
    }
})