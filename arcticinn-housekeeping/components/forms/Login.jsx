import {
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { WRONG_LOGIN_VALUE } from "@/constants/messages";
import AuthContext from "@/context/AuthContext";
import { SystemFeedback } from "@/components/common";
import { BASE_URL, TOKEN_PATH } from "@/constants/api";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

const url = BASE_URL + TOKEN_PATH;

export default function Form() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      setLoginError(WRONG_LOGIN_VALUE);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Stack spacing="6">
      <Stack spacing="5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {loginError && (
            <SystemFeedback status="error">{loginError}</SystemFeedback>
          )}
          <fieldset disabled={submitting}>
            <FormControl mb="6">
              <FormLabel htmlFor="identifer">Email address</FormLabel>
              <Input
                id="identifier"
                name="identifier"
                autoComplete="email"
                focusBorderColor="blue.300"
                shadow="sm"
                rounded="md"
                autoFocus={true}
                {...register("identifier")}
              />
              {errors.identifier && (
                <FormHelperText color="red.500">
                  {errors.identifier.message}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl mb="6">
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  name="password"
                  autoComplete="password"
                  focusBorderColor="blue.300"
                  shadow="sm"
                  rounded="md"
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  {...register("password")}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <FormHelperText color="red.500">
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>

            <Button
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
              loadingText="Submitting"
              type="submit"
            >
              {submitting ? "Submitting.." : "Sign in"}
            </Button>
          </fieldset>
        </form>
      </Stack>
    </Stack>
  );
}
