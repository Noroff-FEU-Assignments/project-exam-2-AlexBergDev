import {
  chakra,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { SystemFeedback } from "@/components/common";
import { BASE_URL, MESSAGES_PATH } from "@/constants/api";
import { CONTACT_SUCCESS } from "@/constants/messages";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("First name is required")
    .min(2, "Your first name must be at least 2 characters long"),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(2, "Your last name must be at least 2 characters long"),
  email_address: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(2, "The subject must be at least 2 characters long"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "The message must be at least 10 characters long"),
});

function Label({ children, ...props }) {
  return (
    <FormLabel
      fontWeight={500}
      color={useColorModeValue("brand.500", "brand.50")}
      {...props}
    >
      {children}
    </FormLabel>
  );
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [updated, setUpdated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const url = BASE_URL + MESSAGES_PATH;

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    setUpdated(false);

    const body = {
      data,
    };

    try {
      const response = await axios.post(url, body);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={submitting}>
        <SimpleGrid columns={6} spacing={6}>
          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="first_name">First name</Label>
            <Input
              placeholder="Your first name"
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              mt={1}
              focusBorderColor="brand.600"
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("first_name")}
            />
            {errors.first_name && (
              <FormHelperText color="red.500">
                {errors.first_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="last_name">Last name</Label>
            <Input
              placeholder="Your last name"
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              mt={1}
              focusBorderColor="brand.600"
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("last_name")}
            />
            {errors.last_name && (
              <FormHelperText color="red.500">
                {errors.last_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="email_address">Email address</Label>
            <Input
              placeholder="Your email address"
              type="text"
              name="email_address"
              id="email_address"
              autoComplete="email"
              mt={1}
              focusBorderColor="brand.600"
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("email_address")}
            />
            {errors.email_address && (
              <FormHelperText color="red.500">
                {errors.email_address.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="subject">Subject</Label>
            <Input
              placeholder="Subject"
              type="text"
              name="subject"
              id="subject"
              mt={1}
              focusBorderColor="brand.600"
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("subject")}
            />
            {errors.subject && (
              <FormHelperText color="red.500">
                {errors.subject.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id="email" as={GridItem} colSpan={6}>
            <Label>Message</Label>
            <Textarea
              placeholder="Your message"
              mt={1}
              rows={4}
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              focusBorderColor="blue.600"
              {...register("message")}
            />
            {errors.message && (
              <FormHelperText color="red.500">
                {errors.message.message}
              </FormHelperText>
            )}
          </FormControl>
        </SimpleGrid>
        {updated && (
          <SystemFeedback status="success">{CONTACT_SUCCESS}</SystemFeedback>
        )}
        {serverError && (
          <SystemFeedback status="error">{serverError}</SystemFeedback>
        )}

        <Button variant="secondary" my={8} type="submit">
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </fieldset>
    </chakra.form>
  );
}
