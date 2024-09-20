import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";

type Props = {
  isSearching: boolean;
};

export default function EmptyPostsList({ isSearching }: Props) {
  const title = isSearching
    ? "Nenhum post encontrado"
    : "Não há postagens até o momento";
  const message = isSearching
    ? "Não foram encontrados posts com o título ou descrição informados"
    : "Retorne mais tarde para ficar por dentro das novidades!";

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
