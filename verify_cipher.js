const fs = require('fs');

// Original cipher from NEW_RIDDLE_GUIDE.md
const cipher = "==nS5eNkssDkeIJGso2F0Ctj0UOPg1tjoIJioYEGaIJh0s2CndZGsQOknLNPsaDhzIJGbMNkgIZZndNiwY3jndJkwCujtIfibIJSgCtkoCNin8tAn4ZlyUOPsoNknjtiwo2F19NknBtiwI3jn4DGr92i3IZXndJhusNhnXEhnrujfM2FnrLP0CDllndpjsk3idIfibIfhbstjrIZZGso2F0Ctj0UOPg1tjoIJioYEGaIJh0s2CndZGsQOknLNPsaDhzIJGbMNkgIZZndNiwY3jndJkwCujtIfibIJSgOt";

const expected = "I'm small but fenced like I'm grand, A leafy child in a learning land. Beside the halls where diplomas grow, I rise up quiet, slow and low. Left behind the building that grants the scroll — Find me in a metal bowl.";

// Decode
const step1 = Buffer.from(cipher, 'base64').toString('utf8');
const step2 = step1.split('').reverse().join('');
const step3 = step2.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base - 7 + 26) % 26) + base);
});

const result = `
CIPHER FROM GUIDE:
${cipher}

EXPECTED PLAIN TEXT:
${expected}

DECODED RESULT:
${step3}

MATCH: ${step3 === expected}
`;

fs.writeFileSync('decode_result.txt', result);
console.log("Results saved to decode_result.txt");
console.log("Match:", step3 === expected);
