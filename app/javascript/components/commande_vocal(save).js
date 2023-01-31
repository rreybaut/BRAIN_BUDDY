export const commandeVocal = () => {
  var startTranscript = document.getElementById("startTranscript");

  if (startTranscript) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    var diagnosticPara = document.querySelector('.output');

    function testSpeech() {
      startTranscript.disabled = true;
      startTranscript.textContent = 'Audio...';

      // To ensure case consistency while checking with the returned output text

      diagnosticPara.textContent = '...votre message';

      var recognition = new SpeechRecognition();
      var speechRecognitionList = new SpeechGrammarList();
      // speechRecognitionList.addFromString(grammar, 1);
      // recognition.grammars = speechRecognitionList;
      recognition.lang = 'fr-FR';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.start();

      recognition.onresult = function(event) {
        // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
        // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
        // It has a getter so it can be accessed like an array
        // The first [0] returns the SpeechRecognitionResult at position 0.
        // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
        // These also have getters so they can be accessed like arrays.
        // The second [0] returns the SpeechRecognitionAlternative at position 0.
        // We then return the transcript property of the SpeechRecognitionAlternative object
        var speechResult = event.results[0][0].transcript.toLowerCase();
        diagnosticPara.textContent = 'Message reçu: ' + speechResult + '.';

        console.log('Confidence: ' + event.results[0][0].confidence);

        if (event.results[0][0].confidence > 0.7) {
          if (speechResult.split(' ').includes('accueil') || speechResult.split(' ').includes('cueille')) {
            document.location.assign('/')
          }
          if (speechResult.split(' ').includes('list') || speechResult.split(' ').includes('liste')) {
            document.location.assign('/lists')
          }
          if (speechResult.split(' ').includes('gps') || speechResult.split(' ').includes('localisation')) {
            document.location.assign('/localisations')
          }
          if (speechResult.split(' ').includes('photo') || speechResult.split(' ').includes('photos')) {
            document.location.assign('/nfts')
          }
          if (speechResult.split(' ').includes('enregistrer') || speechResult.split(' ').includes('enregistré')) {
            document.querySelector('#startRecordingButton').click()
          }
        }
        console.log('result', speechResult);
      }

      recognition.onspeechend = function() {
        recognition.stop();
        startTranscript.disabled = false;
        startTranscript.textContent = 'Parlez';
      }

      recognition.onerror = function(event) {
        startTranscript.disabled = false;
        startTranscript.textContent = 'Recommencez';
        diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
      }
    }

    startTranscript.addEventListener('click', testSpeech);
  }
}
