export const commandeVocal = () => {
  var testBtn = document.querySelector('button');

  if (testBtn) {

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    var phrases = [
      'j\'enregistre un message',
      'comment ça va',
      'je vais à l\'école',
      'je mange une pomme',
      'le chien aboie',
      'le poisson nage',
      'bonne journée',
      'au revoir à lundi'
    ];

    var phrasePara = document.querySelector('.phrase');
    var resultPara = document.querySelector('.result');
    var diagnosticPara = document.querySelector('.output');


    function randomPhrase() {
    var number = Math.floor(Math.random() * phrases.length);
    return number;
  }

  function testSpeech() {
    testBtn.disabled = true;
    testBtn.textContent = 'Test en cours';

    var phrase = phrases[randomPhrase()];
    // To ensure case consistency while checking with the returned output text
    phrase = phrase.toLowerCase();
    phrasePara.textContent = phrase;
    resultPara.textContent = 'Bonjour poto';
    resultPara.style.background = 'rgba(0,0,0,0.2)';
    diagnosticPara.textContent = '...diagnostic messages';

    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
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
      if(speechResult === phrase) {
        resultPara.textContent = 'Bonne prononciation, bravo!';
        resultPara.style.background = 'lime';
      } else {
        resultPara.textContent = 'Ce n\'est pas bon.';
        resultPara.style.background = 'red';
      }

      console.log('Confidence: ' + event.results[0][0].confidence);
    }


    //test 2
    //   recognition.onresult = function(event) {
  //     var interim_transcript = '';

  //     for (var i = event.resultIndex; i < event.results.length; ++i) {
  //       if (event.results[i].isFinal) {
  //         final_transcript += event.results[i][0].transcript;
  //       } else {
  //         interim_transcript += event.results[i][0].transcript;
  //       }
  //     }
  //     final_transcript = capitalize(final_transcript);
  //     final_span.innerHTML = linebreak(final_transcript);
  //     interim_span.innerHTML = linebreak(interim_transcript);
  //   };
  // }

  // Commande vocale navigation

    recognition.onspeechend = function() {
      recognition.stop();
      testBtn.disabled = false;
      testBtn.textContent = 'Nouveau test';
    }

    recognition.onerror = function(event) {
      testBtn.disabled = false;
      testBtn.textContent = 'Nouveau test';
      diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
    }

    recognition.onaudiostart = function(event) {
        //Fired when the user agent has started to capture audio.
        console.log('SpeechRecognition.onaudiostart');
      }

      recognition.onaudioend = function(event) {
        //Fired when the user agent has finished capturing audio.
        console.log('SpeechRecognition.onaudioend');
      }

      recognition.onend = function(event) {
        //Fired when the speech recognition service has disconnected.
        console.log('SpeechRecognition.onend');
      }

      recognition.onnomatch = function(event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        console.log('SpeechRecognition.onnomatch');
      }

      recognition.onsoundstart = function(event) {
        //Fired when any sound — recognisable speech or not — has been detected.
        console.log('SpeechRecognition.onsoundstart');
      }

      recognition.onsoundend = function(event) {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
        console.log('SpeechRecognition.onsoundend');
      }

    recognition.onspeechstart = function (event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        console.log('SpeechRecognition.onspeechstart');
    }
    recognition.onstart = function(event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        console.log('SpeechRecognition.onstart');
      }
    }

    testBtn.addEventListener('click', testSpeech);






  }


}
