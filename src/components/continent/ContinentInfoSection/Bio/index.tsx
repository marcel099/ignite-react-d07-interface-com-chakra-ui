import { Flex } from "@chakra-ui/react";

import { useContinent } from "../../../../contexts/ContinentContext";

import { BioItem } from './BioItem'

export function Bio() {
  const {
    totalCountries,
    totalLanguages,
    countries,
    isLoading,
  } = useContinent()

  let totalCities100 = 0

  // console.log({isLoading})
  // console.log({countries})

  if (!isLoading) {
    totalCities100 = countries.reduce((totalCities100, country) => {
      return totalCities100 + country.cities.length
    }, 0)
  }

  return (
    <Flex
      justifyContent="flex-start"
      gap={["2.375rem", null, "2.625rem"]}
    >
      <BioItem value={totalCountries} label="países" />
      <BioItem value={totalLanguages} label="línguas" />
      <BioItem value={totalCities100} label="cidades +100" />
    </Flex>
  )
}