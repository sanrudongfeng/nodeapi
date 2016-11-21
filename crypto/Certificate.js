/**
 * 对应于新增的keygen元素
 */

const crypto = require('crypto');

const cert1 = new crypto.Certificate();

console.log('cert1',cert1);
const cert2 = crypto.Certificate();
console.log('cert2',cert2);