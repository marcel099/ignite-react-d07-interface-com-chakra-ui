import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityItemProps {
  countryName: string
  countryFlagImageUrl: string
  cityName: string
  cityImageUrl: string
}

export function CityItem({
  countryName,
  countryFlagImageUrl,
  cityName,
  cityImageUrl,
}: CityItemProps) {
  return (
    <Box
      h="17.5rem"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="yellow.400"
    >
      <Box as="header">
        <Image
          src={cityImageUrl}
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
              {cityName}
            </Text>
            <Text
              color="gray.500"
              mt="0.75rem"
              fontSize="1rem"
              fontWeight={500}
              fontFamily="Barlow, sans-serif"
            >
              {countryName}
            </Text>
          </Box>
          <Image
            src={countryFlagImageUrl}
            h="1.875rem"
            w="1.875rem"
            rounded="full"
          />
        </Flex>
      </Box>
    </Box>
  )
}