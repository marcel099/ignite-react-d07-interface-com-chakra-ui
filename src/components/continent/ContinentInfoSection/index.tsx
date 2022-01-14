import { SimpleGrid } from "@chakra-ui/react";

import { Bio } from "./Bio";
import { Info } from "./Info";

export function ContinentInfoSection() {
  return (
    <SimpleGrid
      as="section"
      mt={["1.5rem", null, "5rem"]}
      spacingX="4.375rem"
      spacingY="1rem"
      columns={[1, null, null, 2]}
    >
      <Info />
      <Bio />
    </SimpleGrid>
  )
}