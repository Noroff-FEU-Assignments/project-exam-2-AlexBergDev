import React, { useState } from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  useBreakpointValue,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function App() {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "30px 16px",
    color: "white",
    opacity: 0.6,
    fontWeight: "bold",
    fontSize: "20px",
    transition: "0.4s ease",
    userSelect: "none",
    _hover: {
      opacity: 0.4,
      color: "black",
      bg: "white",
    },
  };

  const slides = [
    {
      img: "/assets/images/brand/slide3.jpg",
      label: "The arctic experience",
    },
    {
      img: "/assets/images/brand/slide2.jpg",
      label: "See for yourself",
    },
    {
      img: "/assets/images/brand/slide1.jpg",
      label: "Discover more",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="full" pos="relative" overflow="hidden">
      <Flex
        w="full"
        h={useBreakpointValue({ base: "45vh", md: "60vh" })}
        {...carouselStyle}
      >
        {slides.map((slide, sid) => (
          <Box key={`slide-${sid}`} boxSize="full" flex="none">
            <Image
              src={slide.img}
              alt="carousel image"
              boxSize="full"
              backgroundSize="cover"
              objectFit="cover"
            />
            <Stack
              p="8px 12px"
              pos="absolute"
              bottom="24px"
              textAlign="center"
              w="full"
              mb={{ base: 4, md: 8 }}
              color="white"
            >
              <Heading
                textAlign={"center"}
                color={"white"}
                as="h1"
                lineHeight={1}
                fontSize={{ base: "3xl", md: "4xl" }}
                textTransform="capitalize"
              >
                {slide.label}
              </Heading>
            </Stack>
          </Box>
        ))}
      </Flex>
      <Text
        {...arrowStyles}
        left="0"
        borderRadius={"0 5px 5px 0"}
        onClick={prevSlide}
      >
        &#10094;
      </Text>
      <Text
        {...arrowStyles}
        right="0"
        borderRadius={"5px 0 0 5px"}
        onClick={nextSlide}
      >
        &#10095;
      </Text>
    </Flex>
  );
}
