// Quick cipher encoder for Round 5
const plainText = "I'm small but fenced like I'm grand, A leafy child in a learning land. Beside the halls where diplomas grow, I rise up quiet, slow and low. Left behind the building that grants the scroll — Find me in a metal bowl.";

// Step 1: Caesar +7
function caesarEncrypt(text, shift) {
    return text.replace(/[a-zA-Z]/g, char => {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
    });
}

// Step 2: Reverse
function reverse(text) {
    return text.split('').reverse().join('');
}

// Step 3: Base64
function toBase64(text) {
    return Buffer.from(text).toString('base64');
}

const step1 = caesarEncrypt(plainText, 7);
console.log("After Caesar +7:", step1);

const step2 = reverse(step1);
console.log("After Reverse:", step2);

const step3 = toBase64(step2);
console.log("After Base64:", step3);

console.log("\n=== FINAL ENCRYPTED ===");
console.log(step3);
