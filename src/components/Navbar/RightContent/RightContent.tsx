import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthoButtons from "./AuthoButtons";
import AuthModal from "../../Modal/Auth/AuthModal";

type RightContentProps = {};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthoButtons />
      </Flex>
    </>
  );
};
export default RightContent;
