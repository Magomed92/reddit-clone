import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { auth, firestore } from "../../../firebase/clientApp";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const OAuthButton: React.FC = () => {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef,JSON.parse(JSON.stringify(user)));
  };
  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);
  
  return (
    <Flex direction="column" mb={4} width="100%">
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          alt="google icon"
          src="/images/googlelogo.png"
          height="20px"
          mr={4}
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other Provider</Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButton;
