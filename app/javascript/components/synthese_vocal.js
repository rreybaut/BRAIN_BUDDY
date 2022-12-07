export const syntheseVocal = () => {
  function speakNow(text) {
    const message = new SpeechSynthesisUtterance(text);
    message.lang = "fr-FR";

    const voices = speechSynthesis.getVoices().filter(voice => voice.lang === "en-US");
    message.voice = voices[0];

    speechSynthesis.speak(message);
  }

  const button = document.querySelector("#speak-now");
  button.addEventListener("click", () => {
    speakNow(`Hello Diana sa farte`)
  });
}
