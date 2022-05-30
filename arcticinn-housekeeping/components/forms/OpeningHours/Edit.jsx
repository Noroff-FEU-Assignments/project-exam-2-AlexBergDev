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
import { BASE_URL, OPENING_HOUR_PATH } from "@/constants/api";

const schema = yup.object().shape({
  head_title: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  head_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  reception_name: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  reception_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  reception_time: yup.string().required("This field is required"),
  reception_button_name: yup
    .string()
    .required("This field is required")
    .min(4, "Must be at least 4 characters long"),
  reception_link: yup.string().required("This field is required"),
  reception_image_url: yup.string().required("This field is required"),
  breakfast_name: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  breakfast_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  breakfast_time: yup.string().required("This field is required"),
  breakfast_button_name: yup
    .string()
    .required("This field is required")
    .min(4, "Must be at least 4 characters long"),
  breakfast_link: yup.string().required("This field is required"),
  breakfast_image_url: yup.string().required("This field is required"),
  dinner_name: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  dinner_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  dinner_time: yup.string().required("This field is required"),
  dinner_button_name: yup
    .string()
    .required("This field is required")
    .min(4, "Must be at least 4 characters long"),
  dinner_link: yup.string().required("This field is required"),
  dinner_image_url: yup.string().required("This field is required"),
  room_service_name: yup
    .string()
    .required("This field is required")
    .min(6, "Must be at least 6 characters long"),
  room_service_description: yup
    .string()
    .required("This field is required")
    .min(12, "Description must be at least 12 characters long"),
  room_service_time: yup.string().required("This field is required"),
  room_service_button_name: yup
    .string()
    .required("This field is required")
    .min(4, "Must be at least 4 characters long"),
  room_service_link: yup.string().required("This field is required"),
  room_service_image_url: yup.string().required("This field is required"),
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

  const url = BASE_URL + OPENING_HOUR_PATH;

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
            {item.reception_name}
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="reception_name">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="reception_name"
              id="reception_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("reception_name")}
            />
            {errors.reception_name && (
              <FormHelperText color="red.500">
                {errors.reception_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="reception_description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="reception_description"
              id="reception_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("reception_description")}
            />
            {errors.reception_description && (
              <FormHelperText color="red.500">
                {errors.reception_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="reception_time">Opening hours</Label>
            <Input
              placeholder="Required"
              type="text"
              name="reception_time"
              id="reception_time"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_time}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("reception_time")}
            />
            {errors.reception_time && (
              <FormHelperText color="red.500">
                {errors.reception_time.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="reception_details">Details</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="reception_details"
              id="reception_details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="reception_button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="reception_button_name"
              id="reception_button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("reception_button_name")}
            />
            {errors.reception_button_name && (
              <FormHelperText color="red.500">
                {errors.reception_button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="reception_link">Link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="reception_link"
              id="reception_link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("reception_link")}
            />
            {errors.reception_link && (
              <FormHelperText color="red.500">
                {errors.reception_link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="reception_image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="reception_image_url"
              id="reception_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.reception_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("reception_image_url")}
            />
            {errors.reception_image_url && (
              <FormHelperText color="red.500">
                {errors.reception_image_url.message}
              </FormHelperText>
            )}
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={2} mt={8}>
            {item.breakfast_name}
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="breakfast_name">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="breakfast_name"
              id="breakfast_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("breakfast_name")}
            />
            {errors.breakfast_name && (
              <FormHelperText color="red.500">
                {errors.breakfast_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="breakfast_description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="breakfast_description"
              id="breakfast_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("breakfast_description")}
            />
            {errors.breakfast_description && (
              <FormHelperText color="red.500">
                {errors.breakfast_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="breakfast_time">Opening hours</Label>
            <Input
              placeholder="Required"
              type="text"
              name="breakfast_time"
              id="breakfast_time"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_time}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("breakfast_time")}
            />
            {errors.breakfast_time && (
              <FormHelperText color="red.500">
                {errors.breakfast_time.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="breakfast_details">Details</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="breakfast_details"
              id="breakfast_details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="breakfast_button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="breakfast_button_name"
              id="breakfast_button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("breakfast_button_name")}
            />
            {errors.breakfast_button_name && (
              <FormHelperText color="red.500">
                {errors.breakfast_button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="breakfast_link">Link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="breakfast_link"
              id="breakfast_link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("breakfast_link")}
            />
            {errors.breakfast_link && (
              <FormHelperText color="red.500">
                {errors.breakfast_link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="breakfast_image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="breakfast_image_url"
              id="breakfast_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.breakfast_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("breakfast_image_url")}
            />
            {errors.breakfast_image_url && (
              <FormHelperText color="red.500">
                {errors.breakfast_image_url.message}
              </FormHelperText>
            )}
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={2} mt={8}>
            {item.dinner_name}
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="dinner_name">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="dinner_name"
              id="dinner_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("dinner_name")}
            />
            {errors.dinner_name && (
              <FormHelperText color="red.500">
                {errors.dinner_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="dinner_description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="dinner_description"
              id="dinner_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("dinner_description")}
            />
            {errors.dinner_description && (
              <FormHelperText color="red.500">
                {errors.dinner_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="dinner_time">Opening hours</Label>
            <Input
              placeholder="Required"
              type="text"
              name="dinner_time"
              id="dinner_time"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_time}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("dinner_time")}
            />
            {errors.dinner_time && (
              <FormHelperText color="red.500">
                {errors.dinner_time.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="dinner_details">Details</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="dinner_details"
              id="dinner_details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="dinner_button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="dinner_button_name"
              id="dinner_button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("dinner_button_name")}
            />
            {errors.dinner_button_name && (
              <FormHelperText color="red.500">
                {errors.dinner_button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="dinner_link">Link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="dinner_link"
              id="dinner_link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("dinner_link")}
            />
            {errors.dinner_link && (
              <FormHelperText color="red.500">
                {errors.dinner_link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="dinner_image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="dinner_image_url"
              id="dinner_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.dinner_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("dinner_image_url")}
            />
            {errors.dinner_image_url && (
              <FormHelperText color="red.500">
                {errors.dinner_image_url.message}
              </FormHelperText>
            )}
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={2} mt={8}>
            {item.room_service_name}
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="room_service">Name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="room_service"
              id="room_service"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("room_service_name")}
            />
            {errors.room_service_name && (
              <FormHelperText color="red.500">
                {errors.room_service_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="room_service_description">Description</Label>
            <Textarea
              placeholder="Required"
              type="text"
              name="room_service_description"
              id="room_service_description"
              rows={3}
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_description}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("room_service_description")}
            />
            {errors.room_service_description && (
              <FormHelperText color="red.500">
                {errors.room_service_description.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 4]}>
            <Label htmlFor="room_service_time">Opening hours</Label>
            <Input
              placeholder="Required"
              type="text"
              name="room_service_time"
              id="room_service_time"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_time}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("room_service_time")}
            />
            {errors.room_service_time && (
              <FormHelperText color="red.500">
                {errors.room_service_time.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="room_service_details">Details</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="room_service_details"
              id="room_service_details"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_details}
              borderColor={useColorModeValue("brand.200", "brand.300")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="room_service_button_name">Button name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="room_service_button_name"
              id="room_service_button_name"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_button_name}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("room_service_button_name")}
            />
            {errors.room_service_button_name && (
              <FormHelperText color="red.500">
                {errors.room_service_button_name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="room_service_link">Link</Label>
            <Input
              placeholder="Required"
              type="text"
              name="room_service_link"
              id="room_service_link"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_link}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("room_service_link")}
            />
            {errors.room_service_link && (
              <FormHelperText color="red.500">
                {errors.room_service_link.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="room_service_image_url">Image URL</Label>
            <Input
              placeholder="Required"
              type="text"
              name="room_service_image_url"
              id="room_service_image_url"
              focusBorderColor="brand.600"
              w="full"
              rounded={5}
              defaultValue={item.room_service_image_url}
              borderColor={useColorModeValue("brand.200", "brand.300")}
              {...register("room_service_image_url")}
            />
            {errors.room_service_image_url && (
              <FormHelperText color="red.500">
                {errors.room_service_image_url.message}
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
