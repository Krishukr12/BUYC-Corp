import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import useCustomToast from "../../hooks/useCustomToast";

const AddCarPage = () => {
  const [carDetails, setCarDetails] = useState({});
  const showToast = useCustomToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  const handleCarDetailsPost = () => {
    if (!carDetails.title || !carDetails.description || !carDetails.imgUrl) {
      showToast("All fields are required", "error");
      return;
    }
  };

  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"} bg={"gray.100"}>
      <Box
        w={"450px"}
        mx="auto"
        p="6"
        bg="white"
        boxShadow="lg"
        borderRadius="md"
      >
        <Heading as="h1" size="lg" textAlign="center" mb="6" color="blue.500">
          Add Car Details
        </Heading>
        <form>
          <FormControl>
            <FormLabel htmlFor="carTitle" fontWeight="bold">
              Car Title
            </FormLabel>
            <Input
              value={carDetails.title}
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Enter car title"
              bg="gray.100"
              _placeholder={{ color: "gray.500" }}
              focusBorderColor="blue.400"
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="imageUrl" fontWeight="bold">
              Car Image URL
            </FormLabel>
            <Input
              name="imgUrl"
              onChange={handleChange}
              type="text"
              placeholder="Enter image URL"
              bg="gray.100"
              _placeholder={{ color: "gray.500" }}
              focusBorderColor="blue.400"
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="description" fontWeight="bold">
              Description
            </FormLabel>
            <Textarea
              name="description"
              onChange={handleChange}
              placeholder="Enter car description"
              resize="vertical"
              rows={5}
              bg="gray.100"
              _placeholder={{ color: "gray.500" }}
              focusBorderColor="blue.400"
              _focus={{ boxShadow: "none" }}
            />
          </FormControl>
          <Button
            onClick={handleCarDetailsPost}
            colorScheme="blue"
            mt="6"
            fontWeight="bold"
            w="full"
            _hover={{ bg: "blue.500" }}
          >
            Add Car
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default AddCarPage;
