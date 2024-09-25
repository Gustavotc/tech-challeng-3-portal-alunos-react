import React, { useState } from 'react';
import { useLogin } from '../../domain/usecases/useLogin'; // Hook de login
import { 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  Heading, 
  VStack, 
  Alert, 
  AlertIcon 
} from '@chakra-ui/react';
import { IAuthUser } from '../../domain/interfaces/IAuthUser';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // O Hook deve ser chamado fora de qualquer função interna
  const { login } = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const auth : IAuthUser = {
        email,
        password
      }

      const user = await login(auth); // Chamando a função de login
      console.log('User logged in:', user);
      // Redirecionar ou exibir feedback de sucesso
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Email ou senha incorretos');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Heading mb={6}>Login</Heading>
      {errorMessage && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Digite seu email"
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <Input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Digite sua senha"
            />
          </FormControl>

          <Button colorScheme="blue" type="submit" width="full">
            Entrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
