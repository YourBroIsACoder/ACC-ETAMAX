const plainText = "I'm small but fenced like I'm grand, A leafy child in a learning land. Beside the halls where diplomas grow, I rise up quiet, slow and low. Left behind the building that grants the scroll — Find me in a metal bowl.";

// Caesar +7
function caesar(text, shift) {
    return text.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + shift) % 26) + base);
    });
}

const afterCaesar = caesar(plainText, 7);
const afterReverse = afterCaesar.split('').reverse().join('');
const final = Buffer.from(afterReverse).toString('base64');

console.log(final);
