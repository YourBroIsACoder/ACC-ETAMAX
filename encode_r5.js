const fs = require('fs');

const plain = "I'm small but fenced like I'm grand, A leafy child in a learning land. Beside the halls where diplomas grow, I rise up quiet, slow and low. Left behind the building that grants the scroll — Find me in a metal bowl.";

// Encode: Plain → Caesar(+7) → Reverse → Base64

function caesar(text, shift) {
    return text.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
    });
}

const step1 = caesar(plain, 7);
const step2 = step1.split('').reverse().join('');
const step3 = Buffer.from(step2).toString('base64');

fs.writeFileSync('encoded_r5.txt', step3);
console.log("GENERATED CIPHER:");
console.log(step3);
