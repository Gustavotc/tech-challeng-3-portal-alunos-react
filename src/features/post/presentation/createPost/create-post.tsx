import React, { useState } from "react";
import {
  Stack,
  Box,
  Text,
  Input,
  Select,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

// Define the structure of the form data
interface FormData {
  title: string;
  description: string;
  category: string;
}

// Define the structure of the error messages
interface FormErrors {
  title: string;
  description: string;
  category: string;
}

export const CreatePost: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
  });

  // State to manage form errors
  const [errors, setErrors] = useState<FormErrors>({
    title: "",
    description: "",
    category: "",
  });

  // Function to handle input changes
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // Function to handle form submission
  const handleSave = () => {
    let hasError = false;
    const newErrors: FormErrors = {
      title: "",
      description: "",
      category: "",
    };

    // Validate form fields
    if (!formData.title.trim()) {
      newErrors.title = "O título é obrigatório.";
      hasError = true;
    }
    if (!formData.description.trim()) {
      newErrors.description = "A descrição é obrigatória.";
      hasError = true;
    }
    if (!formData.category) {
      newErrors.category = "A categoria é obrigatória.";
      hasError = true;
    }

    // Set errors if any
    setErrors(newErrors);

    // If no errors, handle form submission (e.g., save data)
    if (!hasError) {
      console.log("Form data:", formData);
      // Implement save logic here
    }
  };

  return (
    <Stack
      minHeight="100vh"
      width="100%"
      background="#FFFFFF"
      spacing="0"
      justify="space-between"
    >
      {/* Main Content */}
      <Stack flex="1" spacing="0">
        {/* Content */}
        <Stack
          mt={{ base: "20px", md: "40px" }}
          paddingX={{ base: "16px", md: "106px" }}
          pb="41px"
          width="100%"
          maxWidth="824px"
          mx="auto"
          flex="1"
        >
          <Text
            fontFamily="Roboto"
            fontWeight="medium"
            fontSize={{ base: "24px", md: "36px" }}
            letterSpacing="0.1px"
            textAlign={{ base: "center", md: "left" }}
          >
            CRIAR POST
          </Text>

          <Stack
            paddingX={{ base: "10px", md: "14px" }}
            paddingY="30px"
            borderRadius="8px"
            background="#D3D3D3"
            boxShadow="xl"
            width="100%"
            spacing="20px" // Consistent spacing between form fields
          >
            {/* Title Input */}
            <FormControl isInvalid={!!errors.title}>
              <FormLabel fontFamily="Inter" fontSize="18px" color="#767676" mb="5px">
                Título
              </FormLabel>
              <Input
                placeholder="Javascript está vai continuar em alta?"
                variant="filled"
                borderColor="orange"
                _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
              <FormErrorMessage mt="5px">{errors.title}</FormErrorMessage>
            </FormControl>

            {/* Description Input */}
            <FormControl isInvalid={!!errors.description}>
              <FormLabel fontFamily="Inter" fontSize="18px" color="#767676" mb="5px">
                Descrição
              </FormLabel>
              <Textarea
                placeholder="Comente os detalhes do seu post..."
                borderColor="orange"
                _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
              <FormErrorMessage mt="5px">{errors.description}</FormErrorMessage>
            </FormControl>

            {/* Category Select */}
            <FormControl isInvalid={!!errors.category}>
              <FormLabel fontFamily="Inter" fontSize="18px" color="#767676" mb="5px">
                Categoria
              </FormLabel>
              <Select
                placeholder="Selecione a categoria"
                borderColor="orange"
                _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                {/* Sample options, replace these with actual categories */}
                <option value="tecnologia">Tecnologia</option>
                <option value="ciencia">Ciência</option>
                <option value="educacao">Educação</option>
              </Select>
              <FormErrorMessage mt="5px">{errors.category}</FormErrorMessage>
            </FormControl>

            {/* Action Buttons */}
            <Stack
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              spacing={{ base: "10px", md: "20px" }}
              mt="20px"
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                spacing={{ base: "10px", md: "10px" }}
              >
                <Button size="lg" variant="outline" colorScheme="orange" width={{ base: "100%", md: "auto" }}>
                  Voltar
                </Button>
                <Button size="lg" variant="solid" colorScheme="orange" width={{ base: "100%", md: "auto" }} onClick={handleSave}>
                  Salvar
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
