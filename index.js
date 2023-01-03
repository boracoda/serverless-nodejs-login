"use strict";

import * as crypto from './src/crypto/index'

module.exports.login = async (event) => {

  /* Parâmetros da URL */
  const data = event.queryStringParameters;
  if (!data) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: 'Necessário informar os parâmetros para prosseguir.'
      })
      
    }
  }

  /* Caso não receba o email ou password */
  if (!data.email || !data.password) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: 'Necessário informar os parâmetros [email, password].'
      })
    }
  }

  /* Recupera os dados do usuário */
  const email    = data.email;
  const password = await crypto.encrypt(data.password);

  /* Valida o usuário e senha */

  return {
    statusCode: 200,
    body: JSON.stringify({
      email: email,
      password: password,
      access_token: '',
      expires_at: ''
    }),
    
  };

};
