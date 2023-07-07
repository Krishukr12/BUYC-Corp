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

import { useState } from "react";
import useCustomToast from "../../hooks/useCustomToast";
import API_URL from "../../config/config";
import axios from "axios";
import { validateEmail } from "../../utils/validateEmail";
import { useDispatch } from "react-redux";
import { hideProgressBar, showProgressBar } from "../../redux/action";

export const Login = () => {
  const [credentials, setCredentials] = useState({});
  const showToast = useCustomToast();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    dispatch(showProgressBar());

    if (!credentials.email || !credentials.password) {
      showToast("Please enter your email and password", "error");
      dispatch(hideProgressBar());
      return;
    }

    if (!validateEmail(credentials.email)) {
      showToast("Invalid email address", "warning");
      dispatch(hideProgressBar());
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/user/login`, credentials);
      showToast(response.data.message, "success");
      dispatch(hideProgressBar());
      setCredentials({
        email: "",
        password: "",
      });
      return;
    } catch (error) {
      showToast(error.response.data.message, "error");
      dispatch(hideProgressBar());
    }
  };

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
              <Input
                value={credentials.email}
                onChange={handleChange}
                name="email"
                type="email"
              />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                value={credentials.password}
                onChange={handleChange}
                name="password"
                type="password"
              />
            </FormControl>

            <Button
              onClick={handleLogin}
              colorScheme="blue"
              size="lg"
              mt={8}
              w={"full"}
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
