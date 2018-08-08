const defaultCommand = 'Say the command to animate';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;

function keepListening() {
  recognition.start();
}

new Vue({
  el: '#app',
  data: {
    isMicOn: false,
    message: '',
    animate: '',
    commands: [
      'huge',
      'tiny',
      'spin'
    ]
  },
  methods: {
    toggleMic() {
      this.isMicOn = !this.isMicOn;
      this.isMicOn ? this.startSpeech() : this.endSpeech();
    },
    startSpeech() {
      recognition.lang = 'en-US';
      recognition.interimResults = true;

      recognition.addEventListener('result', (e) => {
        const rawTranscript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');

        let transcript = rawTranscript.toLowerCase();

        this.commands.forEach(command => {
          if(transcript.includes(command)) {
            this.animate = command;
            transcript = transcript.replace(command, `<span>${command}</span>`)
            setTimeout(() => {
              this.animate = '';
            }, 1100);
          }
        })
        this.message = transcript;
      });
      recognition.start();
      recognition.addEventListener('end', keepListening)
    },
    endSpeech() {
      this.message = '';
      this.animate = '';
      recognition.stop();
      recognition.removeEventListener('end', keepListening)
    }
  }
})
