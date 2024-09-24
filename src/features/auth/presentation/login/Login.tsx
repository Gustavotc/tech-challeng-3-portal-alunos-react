import React, { useState } from 'react';
import { useLogin } from '../../domain/usecases/useLogin';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await useLogin(email, password);
      console.log('User logged in:', user);
      // Redirecionar ou exibir feedback de sucesso
    } catch (error) {
      console.error('Login failed:', error);
      // Exibir mensagem de erro
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};
