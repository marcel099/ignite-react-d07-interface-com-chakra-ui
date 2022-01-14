import { SimpleGrid } from "@chakra-ui/react";

import { CityItem } from "./CityItem";

export function CitiesList() {
  return (
    <SimpleGrid
      mt={["1.25rem", null, "2.5rem"]}
      spacingX="2.8125rem"
      spacingY={["1.25rem", null, "3rem"]}
      templateColumns={[
        "16rem", "repeat(2, 16rem)", "repeat(auto-fill, minmax(15.5rem, 1fr))"
      ]}
      justifyContent="center"
    >
      <CityItem />
      <CityItem />
      <CityItem />
      <CityItem />
    </SimpleGrid>
  )
}