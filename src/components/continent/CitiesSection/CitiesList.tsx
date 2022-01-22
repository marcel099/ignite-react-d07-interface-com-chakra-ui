import { SimpleGrid } from "@chakra-ui/react";
import { useContinent } from "../../../contexts/ContinentContext";

import { CityItem } from "./CityItem";

export function CitiesList() {
  const {
    countries,
    isLoading,
  } = useContinent()

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
      {!isLoading && countries.map(country => {
        return country.cities.map(city => (
          <CityItem
            key={city.id}
            cityName={city.name}
            cityImageUrl={city.imageUrl}
            countryName={country.name}
            countryFlagImageUrl={country.flagImageUrl}
          />
        ))
      })}
    </SimpleGrid>
  )
}