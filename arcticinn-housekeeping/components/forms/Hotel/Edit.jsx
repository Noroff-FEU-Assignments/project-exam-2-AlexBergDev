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

import useAxios from "@/hooks/useAxios";
import { SubHeading } from "@/components/layout";
import { SystemFeedback } from "@/components/common";
import { UPDATE_SUCCESS } from "@/constants/messages";
import { BASE_URL, ACCOMMODATION_PATH } from "@/constants/api";

const schema = yup.object().shape({
  head_title: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  head_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  hotel_name: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  hotel_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  hotel_currency: yup.string().required("This field is required"),
  hotel_button_name: yup
    .string()
    .required("This field is required")
    .min(4, "Must be at least 4 characters long"),
  hotel_link: yup.string().required("This field is required"),
  hotel_image_url: yup.string().required("This field is required"),
  cabin_name: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  cabin_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  cabin_currency: yup.string().required("This field is required"),
  cabin_button_name: yup
    .string()
    .required("This field is required")
    .min(4, "Must be at least 4 characters long"),
  cabin_link: yup.string().required("This field is required"),
  cabin_image_url: yup.string().required("This field is required"),
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

export default function FormOpeningHoursEdit({ items }) {
  const [updated, setUpdated] = useState(false);
  const [updatingPage, setUpdatingPage] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const item = items.attributes;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();

  const url = BASE_URL + ACCOMMODATION_PATH;

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

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={updatingPage}>
        <SimpleGrid columns={6} spacing={5}>
          <SubHeading as={GridItem} colSpan={6} mb={2}>
            Head information (SEO)
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="head_title">Head title</Label>
            <Input
              placeholder="Required"
              type="text"
              name="head_title"
              id="head_title"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.head_title}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("head_title")}
            />
            {errors.head_title && (
              <FormHelperText color="red.500">
                {errors.head_title.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="head_description">Head description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="head_description"
              id="head_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.head_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("head_description")}
            />
            {errors.head_description && (
              <FormHelperText color="red.500">
                {errors.head_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={2} mt={8}>
            {item.hotel_name}
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="hotel_name">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="hotel_name"
              id="hotel_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_name")}
            />
            {errors.hotel_name && (
              <FormHelperText color="red.500">
                {errors.hotel_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="hotel_description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="hotel_description"
              id="hotel_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_description")}
            />
            {errors.hotel_description && (
              <FormHelperText color="red.500">
                {errors.hotel_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="hotel_currency">Currency</Label>
            <Input
              placeholder="Required"
              type="text"
              name="hotel_currency"
              id="hotel_currency"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_currency}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_currency")}
            />
            {errors.hotel_currency && (
              <FormHelperText color="red.500">
                {errors.hotel_currency.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="hotel_price">Price</Label>
            <Input
              placeholder="Required"
              type="text"
              name="hotel_price"
              id="hotel_price"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_price}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_price")}
            />
            {errors.hotel_price && (
              <FormHelperText color="red.500">
                {errors.hotel_price.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="hotel_details">Details</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="hotel_details"
              id="hotel_details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_details")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="hotel_button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="hotel_button_name"
              id="hotel_button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_button_name")}
            />
            {errors.hotel_button_name && (
              <FormHelperText color="red.500">
                {errors.hotel_button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="hotel_link">Link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="hotel_link"
              id="hotel_link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_link")}
            />
            {errors.hotel_link && (
              <FormHelperText color="red.500">
                {errors.hotel_link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="hotel_image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="hotel_image_url"
              id="hotel_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.hotel_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("hotel_image_url")}
            />
            {errors.hotel_image_url && (
              <FormHelperText color="red.500">
                {errors.hotel_image_url.message}
              </FormHelperText>
            )}
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={2} mt={8}>
            {item.cabin_name}
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="cabin_name">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="cabin_name"
              id="cabin_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_name")}
            />
            {errors.cabin_name && (
              <FormHelperText color="red.500">
                {errors.cabin_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="cabin_description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="cabin_description"
              id="cabin_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_description")}
            />
            {errors.cabin_description && (
              <FormHelperText color="red.500">
                {errors.cabin_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="cabin_currency">Currency</Label>
            <Input
              placeholder="Required"
              type="text"
              name="cabin_currency"
              id="cabin_currency"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_currency}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_currency")}
            />
            {errors.cabin_currency && (
              <FormHelperText color="red.500">
                {errors.cabin_currency.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="cabin_details">Details</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="cabin_details"
              id="cabin_details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_details")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="cabin_button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="cabin_button_name"
              id="cabin_button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_button_name")}
            />
            {errors.cabin_button_name && (
              <FormHelperText color="red.500">
                {errors.cabin_button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="cabin_link">Link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="cabin_link"
              id="cabin_link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_link")}
            />
            {errors.cabin_link && (
              <FormHelperText color="red.500">
                {errors.cabin_link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="cabin_image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="cabin_image_url"
              id="cabin_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.cabin_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("cabin_image_url")}
            />
            {errors.cabin_image_url && (
              <FormHelperText color="red.500">
                {errors.cabin_image_url.message}
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
        </Flex>
      </fieldset>
    </chakra.form>
  );
}
