import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";

export const Login = () => {
  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"} bg={"gray.100"}>
      <Box
        rounded={"lg"}
        bg={"white"}
        boxShadow={"lg"}
        p={8}
        maxW={"md"}
        w={"full"}
      >
        <Box textAlign={"center"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <Text mt={2} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Box>
        <Box mt={8}>
          <form>
            <FormControl id="email" mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Button
              colorScheme="blue"
              size="lg"
              mt={8}
              w={"full"}
              type="submit"
            >
              Sign in
            </Button>
          </form>
          <Text mt={4} textAlign={"center"} color={"gray.600"}>
            <Link color={"blue.400"}>Forgot password?</Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
