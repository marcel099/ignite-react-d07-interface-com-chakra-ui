import { Flex } from "@chakra-ui/react";

import { BioItem } from './BioItem'

export function Bio() {
  return (
    <Flex
      justifyContent="flex-start"
      gap={["2.375rem", null, "2.625rem"]}
    >
      <BioItem value={50} label="países" />
      <BioItem value={60} label="línguas" />
      <BioItem value={27} label="cidades +100" />
    </Flex>
  )
}