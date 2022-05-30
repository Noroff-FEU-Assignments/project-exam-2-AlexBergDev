import {
  chakra,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Textarea,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import axios from "axios";

import { SystemFeedback } from "@/components/common";
import { BASE_URL, ENQUIRIES_PATH } from "@/constants/api";
import { ENQUIRY_SUCCESS } from "@/constants/messages";
import { SubHeading } from "@/components/layout";

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
    .required("Email address is required")
    .email("Please enter a valid email address"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .min(8, "Please enter a valid phone number"),
  event_type: yup
    .string()
    .required("Event type is required")
    .min(3, "Your event type must be at least 3 characters long"),
  date_arrival: yup
    .string()
    .required("Arrival is required")
    .min(8, "Please enter a valid date"),
  date_departure: yup
    .string()
    .required("Departure is required")
    .min(8, "Please enter a valid date"),
  restaurant: yup.string().required("Please select an option"),
  cafe: yup.string().required("Please select an option"),
  kitchen: yup.string().required("Please select an option"),
  planning_service: yup.string().required("Please select an option"),
  persons_amount: yup.string().required("Please enter an amount"),
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

export default function EventEnquiryForm() {
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

  const url = BASE_URL + ENQUIRIES_PATH;

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
          <SubHeading as={GridItem} colSpan={6} mb={0}>
            Your information
          </SubHeading>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="organisation">Organisation or company name</Label>
            <Input
              placeholder="Optional"
              type="text"
              name="organisation"
              id="organisation"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("organisation")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="first_name">First name</Label>
            <Input
              placeholder="Required"
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
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
              placeholder="Required"
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
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
              placeholder="Required"
              type="text"
              name="email_address"
              id="email_address"
              autoComplete="email"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
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

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              placeholder="Required"
              name="phone_number"
              id="phone_number"
              autoComplete="tel"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("phone_number")}
            />
            {errors.phone_number && (
              <FormHelperText color="red.500">
                {errors.phone_number.message}
              </FormHelperText>
            )}
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={0}>
            Event
          </SubHeading>

          <FormControl as={GridItem} colSpan={6}>
            <Label htmlFor="event_type">Type of event</Label>
            <Input
              placeholder="Required"
              type="text"
              name="event_type"
              id="event_type"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("event_type")}
            />
            {errors.event_type && (
              <FormHelperText color="red.500">
                {errors.event_type.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="date_arrival">Date of arrival</Label>
            <Input
              placeholder="dd/mm/Year (required)"
              type="text"
              name="date_arrival"
              id="date_arrival"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("date_arrival")}
            />
            {errors.date_arrival && (
              <FormHelperText color="red.500">
                {errors.date_arrival.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={3}>
            <Label htmlFor="date_departure">Date of departure</Label>
            <Input
              placeholder="dd/mm/Year (required)"
              type="text"
              name="date_departure"
              id="date_departure"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("date_departure")}
            />
            {errors.date_departure && (
              <FormHelperText color="red.500">
                {errors.date_departure.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="restaurant">Restaurant location</Label>
            <Select
              id="restaurant"
              name="restaurant"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="maybe"
              {...register("restaurant")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
            {errors.restaurant && (
              <FormHelperText color="red.500">
                {errors.restaurant.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="cafe">Cafe location</Label>
            <Select
              id="cafe"
              name="cafe"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="maybe"
              {...register("cafe")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
            {errors.cafe && (
              <FormHelperText color="red.500">
                {errors.cafe.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="kitchen">Professional kitchen</Label>
            <Select
              id="kitchen"
              name="kitchen"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="maybe"
              {...register("kitchen")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
            {errors.kitchen && (
              <FormHelperText color="red.500">
                {errors.kitchen.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="planning_service">Planning service</Label>
            <Select
              id="planning_service"
              name="planning_service"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="maybe"
              {...register("planning_service")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
            {errors.planning_service && (
              <FormHelperText color="red.500">
                {errors.planning_service.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="persons_amount">Number of persons</Label>
            <Input
              placeholder="Maximum 400 persons (required)"
              name="persons_amount"
              id="persons_amount"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("persons_amount")}
            />
            {errors.persons_amount && (
              <FormHelperText color="red.500">
                {errors.persons_amount.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label>Additional or notes</Label>
            <Textarea
              placeholder="Optional"
              name="event_notes"
              id="event_notes"
              mt={1}
              rows={4}
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              {...register("event_notes")}
            />
          </FormControl>

          <SubHeading as={GridItem} colSpan={6} mb={0}>
            Accommodation (Optional)
          </SubHeading>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="guests_amount">Number of guests</Label>
            <Input
              placeholder="Optional"
              name="guests_amount"
              id="guests_amount"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              {...register("guests_amount")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="rooms">
              Number of hotel rooms (maximum 4 guests per room)
            </Label>
            <Select
              id="rooms"
              name="rooms"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="no"
              {...register("rooms")}
            >
              <option value="0">No rooms</option>
              <option value="1">1 room</option>
              <option value="2">2 rooms</option>
              <option value="3">3 rooms</option>
              <option value="4">4 rooms</option>
              <option value="5">5 rooms</option>
              <option value="maybe">Not sure</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="cabin">Traditional cabin</Label>
            <Select
              id="cabin"
              name="cabin"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="no"
              {...register("cabin")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="beds">More beds necessary</Label>
            <Select
              id="beds"
              name="beds"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="no"
              {...register("beds")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <Label htmlFor="breakfast">Breakfast included</Label>
            <Select
              id="breakfast"
              name="breakfast"
              placeholder="Select a value"
              mt={1}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              w="full"
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              initalvalue="no"
              {...register("breakfast")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="maybe">Not sure</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
            <Label>Additional or notes</Label>
            <Textarea
              placeholder="Optional"
              id="accommodation_notes"
              name="accommodation_notes"
              mt={1}
              rows={4}
              rounded={0}
              borderColor={useColorModeValue("brand.500", "brand.50")}
              focusBorderColor={useColorModeValue("brand.400", "brand.600")}
              {...register("accommodation_notes")}
            />
          </FormControl>
        </SimpleGrid>
        {updated && (
          <SystemFeedback status="success">{ENQUIRY_SUCCESS}</SystemFeedback>
        )}
        {serverError && (
          <SystemFeedback status="error">Error: {serverError}</SystemFeedback>
        )}

        <Button variant="secondary" my={8} type="submit">
          {submitting ? "Sending enquiry..." : "Send enquiry"}
        </Button>
      </fieldset>
    </chakra.form>
  );
}
