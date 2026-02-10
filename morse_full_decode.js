const fs = require('fs');

const morse = "--... / .--. - / --.. - .... ... ... / .. -... .- / -- .-.. ..- .--- .-.. -.- / ... .--. .-. ..-. / .--. - / -. -.-- .... ..- -.- / .... / .-.. . .... -- ..-. / .--- -... ... -.- / .--. ..- / .... / ... .-.. .... -.-- ..- .--. ..- -. / ... ..- ..- -.. / .. .-.. --.. .--. -.- .-.. / .- --- .-.. / --- .. ... ... --.. / -.. --- .-.. -.-- .-.. / -.- .--. ... ...- - .... ..-. --.. / -. -.-- ...- -.. / .--. / -.-- .--. --.. .-.. / -... .-- / -.. -... .--. .-.. / --.. ...- -.. / .... ..- -.. / --.. ...- -.. / ... .-.. -- .- / .. .-.. -- .- .--. ..- -.- / .- --- .-.. / .. -... .--. ... -.. .--. ..- -. / .- --- .... .... / -. -.-- .... ..- .... .-.. -.- / .- --- .-.. / --.. .--- .-. ... ... / -- .--. ..- -.. / -... .-.. / .--. ..- / .... / - .-.. .- .-.. ... / .. ... -.. ...";

const morseToChar = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '/': ' '
};

const morseDecoded = morse.split(' ').map(code => morseToChar[code] || '').join('');

function caesarDecrypt(text, shift) {
    return text.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
    });
}

const plainText = caesarDecrypt(morseDecoded, 7);

const output = `MORSE CODE:
${morse}

AFTER MORSE DECODE (Caesar shifted):
${morseDecoded}

FINAL PLAIN TEXT (after Caesar -7):
${plainText}
`;

fs.writeFileSync('morse_decode_result.txt', output);
console.log(output);
