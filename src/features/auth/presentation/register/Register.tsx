import { useState } from "react";
import { useRegister } from "../../domain/usecases/useRegister";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Select,
  HStack,
  Show,
  Image,
  useToast,
} from "@chakra-ui/react";
import styled from "styled-components";
import homeImage from "../../../../assets/HomeImage.png";
import logoGrande from "../../../../assets/LogoGrande.png";
import { IAuthRegisterUser } from "../../domain/interfaces/IAuthRegisterUser";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  gap: 4rem;
  justify-content: center;
  align-items: center;
`;

export const Register = () => {
  const navigate = useNavigate();
  const { updateAuthUser } = useAuthContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"DOCENTE" | "DISCENTE">("DISCENTE");

  const { register } = useRegister();

  const toast = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authRegister: IAuthRegisterUser = {
        name,
        email,
        password,
        roleId: role,
      };

      const user = await register(authRegister);
      
      toast({
        title: "Usuário criado com sucesso",
        description: "O usuário foi criado com sucesso!",
        position: "top-right",
        status: "success",
      });

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
        w="full">

        <Show above="md">
          <VStack flex={1} height="100%" justifyContent="center" align="center">
            <Image src={homeImage} alt="HomeImage" />
          </VStack>
        </Show>

        <VStack flex={1} height="100%" justifyContent="center" align="center">
          <Image src={logoGrande} alt="StudentHub" />

          <StyledForm onSubmit={handleRegister}>
            <VStack width={{ base: "100%", md: "70%" }} spacing={4}>

              <FormControl id="name" isRequired>
                <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"/>
              </FormControl>

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

              <FormControl id="role" isRequired>
                <FormLabel>Cargo</FormLabel>
                <Select
                  name="Cargo"
                  placeholder="Digite seu cargo"
                  onChange={(event) =>
                    setRole(event.target.value as "DOCENTE" | "DISCENTE")
                  }
                  value={role}
                >
                  <option value="DISCENTE">Discente</option>
                  <option value="DOCENTE">Docente</option>
                </Select>
              </FormControl>

              <Button colorScheme="orange" type="submit" width="full">
                Create Account
              </Button>
              
            </VStack>
          </StyledForm>
        </VStack>
      </HStack>
    </VStack>
  );
};
