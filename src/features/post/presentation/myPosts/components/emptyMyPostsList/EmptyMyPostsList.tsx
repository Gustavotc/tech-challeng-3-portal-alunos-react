import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";

export default function EmptyMyPostsList() {
  const title = "Você ainda não criou nenhuma postagem";
  const message = "Crie uma postagem para que todos possam ver!";

  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{message}</Text>
      </CardBody>
    </Card>
  );
}
