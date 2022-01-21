import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function CityItem() {
  return (
    <Box
      h="17.5rem"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="yellow.400"
    >
      <Box as="header">
        <Image
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
          alt="Londres"
          h="10.76rem"
          w="100%"
        />
      </Box>
      <Box as="main" p="1.125rem 1.5rem 1.5625rem 1.5rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text
              as="h3"
              color="gray.600"
              fontSize="1.25rem"
              fontWeight={600}
              fontFamily="Barlow, sans-serif"
            >
              Londres
            </Text>
            <Text
              color="gray.500"
              mt="0.75rem"
              fontSize="1rem"
              fontWeight={500}
              fontFamily="Barlow, sans-serif"
            >
              Reino Unido
            </Text>
          </Box>
          <Image
            src="https://catamphetamine.gitlab.io/country-flag-icons/1x1/GB.svg"
            h="1.875rem"
            w="1.875rem"
            rounded="full"
          />
        </Flex>
      </Box>
    </Box>
  )
}