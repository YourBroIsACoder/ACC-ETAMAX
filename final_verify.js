const cipher = "LnNkdmkgc2hhbHQgaCB1cCBsdCBrdXBNIOKAlCBzc3Z5anogbG9hIHphdWh5biBhaG9hIG51cGtzcGJpIGxvYSBrdXBvbGkgYW1sUyAuZHZzIGt1aCBkdnN6ICxhbHBieCB3YiBsenB5IFAgLGR2eW4gemh0dnN3cGsgbHlsb2QgenNzaG8gbG9hIGxrcHpsSSAua3VocyBudXB1eWhscyBoIHVwIGtzcG9qIGZtaGxzIEggLGt1aHluIHQnUCBscnBzIGtsanVsbSBhYmkgc3NodHogdCdQ";

const step1 = Buffer.from(cipher, 'base64').toString('utf8');
const step2 = step1.split('').reverse().join('');
const step3 = step2.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base - 7 + 26) % 26) + base);
});

console.log("DECODED:");
console.log(step3);
