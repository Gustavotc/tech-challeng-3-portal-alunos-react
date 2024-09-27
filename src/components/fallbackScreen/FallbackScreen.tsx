import { Button, Center, Text, Image } from "@chakra-ui/react";
import PageNotFound from "../../assets/PageNotFound.png";
import UserUnauthorized from "../../assets/UserUnauthorized.png";
import { Link } from "react-router-dom";

type Props = {
  type: "unauthorized" | "notFound";
};

export default function FallbackScreen({ type }: Props) {
  const imageSrc = type === "notFound" ? PageNotFound : UserUnauthorized;
  const message =
    type === "notFound"
      ? "Não encontramos a rota informada."
      : "Você não possui permissão para acessar esse recurso!";

  return (
    <Center flex={1} w="full" flexDirection="column">
      <Image src={imageSrc} height="40%" />
      <Text fontSize="2xl" mb={8} textAlign="center">
        {message}
      </Text>
      <Link to={"/posts"}>
        <Button mb={4} colorScheme="orange">
          Voltar para o início
        </Button>
      </Link>
    </Center>
  );
}
