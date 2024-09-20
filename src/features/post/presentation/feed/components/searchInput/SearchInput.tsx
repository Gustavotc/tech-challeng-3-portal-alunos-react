import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputGroupProps,
} from "@chakra-ui/react";

type Props = InputGroupProps & {
  placeholder: string;
  onChangeText: (value: string) => void;
};

export default function SearchInput({
  placeholder,
  onChangeText,
  ...rest
}: Props) {
  return (
    <InputGroup {...rest}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input
        type="search"
        placeholder={placeholder}
        onChange={(event) => {
          onChangeText(event.target.value);
        }}
      />
    </InputGroup>
  );
}
