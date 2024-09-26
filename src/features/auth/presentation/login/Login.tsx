import { useState } from 'react';
import { useLogin } from '../../domain/usecases/useLogin'; // Hook de login
import { 
  FormControl, 
  FormLabel, 
  Input, 
  Button, 
  VStack, 
  Alert, 
  AlertIcon, 
  Image,
  HStack
} from '@chakra-ui/react';
import { IAuthUser } from '../../domain/interfaces/IAuthUser';
import NavBar from '../../../post/presentation/components/navBar/Navbar';
import Footer from '../../../post/presentation/components/footer/Footer';
import logoGrande from '../../../../assets/LogoGrande.png';
import homeImage from '../../../../assets/HomeImage.png';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // O Hook deve ser chamado fora de qualquer função interna
  const { login } = useLogin();

  const handleLogin = async () => {
    
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
    <VStack flex={1}>
      <NavBar />
      <HStack 
        flex={1}
        marginTop="80px"
        paddingLeft={{ base: "8", md: "24" }}
        paddingRight={{ base: "8", md: "24" }}
        paddingBottom="20px"
        paddingTop="20px"
        align="flex-start"
        justify="space-around"
        w="full">

        <VStack 
          flex={1}
          height="100%"
          justifyContent="center"
          align="center">
          <Image src={homeImage} alt='HomeImage'/>
        </VStack>

        <VStack 
          flex={1}
          height="100%"
          justifyContent="center"
          align="center">
          
          {errorMessage && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              {errorMessage}
            </Alert>
          )}

          <Image src={logoGrande} alt='StudentHub'/>

          <VStack width="70%" spacing={4}>
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

            <Button colorScheme="orange" type="button" width="full" onClick={handleLogin}>
              Login
            </Button>

            <Button colorScheme="orange" type="button" width="full">
              Sign Up
            </Button>
          </VStack>
        </VStack>
      </HStack>
      
      
      <Footer />
    </VStack>

  );
};
