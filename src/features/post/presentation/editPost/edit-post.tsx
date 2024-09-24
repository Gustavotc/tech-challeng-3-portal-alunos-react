import {
    Stack,
    Box,
    Text,
    Input,
    Select,
    Button,
    Textarea,
} from "@chakra-ui/react";

export const CreatePost = () => (
    <Stack
        minHeight="100vh"
        width="100%"
        background="#FFFFFF"
        spacing="0"
        justify="space-between" // This ensures the footer stays at the bottom
    >
        {/* Main Content */}
        <Stack flex="1" spacing="0">
            {/* Header */}
            <Stack background="#FFC832" paddingX={{ base: "0px", md: "19px" }} paddingY="8px">
                <Stack direction="row" justify="space-between" align="center" width={{ base: "auto", md: "230px" }} mx="auto">
                    <Box width={{ base: "50px", md: "65px" }} height="50px" />
                    <Text fontFamily="Michroma" fontSize={{ base: "18px", md: "24px" }} textAlign="center" flexShrink={0}>
                        StudentHub
                    </Text>
                </Stack>
            </Stack>

            {/* Content */}
            <Stack
                mt={{ base: "20px", md: "40px" }}
                paddingX={{ base: "16px", md: "106px" }}
                pb="41px"
                width="100%"
                maxWidth="824px"
                mx="auto"
            >
                <Text
                    fontFamily="Roboto"
                    fontWeight="medium"
                    fontSize={{ base: "24px", md: "36px" }}
                    letterSpacing="0.1px"
                    textAlign={{ base: "center", md: "left" }}
                >
                    EDITAR POST
                </Text>

                <Stack paddingX={{ base: "10px", md: "14px" }} paddingY="30px" borderRadius="8px" background="#D3D3D3" boxShadow="xl" width="100%">
                    {/* Title Input */}
                    <Stack spacing="10px" width="100%">
                        <Text fontFamily="Inter" fontSize="18px" color="#767676">
                            Título
                        </Text>
                        <Input
                            placeholder="Javascript está vai continuar em alta?"
                            variant="filled"
                            borderColor="orange"
                            _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                        />
                    </Stack>

                    {/* Description Input */}
                    <Stack spacing="7px" width="100%">
                        <Text fontFamily="Inter" fontSize="18px" color="#767676">
                            Descrição
                        </Text>
                        <Textarea
                            placeholder="Comente os detalhes do seu post..."
                            borderColor="orange"
                            _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                        />
                    </Stack>

                    {/* Category Select */}
                    <Stack spacing="7px" width="100%">
                        <Text fontFamily="Inter" fontSize="18px" color="#767676">
                            Categoria
                        </Text>
                        <Select
                            placeholder="Selecione a categoria"
                            borderColor="orange"
                            _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                        />
                    </Stack>

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
                            <Button size="lg" variant="solid" colorScheme="orange" width={{ base: "100%", md: "auto" }}>
                                Salvar
                            </Button>
                        </Stack>
                        <Button size="lg" variant="solid" colorScheme="red" width={{ base: "100%", md: "auto" }}>
                            Deletar
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>

        {/* Footer */}
        <Stack
            justify="center"
            height="60px"
            background="#EB8900"
            width="100%"
        >
            <Text fontFamily="Roboto" fontSize="14px" color="#FFFFFF" textAlign="center">
                Copyright 2024
            </Text>
        </Stack>
    </Stack>
);
