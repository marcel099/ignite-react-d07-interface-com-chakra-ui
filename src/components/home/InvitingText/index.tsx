import { Text } from "@chakra-ui/react";

export function InvitingText() {
  return (
    <Text
      mt={["1.5rem", null, "3.25rem"]}
      fontWeight={500}
      fontSize={["1.25rem", null, "2.25rem"]}
      color="gray.600"
      textAlign="center"
    >
      <Text as="span" display="block">
        Vamos nessa?
      </Text>
      <Text as="span">
        Então escolha seu continente
      </Text>
    </Text>
  )
}