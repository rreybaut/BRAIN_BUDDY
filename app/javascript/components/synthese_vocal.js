export const syntheseVocal = () => {
  function speakNow() {
    const message = new SpeechSynthesisUtterance("Bonjour");
    message.lang = "fr-FR";

    const voices = speechSynthesis.getVoices().filter(voice => voice.lang === "en-US");
    message.voice = voices[0];

    speechSynthesis.speak(message);
  }
}
