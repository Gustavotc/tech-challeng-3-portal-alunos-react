import { useState } from "react";
import { useRegister } from "../../domain/usecases/useRegister";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Select,
  useToast,
  Image,
  HStack,
  VStack,
  Show,
} from "@chakra-ui/react";
import styled from "styled-components";
import homeImage from "../../../../assets/HomeImage.png";
import logoGrande from "../../../../assets/LogoGrande.png";
import { IAuthRegisterUser } from "../../domain/interfaces/IAuthRegisterUser";
import Page from "../../../../components/page/Page";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../contexts/AuthContext";

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
  max-width: 600px;
`;

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"DOCENTE" | "DISCENTE">("DISCENTE");

  const { updateAuthUser } = useAuthContext();

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
      updateAuthUser(user);
      toast({
        title: "Cadastro realizado",
        description: `Olá ${name.split(" ")[0]}, seja bem vindo ao StudentHub!`,
        position: "top-right",
        status: "success",
      });
      navigate("/posts");
    } catch {
      toast({
        title: "Falha no cadastro",
        description:
          "Ocorreu uma falha ao cadastrar o usuário, tente novamente!",
        position: "top-right",
        status: "error",
      });
    }
  };

  const handleGoBack = () => {
    navigate("/auth/login");
  };

  return (
    <Page>
      <HStack flex={1} w="full">
        <Show above="md">
          <VStack flex={1} height="100%" justifyContent="center" align="center">
            <Image src={homeImage} alt="HomeImage" />
          </VStack>
        </Show>

        <VStack flex={1}>
          <Image src={logoGrande} />

          <StyledForm onSubmit={handleRegister}>
            <FormControl id="name" isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
              />
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
              Registrar
            </Button>

            <Button
              variant="outline"
              colorScheme="orange"
              type="submit"
              width="full"
              onClick={handleGoBack}
            >
              Voltar
            </Button>
          </StyledForm>
        </VStack>
      </HStack>
    </Page>
  );
};
