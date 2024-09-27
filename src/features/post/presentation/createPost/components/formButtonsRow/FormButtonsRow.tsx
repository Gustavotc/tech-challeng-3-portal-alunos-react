import { Button, HStack } from "@chakra-ui/react";

type Props = {
  handleSave: () => void;
  handleGoBack: () => void;
  loading: boolean;
};

export default function FormButtonsRow({
  handleSave,
  handleGoBack,
  loading
}: Props) {
  return (
    <HStack w="full" justifyContent={"space-between"}>

      <Button variant="outline" colorScheme="orange" isDisabled={loading} onClick={handleGoBack}>
        Voltar
      </Button>

      <Button colorScheme="orange" isLoading={loading} onClick={handleSave}>
        Salvar
      </Button>

    </HStack>
  );
}
