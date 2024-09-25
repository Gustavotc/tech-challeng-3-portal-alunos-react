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
} from "@chakra-ui/react";

export const EditPost = () => (
    <Stack
        minHeight="100vh"
        width="100%"
        background="#FFFFFF"
        spacing="0"
        justify="space-between"
        mx="auto"
        overflowX="hidden"
    >
        {/* Main Content */}
        <Stack flex="1" spacing="0">
            {/* Content */}
            <Stack
                mt={{ base: "20px", md: "40px" }}
                paddingX={{ base: "16px", md: "50px" }}
                pb={{ base: "20px", md: "41px" }}
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
                    <FormControl width="100%">
                        <FormLabel fontFamily="Inter" fontSize="18px" color="#767676">
                            Título
                        </FormLabel>
                        <Input
                            placeholder="Javascript está vai continuar em alta?"
                            variant="filled"
                            borderColor="orange"
                            _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                        />
                    </FormControl>

                    {/* Description Input */}
                    <FormControl width="100%">
                        <FormLabel fontFamily="Inter" fontSize="18px" color="#767676">
                            Descrição
                        </FormLabel>
                        <Textarea
                            placeholder="Comente os detalhes do seu post..."
                            borderColor="orange"
                            _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                        />
                    </FormControl>

                    {/* Category Select */}
                    <FormControl width="100%">
                        <FormLabel fontFamily="Inter" fontSize="18px" color="#767676">
                            Categoria
                        </FormLabel>
                        <Select
                            placeholder="Selecione a categoria"
                            borderColor="orange"
                            _focus={{ borderColor: "yellow", boxShadow: "0 0 0 1px white" }}
                        />
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
    </Stack>
);
