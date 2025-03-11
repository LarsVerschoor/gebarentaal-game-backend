const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

const keysDir = path.join(__dirname, 'keys');
if (!fs.existsSync(keysDir)) {
    fs.mkdirSync(keysDir);
}

fs.writeFileSync(path.join(keysDir, 'private.key'), privateKey);
fs.writeFileSync(path.join(keysDir, 'public.key'), publicKey);

console.log('RSA key pair generated successfully!');