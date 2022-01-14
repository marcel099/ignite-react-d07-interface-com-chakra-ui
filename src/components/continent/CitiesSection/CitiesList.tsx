import { SimpleGrid } from "@chakra-ui/react";

import { CityItem } from "./CityItem";

export function CitiesList() {
  return (
    <SimpleGrid
      mt="2.5rem"
      spacingX="2.8125rem"
      spacingY="3rem"
      templateColumns="repeat(auto-fill, minmax(15.5rem, 1fr))"
    >
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
    </SimpleGrid>
  )
}