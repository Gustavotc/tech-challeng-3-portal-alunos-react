import { Stack, Box, Text, Input, Select, Button, Textarea } from '@chakra-ui/react';

export const CreatePost = () => (
    <Stack width="100%" background="#FFFFFF">
        <Stack
            direction="column"
            justify="flex-start"
            align="flex-start"
            spacing={{ base: '24px', md: '241px' }}
            width="100vw"
            maxWidth="100%"
        >
            <Stack
                direction="column"
                justify="center"
                align="flex-start"
                spacing={{ base: '20px', md: '49px' }}
                overflow="hidden"
                alignSelf="stretch"
            >
                <Stack
                    paddingX={{ base: '10px', md: '19px' }}
                    paddingY="8px"
                    direction="column"
                    justify="flex-start"
                    align="flex-start"
                    spacing="10px"
                    overflow="hidden"
                    alignSelf="stretch"
                    background="#FFC832"
                >
                    <Stack
                        direction="row"
                        justify="flex-start"
                        align="center"
                        spacing="5px"
                        alignSelf="stretch"
                    >
                        <Stack
                            direction="row"
                            justify="space-between"
                            align="center"
                            spacing="5px"
                            width={{ base: 'auto', md: '230px' }}
                        >
                            <Box width="65px" height="50px" />
                            <Text
                                fontFamily="Michroma"
                                fontWeight="regular"
                                fontSize={{ base: '18px', md: '24px' }}
                                color="#000000"
                                width={{ base: 'auto', md: '160px' }}
                                textAlign="center"
                            >
                                StudentHub
                            </Text>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack
                    marginTop={{ base: '40px', md: '80px' }}
                    paddingStart={{ base: '0px', md: '106px' }}
                    paddingBottom="41px"
                    direction="column"
                    justify="center"
                    align="flex-start"
                    spacing="40px"
                    width={{ base: '100%', md: '824px' }}
                    maxWidth="100%"
                >
                    <Text
                        fontFamily="Roboto"
                        lineHeight="0.56"
                        fontWeight="medium"
                        fontSize={{ base: '24px', md: '36px' }}
                        letterSpacing="0.1px"
                        color="#000000"
                    >
                        EDITAR POST
                    </Text>

                    <Stack
                        paddingX="14px"
                        paddingY="50px"
                        borderRadius="8px"
                        direction="column"
                        justify="flex-start"
                        align="flex-start"
                        spacing="10px"
                        alignSelf="stretch"
                        background="#D3D3D3"
                        boxShadow="xl"
                    >
                        <Stack
                            direction="column"
                            justify="flex-start"
                            align="center"
                            spacing="26px"
                            alignSelf="stretch"
                        >
                            <Stack
                                direction="column"
                                justify="flex-start"
                                align="flex-start"
                                spacing="10px"
                                width={{ base: '100%', md: '669px' }}
                                maxWidth="100%"
                            >
                                <Text
                                    fontFamily="Inter"
                                    lineHeight="1.33"
                                    fontWeight="regular"
                                    fontSize="18px"
                                    color="#767676"
                                    height="30px"
                                    alignSelf="stretch"
                                >
                                    Título
                                </Text>
                                <Input
                                    placeholder="Javascript está vai continuar em alta?"
                                    size="sm"
                                    variant="filled"
                                    background="white"
                                    borderColor="orange"
                                    borderRadius="6px"
                                    borderWidth="1px"
                                    isInvalid={false}
                                    isDisabled={false}
                                    height="32px"
                                    alignSelf="stretch"
                                    _focus={{
                                        background: 'white',
                                        borderColor: 'yellow',
                                        boxShadow: '0 0 0 1px white',
                                    }}
                                    _hover={{
                                        background: 'white',
                                    }}
                                />
                            </Stack>

                            <Stack
                                direction="column"
                                justify="flex-start"
                                align="center"
                                spacing="24px"
                                alignSelf="stretch"
                            >
                                <Stack
                                    direction="column"
                                    justify="flex-start"
                                    align="flex-start"
                                    spacing="7px"
                                    width={{ base: '100%', md: '668px' }}
                                    maxWidth="100%"
                                >
                                    <Text
                                        fontFamily="Inter"
                                        lineHeight="1.33"
                                        fontWeight="regular"
                                        fontSize="18px"
                                        color="#767676"
                                        height="30px"
                                        alignSelf="stretch"
                                    >
                                        Descrição
                                    </Text>
                                    <Textarea
                                        placeholder="Comente os detalhes do seu post..."
                                        isInvalid={false}
                                        height="144px"
                                        alignSelf="stretch"
                                        background="white"
                                        borderColor="orange"
                                        borderStartWidth="1px"
                                        borderEndWidth="1px"
                                        borderTopWidth="1px"
                                        borderBottomWidth="1px"
                                        _focus={{
                                            background: 'white',
                                            borderColor: 'yellow',
                                            boxShadow: '0 0 0 1px white',
                                        }}
                                    />
                                </Stack>

                                <Stack
                                    direction="column"
                                    justify="flex-start"
                                    align="center"
                                    spacing="38px"
                                    alignSelf="stretch"
                                >
                                    <Stack
                                        direction="column"
                                        justify="flex-start"
                                        align="flex-start"
                                        spacing="0px"
                                        width={{ base: '100%', md: '664px' }}
                                        maxWidth="100%"
                                    >
                                        <Text
                                            fontFamily="Inter"
                                            lineHeight="1.33"
                                            fontWeight="regular"
                                            fontSize="18px"
                                            color="#767676"
                                            height="30px"
                                            alignSelf="stretch"
                                        >
                                            Categoria
                                        </Text>
                                        <Select
                                            placeholder="Selecione a categoria"
                                            size="sm"
                                            background="white"
                                            isDisabled={false}
                                            isInvalid={false}
                                            height="32px"
                                            borderColor="orange"
                                            borderRadius="6px"
                                            borderWidth="1px"
                                            alignSelf="stretch"
                                            _focus={{
                                                background: 'white',
                                                borderColor: 'yellow',
                                                boxShadow: '0 0 0 1px white',
                                            }}
                                        />
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        justify="space-between"
                                        align="center"
                                        spacing={{ base: '20px', md: '351px' }}
                                        alignSelf="stretch"
                                    >
                                        <Stack
                                            direction="row"
                                            justify="flex-start"
                                            align="center"
                                            spacing="6px"
                                        >
                                            <Stack
                                                padding="10px"
                                                direction="column"
                                                justify="flex-start"
                                                align="flex-start"
                                                spacing="10px"
                                                width="111px"
                                            >
                                                <Button
                                                    size="md"
                                                    variant="outline"
                                                    colorScheme="orange"
                                                    height="40px"
                                                    alignSelf="stretch"
                                                >
                                                    Voltar
                                                </Button>
                                            </Stack>
                                            <Stack
                                                padding="10px"
                                                direction="column"
                                                justify="flex-start"
                                                align="flex-start"
                                                spacing="10px"
                                                width="110px"
                                            >
                                                <Button
                                                    size="md"
                                                    variant="solid"
                                                    colorScheme="orange"
                                                    height="40px"
                                                    alignSelf="stretch"
                                                >
                                                    Salvar
                                                </Button>
                                            </Stack>
                                        </Stack>

                                        <Stack
                                            padding="10px"
                                            direction="column"
                                            justify="flex-start"
                                            align="flex-start"
                                            spacing="10px"
                                            width="110px"
                                        >
                                            <Button
                                                size="md"
                                                variant="solid"
                                                colorScheme="red"
                                                height="40px"
                                                alignSelf="stretch"
                                            >
                                                Deletar
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                justify="center"
                align="center"
                spacing="10px"
                height="60px"
                alignSelf="stretch"
                background="#EB8900"
            >
                <Text
                    fontFamily="Roboto"
                    lineHeight="1.43"
                    fontWeight="regular"
                    fontSize="14px"
                    letterSpacing="0.25px"
                    color="#FFFFFF"
                    textAlign="center"
                >
                    Copyright 2024
                </Text>
            </Stack>
        </Stack>
    </Stack>
);
