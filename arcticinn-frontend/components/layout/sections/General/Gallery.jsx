import React, { useState } from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Stack,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/assets/images/brand/slide2.jpg",
      label: "See for yourself",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "/assets/images/brand/slide1.jpg",
      label: "Discover more",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
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
    <>
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex
          onClick={onOpen}
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
                  as="h3"
                  lineHeight={1}
                  fontSize={{ base: "xl", md: "2xl" }}
                  textTransform="uppercase"
                >
                  {sid + 1} / {slidesCount} {slide.label}
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
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxh="100vh"
          bg={useColorModeValue("whiteAlpha.900", "blackAlpha.800")}
          rounded="0"
        >
          <ModalHeader>Gallery</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} m={0}>
            <Flex w="full" pos="relative" overflow="hidden">
              <Flex w="full" h="full" {...carouselStyle}>
                {slides.map((slide, sid) => (
                  <Box key={`slide-${sid}`} boxSize="full" flex="none">
                    <HStack
                      justify="center"
                      pos="absolute"
                      bottom="8px"
                      w="full"
                    >
                      {Array.from({ length: slidesCount }).map((_, slide) => (
                        <Box
                          key={`dots-${slide}`}
                          cursor="pointer"
                          boxSize={["7px", , "15px"]}
                          m="0 2px"
                          bg={
                            currentSlide === slide
                              ? "whiteAlpha.800"
                              : "whiteAlpha.500"
                          }
                          display="inline-block"
                          transition="background-color 0.6s ease"
                          _hover={{ bg: "whiteAlpha.800" }}
                          onClick={() => setSlide(slide)}
                        ></Box>
                      ))}
                    </HStack>
                    <Image
                      src={slide.img}
                      alt="carousel image"
                      boxSize="full"
                      backgroundSize="cover"
                      objectFit="cover"
                    />
                    <Box p={10}>
                      <Heading
                        textAlign={"center"}
                        as="h3"
                        lineHeight={1}
                        fontSize={{ base: "xl", md: "2xl" }}
                        textTransform="uppercase"
                        mb={5}
                      >
                        {sid + 1} / {slidesCount} {slide.label}
                      </Heading>
                      <Text fontSize="md" textAlign={"center"}>
                        {slide.description}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </Flex>
              <Text
                {...arrowStyles}
                left="0"
                borderRadius={"0 5px 5px 0"}
                top={"30%"}
                onClick={prevSlide}
              >
                &#10094;
              </Text>
              <Text
                {...arrowStyles}
                right="0"
                borderRadius={"5px 0 0 5px"}
                top={"30%"}
                onClick={nextSlide}
              >
                &#10095;
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
