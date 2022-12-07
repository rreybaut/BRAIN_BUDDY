export const commandeVocal = () => {
  var startTranscript = document.getElementById("startTranscript");

  if (startTranscript) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    var diagnosticPara = document.querySelector('.output');

    function testSpeech() {
      startTranscript.disabled = true;
      startTranscript.textContent = 'Test en cours';

      // To ensure case consistency while checking with the returned output text

      diagnosticPara.textContent = '...diagnostic messages';

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
        diagnosticPara.textContent = 'Speech received: ' + speechResult + '.';

        console.log('Confidence: ' + event.results[0][0].confidence);

        if (event.results[0][0].confidence > 0.7) {
          if (speechResult.split(' ').includes('accueil') || speechResult.split(' ').includes('cueille')) {
            document.location.assign('/')
          }
          if (speechResult.split(' ').includes('list') || speechResult.split(' ').includes('liste')) {
            document.location.assign('/lists')
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
        startTranscript.textContent = 'Nouveau test';
      }

      recognition.onerror = function(event) {
        startTranscript.disabled = false;
        startTranscript.textContent = 'Nouveau test';
        diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
      }

      // recognition.onaudiostart = function(event) {
      //     //Fired when the user agent has started to capture audio.
      //     console.log('SpeechRecognition.onaudiostart');
      // }

      // recognition.onaudioend = function(event) {
      //     //Fired when the user agent has finished capturing audio.
      //     console.log('SpeechRecognition.onaudioend');
      // }

      // recognition.onend = function(event) {
      //     //Fired when the speech recognition service has disconnected.
      //     console.log('SpeechRecognition.onend');
      // }

      // recognition.onnomatch = function(event) {
      //     //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      //     console.log('SpeechRecognition.onnomatch');
      // }

      // recognition.onsoundstart = function(event) {
      //     //Fired when any sound — recognisable speech or not — has been detected.
      //     console.log('SpeechRecognition.onsoundstart');
      // }

      // recognition.onsoundend = function(event) {
      //     //Fired when any sound — recognisable speech or not — has stopped being detected.
      //     console.log('SpeechRecognition.onsoundend');
      // }

      // recognition.onspeechstart = function (event) {
      //     //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      //     console.log('SpeechRecognition.onspeechstart');
      // }
      // recognition.onstart = function(event) {
      //     //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      //     console.log('SpeechRecognition.onstart');
      // }
    }

    startTranscript.addEventListener('click', testSpeech);
  }
}
