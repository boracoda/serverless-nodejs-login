"use strict";

const mysql = require('connect')

const login = (async (email: any, password: any) => {
    
    /* Valida o endereço de e-mail */
    let queryEmail = await mysql.query('SELECT * FROM usuarios WHERE email = ?', [email])
    if (!queryEmail) {

    }

    /* Valida o password do cliente */
    


});

module.exports = { login }