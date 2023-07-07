import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"} bg={"gray.100"}>
      <Box
        h={"85vh"}
        rounded={"lg"}
        bg={"white"}
        boxShadow={"lg"}
        p={8}
        maxW={"md"}
        w={"full"}
      >
        <Box textAlign={"center"}>
          <Heading fontSize={"2xl"}>Create your account</Heading>
          <Text mt={2} color={"gray.600"}>
            Sign up and start enjoying our cool{" "}
            <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Box>
        <Box mt={5}>
          <form>
            <Flex>
              <Box flex={1} mr={2}>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box flex={1} ml={2}>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </Flex>
            <FormControl id="email" mt={2}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mt={2}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="confirmPassword" mt={2}>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button
              colorScheme="blue"
              size="lg"
              mt={5}
              w={"full"}
              type="submit"
            >
              Sign up
            </Button>
          </form>
          <Text mt={3} textAlign={"center"} color={"gray.600"}>
            Already have an account? <Link to="/login">Sign in</Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
