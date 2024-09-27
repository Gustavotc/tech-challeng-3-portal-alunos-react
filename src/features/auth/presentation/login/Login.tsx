import { useState } from "react";
import { useLogin } from "../../domain/usecases/useLogin"; // Hook de login
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Image,
  HStack,
  useToast,
  Show,
} from "@chakra-ui/react";
import { IAuthUser } from "../../domain/interfaces/IAuthUser";
import logoGrande from "../../../../assets/LogoGrande.png";
import homeImage from "../../../../assets/HomeImage.png";
import styled from "styled-components";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

export const Login = () => {
  const navigate = useNavigate();
  const { updateAuthUser } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // O Hook deve ser chamado fora de qualquer função interna
  const { login } = useLogin();

  const toast = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const auth: IAuthUser = {
        email,
        password,
      };

      const user = await login(auth); // Chamando a função de login

      updateAuthUser(user);
      navigate("/posts");
    } catch {
      toast({
        title: "Credenciais incorretas",
        description: "Verifique suas informações e tente novamente!",
        position: "top-right",
        status: "error",
      });
    }
  };

  return (
    <VStack flex={1}>
      <HStack
        flex={1}
        paddingLeft={{ base: "8", md: "24" }}
        paddingRight={{ base: "8", md: "24" }}
        paddingBottom="20px"
        paddingTop="20px"
        align="flex-start"
        justify="space-around"
        w="full"
      >
        <Show above="md">
          <VStack flex={1} height="100%" justifyContent="center" align="center">
            <Image src={homeImage} alt="HomeImage" />
          </VStack>
        </Show>

        <VStack flex={1} height="100%" justifyContent="center" align="center">
          <Image src={logoGrande} alt="StudentHub" />

          <StyledForm onSubmit={handleLogin}>
            <VStack width={{ base: "100%", md: "70%" }} spacing={4}>
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

              <Button colorScheme="orange" type="submit" width="full">
                Login
              </Button>

              <Button colorScheme="orange" type="button" width="full">
                Sign Up
              </Button>
            </VStack>
          </StyledForm>
        </VStack>
      </HStack>
    </VStack>
  );
};
