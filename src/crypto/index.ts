"use strict";

import * as crypto from 'crypto';

const ALGORIT : any = 'aes-256-cbc'
const ENC_KEY : any = process.env.APP_KEY;
const IV      : any = crypto.randomBytes(16);

const encrypt = ((val: any) => {

    let cipher    = crypto.createCipheriv(ALGORIT, Buffer.from(ENC_KEY, 'base64'), IV);
    let encrypted = cipher.update(val, 'utf8', 'base64');
    encrypted    += cipher.final('base64');

    return encrypted;

});

const decrypt = ((encrypted: any) => {
    
    let decipher  = crypto.createCipheriv(ALGORIT, Buffer.from(ENC_KEY, 'base64'), IV);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');

    return (decrypted + decipher.final('utf8'));

});

module.exports = {encrypt, decrypt}