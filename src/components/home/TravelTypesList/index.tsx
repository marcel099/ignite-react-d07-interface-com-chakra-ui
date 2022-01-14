import { ListItem, UnorderedList } from "@chakra-ui/react";

import { TravelTypesItem } from "./TravelTypesItem";

export function TravelTypesList() {
  return (
    <UnorderedList
      display="flex"
      justifyContent={["center", null, "space-between"]}
      flexWrap="wrap"
      columnGap={["4rem", "3rem", "2rem"]}

      listStyleType={["initial", "none"]}

      px="10"
      ml="0"
      mt={["2.25rem", null, "7.125rem"]}
    >
      <TravelTypesItem
        label="vida noturna"
        imageSrc="icons/cocktail.svg"
        imageAlt="Taça de coquetel"
      />
      <TravelTypesItem
        label="praia"
        imageSrc="icons/surf.svg"
        imageAlt="Prancha de surf na areia da praia"
      />
      <TravelTypesItem
        label="moderno"
        imageSrc="icons/building.svg"
        imageAlt="Edifício"
      />
      <TravelTypesItem
        label="clássico"
        imageSrc="icons/museum.svg"
        imageAlt="Museu"
      />
      <TravelTypesItem
        label="e mais..."
        imageSrc="icons/earth.svg"
        imageAlt="Planeta Terra"
      />
    </UnorderedList>
  )
}