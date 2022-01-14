import { Box, Heading } from "@chakra-ui/react";

import { CitiesList } from "./CitiesList";

export function CitiesSection() {
  return (
    <Box
      as="section"
      mt={["2rem", null, "5rem"]} 
    >
      <Heading
        as="h2"
        color="gray.600"
        fontSize={["1.5rem", null, "2.25rem"]}
        fontWeight={500}
      >
        Cidades +100
      </Heading>
      <CitiesList />
    </Box>
  )
}