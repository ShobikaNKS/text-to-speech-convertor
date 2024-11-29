let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice

    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.options[i] = option;
    });
}

populateVoices(); // Initial population
if (typeof speechSynthesis.onvoiceschanged !== "undefined") {
    speechSynthesis.onvoiceschanged = populateVoices; // Re-populate if voices change
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.selectedIndex];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
