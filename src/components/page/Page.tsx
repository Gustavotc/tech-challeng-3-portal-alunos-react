import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function Page({ children }: Props) {
  return (
    <Flex
      flex={1}
      direction="column"
      w="full"
      p="10"
      pt="65px"
      justify="flex-start"
      align="center"
    >
      {children}
    </Flex>
  );
}
