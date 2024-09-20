import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";

export default function EmptyPostsList() {
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Não há postagens até o momento</Heading>
      </CardHeader>
      <CardBody>
        <Text>Retorne mais tarde para ficar por dentro das novidades!</Text>
      </CardBody>
    </Card>
  );
}
