import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

type ImageUploadProps = {
  selectedFile?: string;
  onSelectedImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedTab: (value: string) => void;
  setSelectedFile: (value: string) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  setSelectedFile,
  onSelectedImage,
  setSelectedTab,
  selectedFile,
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
  return (
    <Flex direction="column" justify="center" align="center" width="100%">
      {selectedFile ? (
        <>
          <Image src={selectedFile} maxWidth="400px" maxHeight="400px" />
          <Stack direction="row" mt={4}>
            <Button height="28px" onClick={() => setSelectedTab("Post")}>
              Back to Post
            </Button>
            <Button
              variant="outline"
              height="28px"
              onClick={() => setSelectedFile("")}
              _hover={{ bg: "blue.50" }}
            >
              Remove
            </Button>
          </Stack>
        </>
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          borderColor="blue.500"
          width="100%"
          borderRadius={5}
        >
          <Button
            variant="outline"
            height="28px"
            _hover={{ bg: "blue.50" }}
            onClick={() => selectedFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            ref={selectedFileRef}
            type="file"
            hidden
            onChange={onSelectedImage}
          />
          <img src={selectedFile} alt="" />
        </Flex>
      )}
    </Flex>
  );
};
export default ImageUpload;
