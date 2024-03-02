import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButton: React.FC = () => {
  return (
    <Flex direction="column" mb={4} width="100%">
      <Button variant="oauth" mb={2}>
        <Image alt="google icon" src="/images/googlelogo.png" height="20px" mr={4} />
        
        Continue with Google
      </Button>
      <Button variant="oauth">Some other Provider</Button>
    </Flex>
  );
};
export default OAuthButton;
