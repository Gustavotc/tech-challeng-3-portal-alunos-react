import { HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack
      justify="center"
      align="center"
      height="60px"
      w="full"
      bgColor="#EB8900"
    >
      <Text fontSize="md">Copyright 2024</Text>
    </HStack>
  );
}
