import { Button, HStack } from "@chakra-ui/react";

type Props = {
  handleSave: () => void;
  handleDelete: () => void;
  handleGoBack: () => void;
};

export default function FormButtonsRow({
  handleDelete,
  handleSave,
  handleGoBack,
}: Props) {
  return (
    <HStack w="full">
      <HStack flex={1} spacing={"24px"}>
        <Button variant="outline" colorScheme="orange" onClick={handleGoBack}>
          Voltar
        </Button>

        <Button colorScheme="orange" onClick={handleSave}>
          Salvar
        </Button>
      </HStack>

      <Button colorScheme="red" onClick={handleDelete}>
        Deletar
      </Button>
    </HStack>
  );
}
