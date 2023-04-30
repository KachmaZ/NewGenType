import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useIndexStore = defineStore('index',() => {
    const text = ref('');
    const currentLetterIndex = ref(0)
    const currentLetter = ref('')

    async function fetchText() {
        // Fetching text
        let response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&start-with-lorem=1&paras=2&format=text', 
        function(baconGoodness){
            resolve(baconGoodness[0]);
        })
        
        text.value = await response.text();

        // Resetting variables on restart
        currentLetterIndex.value = 0;
        currentLetter.value = text.value[currentLetterIndex.value];
    }  

    function nextLetter() {
        currentLetterIndex.value++;
        currentLetter.value = text.value[currentLetterIndex.value]
    }

    function startReset() {
        fetchText();
    }

    return {text, currentLetterIndex, currentLetter, fetchText, nextLetter, startReset}
})