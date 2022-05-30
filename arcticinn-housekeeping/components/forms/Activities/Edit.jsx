import {
  chakra,
  useColorModeValue,
  useBreakpointValue,
  SimpleGrid,
  GridItem,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import useAxios from "@/hooks/useAxios";
import { SystemFeedback } from "@/components/common";
import { UPDATE_SUCCESS } from "@/constants/messages";
import { BASE_URL, ACTIVITIES_PATH } from "@/constants/api";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(6, "Your title must be at least 6 characters long"),
  summary: yup
    .string()
    .required("Summary is required")
    .min(12, "Your summary must be at least 12 characters long"),
  text: yup
    .string()
    .required("Text is required")
    .min(24, "Your text must be at least 24 characters long"),
  button_name: yup.string().required("Header URL is required"),
  link: yup.string().required("Header URL is required"),
  header_image_url: yup.string().required("Header URL is required"),
  header_image_source: yup.string().required("Header URL is required"),
});

function Label({ children, ...props }) {
  return (
    <FormLabel
      color={useColorModeValue("brand.980", "brand.50")}
      textTransform="capitalize"
      fontWeight={600}
      fontSize="sm"
      {...props}
    >
      {children}
    </FormLabel>
  );
}

export default function FormActivitiesEdit({ detail }) {
  const [updated, setUpdated] = useState(false);
  const [updatingPage, setUpdatingPage] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const item = detail.attributes;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();
  const router = useRouter();

  const url = BASE_URL + ACTIVITIES_PATH + "/" + detail.id;

  async function onSubmit(data) {
    setUpdatingPage(true);
    setUpdateError(null);
    setUpdated(false);

    const body = {
      data,
    };

    try {
      const response = await http.put(url, body);
      setUpdated(true);
    } catch (error) {
      setUpdateError(error.toString());
      console.log(error.response);
    } finally {
      setUpdatingPage(false);
    }
  }

  async function handleDelete() {
    const confirmDelete = window.confirm("Delete this activity?");

    if (confirmDelete) {
      try {
        await http.delete(url);
        router.push("/activities");
      } catch (error) {
        setUpdateError(error.toString());
        console.log(error.response);
      }
    }
  }

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={updatingPage}>
        <SimpleGrid columns={6} spacing={5}>
          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="title">Title</Label>
            <Input
              placeholder="Required"
              type="text"
              name="title"
              id="title"
              focusBorderColor="brand.600"
              w="full"
              defaultValue={item.title}
              rounded={5}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("title")}
            />
            {errors.title && (
              <FormHelperText color="red.500">
                {errors.title.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="summary"
              id="summary"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              defaultValue={item.summary}
              rounded={5}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("summary")}
            />
            {errors.summary && (
              <FormHelperText color="red.500">
                {errors.summary.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl id="text" as={GridItem} colSpan={6}>
            <Label>Text</Label>
            <Textarea
              placeholder="Required"
              rows={6}
              rounded={5}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              focusBorderColor="brand.600"
              defaultValue={item.text}
              {...register("text")}
            />
            {errors.text && (
              <FormHelperText color="red.500">
                {errors.text.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="button_name"
              id="button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("button_name")}
            />
            {errors.button_name && (
              <FormHelperText color="red.500">
                {errors.button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="link">Website link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="link"
              id="link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("link")}
            />
            {errors.link && (
              <FormHelperText color="red.500">
                {errors.link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="header_image_url">Header image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="header_image_url"
              id="header_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.header_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("header_image_url")}
            />
            {errors.header_image_url && (
              <FormHelperText color="red.500">
                {errors.header_image_url.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="header_image_source">Header image Source</Label>
            <Input
              placeholder="Required"
              type="text"
              name="header_image_source"
              id="header_image_source"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.header_image_source}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("header_image_source")}
            />
            {errors.header_image_source && (
              <FormHelperText color="red.500">
                {errors.header_image_source.message}
              </FormHelperText>
            )}
          </FormControl>
        </SimpleGrid>
        {updated && (
          <SystemFeedback status="success">{UPDATE_SUCCESS}</SystemFeedback>
        )}
        {updateError && (
          <SystemFeedback status="error">Error: {updateError}</SystemFeedback>
        )}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
          display={{ base: "flex", md: "block" }}
        >
          <Button
            bg="green"
            color="white"
            rounded={5}
            shadow="md"
            mt={useBreakpointValue({ base: 12, md: 8 })}
            w={useBreakpointValue({ base: "47%", md: "" })}
            type="submit"
          >
            {updatingPage ? "Loading.." : "Update"}
          </Button>
          <Button
            bg="red"
            color="white"
            rounded={5}
            shadow="md"
            mt={useBreakpointValue({ base: 12, md: 8 })}
            ml={useBreakpointValue({ base: 0, md: 5 })}
            w={useBreakpointValue({ base: "47%", md: "" })}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Flex>
      </fieldset>
    </chakra.form>
  );
}
