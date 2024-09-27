import React, { useState } from "react";
import { useRegister } from "../../domain/usecases/useRegister";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
  Alert,
  AlertIcon,
  Select,
} from "@chakra-ui/react";
import { IAuthRegisterUser } from "../../domain/interfaces/IAuthRegisterUser";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"DOCENTE" | "DISCENTE">("DISCENTE");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register } = useRegister();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authRegister: IAuthRegisterUser = {
        name,
        email,
        password,
        roleId: role,
      };

      await register(authRegister);
      // Redirecionar ou exibir feedback de sucesso
    } catch {
      setErrorMessage("Erro ao registrar usuário");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} flex={1}>
      <Heading mb={6}>Registrar</Heading>
      {errorMessage && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={handleRegister}>
        <VStack spacing={4}>
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

          <Button colorScheme="blue" type="submit" width="full">
            Registrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
