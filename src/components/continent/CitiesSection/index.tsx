import { Box, Heading } from "@chakra-ui/react";

import { CitiesList } from "./CitiesList";

export function CitiesSection() {
  return (
    <Box as="section" mt="5rem" mb="2.25rem">
    { /* todo aplicar mb depois em um local correto */ }
      <Heading
        as="h2"
        color="gray.600"
        fontSize="2.25rem"
        fontWeight={500}
      >
        Cidades +100
      </Heading>
      <CitiesList />
    </Box>
  )
}