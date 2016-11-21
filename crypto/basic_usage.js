
//Determining if crypto support is unavailable
var crypto;
try {
    crypto = require('crypto');
    console.log('crypto support is able!');
} catch (err) {
    console.log('crypto support is disabled!');
}
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love cupcakes')
    .digest('hex');
console.log(hash);