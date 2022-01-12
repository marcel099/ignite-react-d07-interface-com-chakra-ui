import { Text } from "@chakra-ui/react";

export function InvitingText() {
  return (
    <Text
      mt="3.25rem"
      fontWeight={500}
      fontSize="2.25rem"
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