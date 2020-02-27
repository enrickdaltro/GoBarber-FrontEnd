import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/1581704670044-attachment.svg';

export default function SignUn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
