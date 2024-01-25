import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "#ff4500", border: "1px solid ", borderColor: "blue.500" }}
          _focus={{ outline: "none", border: "1px solid", borderColor: "blue.500" }}
          height="34px"
          bg="gray.400"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
