import {
  Box, Heading, Image, SimpleGrid, Text
} from "@chakra-ui/react";

export function HomeHeader() {
  return (
    <SimpleGrid
      as="header"
      h={["10.125rem", null, "21rem"]}
      mx="-2.5"
      px={["1rem", null, null, null, "0"]}
      
      columns={[1, null, 2]}
      alignItems="center"
    >
      <Box as="section">
        <Heading
          as='h1'
          fontSize={["1.25rem", null, "2.25rem"]}
          fontWeight={500}
          color="gray.50"
        >
          <Text as="span" display="block">
            5 Continentes,
          </Text>
          <Text as="span">
            infinitas possibilidades
          </Text>
        </Heading>
        <Text
          fontSize={["0.875rem", null, "1.25rem"]}
          fontWeight={400}
          color="gray.300"
          maxWidth="32.75rem"
          mt="5"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Box>
      <Box
        as="section"
        display={["none", null, "initial"]}
        position="relative"
        h="100%"
      >
        <Box
          position="absolute"
          bottom="-2rem"
          left="50%"
          transform="translateX(-50%) rotate(3deg)"
        >
          <Image
            src="airplane.svg"
            alt="Avião"
            w="418px"
            maxW="initial"
          />
        </Box>
      </Box>
    </SimpleGrid>
  )
}