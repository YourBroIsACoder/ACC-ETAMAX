// Decode Morse + Caesar for Round 5
const morse = "--... / .--. - / --.. - .... ... ... / .. -... .- / -- .-.. ..- .--- .-.. -.- / ... .--. .-. ..-. / .--. - / -. -.-- .... ..- -.- / .... / .-.. . .... -- ..-. / .--- -... ... -.- / .--. ..- / .... / ... .-.. .... -.-- ..- .--. ..- -. / ... ..- ..- -.. / .. .-.. --.. .--. -.- .-.. / .- --- .-.. / --- .. ... ... --.. / -.. --- .-.. -.-- .-.. / -.- .--. ... ...- - .... ..-. --.. / -. -.-- ...- -.. / .--. / -.-- .--. --.. .-.. / -... .-- / -.. -... .--. .-.. / --.. ...- -.. / .... ..- -.. / --.. ...- -.. / ... .-.. -- .- / .. .-.. -- .- .--. ..- -.- / .- --- .-.. / .. -... .--. ... -.. .--. ..- -. / .- --- .... .... / -. -.-- .... ..- .... .-.. -.- / .- --- .-.. / --.. .--- .-. ... ... / -- .--. ..- -.. / -... .-.. / .--. ..- / .... / - .-.. .... .-.. ... / .. ... -.. ...";

// Morse code mapping
const morseToChar = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '/': ' '
};

// Step 1: Decode Morse
const morseDecoded = morse.split(' ').map(code => morseToChar[code] || '').join('');
console.log("After Morse Decode:");
console.log(morseDecoded);
console.log();

// Step 2: Caesar -7 (decrypt)
function caesarDecrypt(text, shift) {
    return text.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
    });
}

const plainText = caesarDecrypt(morseDecoded, 7);
console.log("Final Plain Text (after Caesar -7):");
console.log(plainText);
