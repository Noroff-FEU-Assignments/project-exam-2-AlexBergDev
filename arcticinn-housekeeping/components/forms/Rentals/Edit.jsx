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
import { BASE_URL, RENTALS_PATH } from "@/constants/api";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 6 characters long"),
  description: yup
    .string()
    .required("Description is required")
    .min(12, "Description must be at least 12 characters long"),
  pricing_from_label: yup.string().required("From label is required"),
  currency: yup.string().required("Currency is required"),
  price: yup.number().required("Price is required"),
  details: yup.string().required("Details are required"),
  button_name: yup.string().required("Header URL is required"),
  link: yup.string().required("Link is required"),
  image_url: yup.string().required("Image is required"),
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

export default function FormRentalsEdit({ detail }) {
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

  const url = BASE_URL + RENTALS_PATH + "/" + detail.id;

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
    const confirmDelete = window.confirm("Delete this rental?");

    if (confirmDelete) {
      try {
        await http.delete(url);
        router.push("/rentals");
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
            <Label htmlFor="name">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="name"
              id="name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("name")}
            />
            {errors.name && (
              <FormHelperText color="red.500">
                {errors.name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="description"
              id="description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("description")}
            />
            {errors.description && (
              <FormHelperText color="red.500">
                {errors.description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="pricing_from_label">From label</Label>
            <Input
              placeholder="Required"
              type="text"
              name="pricing_from_label"
              id="pricing_from_label"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.pricing_from_label}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("pricing_from_label")}
            />
            {errors.pricing_from_label && (
              <FormHelperText color="red.500">
                {errors.pricing_from_label.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[3, 3]}>
            <Label htmlFor="currency">Currency</Label>
            <Input
              placeholder="Required"
              type="text"
              name="currency"
              id="currency"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.currency}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("currency")}
            />
            {errors.currency && (
              <FormHelperText color="red.500">
                {errors.currency.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[3, 3]}>
            <Label htmlFor="price">Price</Label>
            <Input
              placeholder="Required"
              type="text"
              name="price"
              id="price"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.price}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("price")}
            />
            {errors.price && (
              <FormHelperText color="red.500">
                {errors.price.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="details">Details</Label>
            <Input
              placeholder="Required"
              type="text"
              name="details"
              id="details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("details")}
            />
            {errors.details && (
              <FormHelperText color="red.500">
                {errors.details.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
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
            <Label htmlFor="image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="image_url"
              id="image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("image_url")}
            />
            {errors.image_url && (
              <FormHelperText color="red.500">
                {errors.image_url.message}
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
