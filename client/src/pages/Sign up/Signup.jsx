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
import { useState } from "react";
import { Link } from "react-router-dom";
import useCustomToast from "../../hooks/useCustomToast";
import { validateEmail } from "../../utils/validateEmail";
import axios from "axios";
import API_URL from "../../config/config";
import { useDispatch } from "react-redux";
import { hideProgressBar, showProgressBar } from "../../redux/action";
import { Redirect } from "react-router-dom";
export const Signup = () => {
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

  const handleSignUp = async () => {
    dispatch(showProgressBar());
    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.firstName ||
      !credentials.lastName
    ) {
      showToast("All field required", "error");
      dispatch(hideProgressBar());
      return;
    }

    if (!validateEmail(credentials.email)) {
      showToast("Invalid email address", "warning");
      dispatch(hideProgressBar());
      return;
    }

    if (credentials.password !== credentials.conform_password) {
      showToast("Passwords do not match", "warning");
      dispatch(hideProgressBar());
      return;
    }
    try {
      // eslint-disable-next-line no-unused-vars
      const { conform_password, ...newCredentials } = credentials;
      const response = await axios.post(
        `${API_URL}/user/signup`,
        newCredentials
      );
      showToast(response.data.message, "success");
      setCredentials({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        conform_password: "",
      });
      dispatch(hideProgressBar());
      <Redirect to="/login" />;
    } catch (error) {
      showToast(error.response.data.message, "error");
      dispatch(hideProgressBar());
      return;
    }
  };

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
                  <Input
                    value={credentials.firstName}
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box flex={1} ml={2}>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    value={credentials.lastName}
                    onChange={handleChange}
                    name="lastName"
                    type="text"
                  />
                </FormControl>
              </Box>
            </Flex>
            <FormControl id="email" mt={2}>
              <FormLabel>Email address</FormLabel>
              <Input
                value={credentials.email}
                onChange={handleChange}
                name="email"
                type="email"
              />
            </FormControl>
            <FormControl id="password" mt={2}>
              <FormLabel>Password</FormLabel>
              <Input
                value={credentials.password}
                onChange={handleChange}
                name="password"
                type="password"
              />
            </FormControl>
            <FormControl id="confirmPassword" mt={2}>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                value={credentials.conform_password}
                onChange={handleChange}
                name="conform_password"
                type="password"
              />
            </FormControl>
            <Button
              onClick={handleSignUp}
              colorScheme="blue"
              size="lg"
              mt={5}
              w={"full"}
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
