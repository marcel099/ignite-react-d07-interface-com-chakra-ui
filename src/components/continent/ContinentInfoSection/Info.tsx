import { Text } from "@chakra-ui/react";

import { useContinent } from "../../../contexts/ContinentContext";

export function Info() {
  const {
    info
  } = useContinent()

  return (
    <Text
      as="section"
      color="gray.600"
      fontSize={["0.875rem", null, "1.5rem"]}
      fontWeight={400}
      align={["justify", null]}
    >
      {info}
    </Text>
  )
}