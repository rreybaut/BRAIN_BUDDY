export const syntheseVocal = () => {
  function speakNow(text) {
    const message = new SpeechSynthesisUtterance(text);
    message.lang = "fr-FR";

    const voices = speechSynthesis.getVoices().filter(voice => voice.lang === "en-US");
    message.voice = voices[0];

    speechSynthesis.speak(message);
  }

  const title = document.querySelector('.obj-postit:last-child h5').innerHTML;
  const taskList = document.querySelectorAll('.obj-postit:last-child li a');
  const button = document.querySelector("#speak-now");
  button.addEventListener("click", () => {
    speakNow( `Votre liste ${title} contient` );

    taskList.forEach((element)=>{
      speakNow( `${element.innerHTML}` )
      console.log(element.innerHTML)
    })
  });
}
