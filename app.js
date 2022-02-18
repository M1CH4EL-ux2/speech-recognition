const btnPlay = document.querySelector('.play');
const output = document.querySelector('.content');

const start = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.interimResults = true;
    recognition.lang = 'pt-BR';
    recognition.continuous = true;
    recognition.start();

    const content = null;

    recognition.onresult = function (event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                content = event.results[i][0].transcript.trim();
                output.textContent = content;
            }
        }
    }
    
    return content
    
}

btnPlay.addEventListener('click', () => start())


console.log(start())