// Decode Round 5 cipher
const cipher = "==gS5eNkssDkeIJGso2F0Ctj0UOPg1tjoIJioYEGaIJh0s2CndZGsQOknLNPsaDhzIJGbMNkgIZZndNiwY3jndJkwCujtIfibIJSgCtkoCNin8tAnYZlyUOPsoNknjtiwo2F19NknBtiwiI3jn4DGr92iIZXndJhusNhnXEhnrujfM2FnrLP0CDllndpjsk3idIfibIfhbstjrIZZGso2F0Ctj0UOPg1tjoIJioYEGaIJh0s2CndZGsQOknLNvP0saDhzIJGbMNkgIZZndNiwY3jndJkwCujtIfibIJSgOt";

// Step 1: Decode Base64
const afterBase64 = Buffer.from(cipher, 'base64').toString('utf8');
console.log("After Base64 decode:", afterBase64.substring(0, 100) + "...");

// Step 2: Reverse
const afterReverse = afterBase64.split('').reverse().join('');
console.log("\nAfter Reverse:", afterReverse.substring(0, 100) + "...");

// Step 3: Caesar -7 (decrypt)
function caesarDecrypt(text, shift) {
    return text.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
    });
}

const final = caesarDecrypt(afterReverse, 7);
console.log("\nFINAL DECODED TEXT:");
console.log(final);
