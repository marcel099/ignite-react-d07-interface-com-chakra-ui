import { Flex, Heading } from "@chakra-ui/react";

import { useContinent } from "../../../contexts/ContinentContext";

export function ContinentTitle() {
  const {
    name
  } = useContinent()

  return (
    <Flex
      h={["9.375rem", null, "31.25rem"]}
      display="flex"
      justifyContent={["center", null, "stretch"]}
      alignItems={["center", null, "stretch"]}
    >
      <Heading
        as="h1"
        color="gray.50"
        fontSize={["1.75rem", null, "3rem"]}
        fontWeight={700}
        mt={[null, null, "auto"]}
        mb={[null, null, "3.75rem"]}
      >
        {name}
      </Heading>
    </Flex>
  )
}