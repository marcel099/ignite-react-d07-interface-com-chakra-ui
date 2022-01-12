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
      mt="7.125rem"
    >
      <ListItem 
        // _before={{
        //   content: `"\2022"`,    // bug
        //   color: "yellow.500",
        //   fontWeight: "bold",
        //   display: "inline-block",
        //   width: "1em",
        //   ml: "-1em",
        // }}
      >
        <TravelTypesItem
          label="vida noturna"
          imageSrc="cocktail.svg"
          imageAlt="Taça de coquetel"
        />
      </ListItem>
      <ListItem>
        <TravelTypesItem
          label="praia"
          imageSrc="surf.svg"
          imageAlt="Prancha de surf na areia da praia"
        />
      </ListItem>
      <ListItem>
        <TravelTypesItem
          label="moderno"
          imageSrc="building.svg"
          imageAlt="Edifício"
        />
      </ListItem>
      <ListItem>
        <TravelTypesItem
          label="clássico"
          imageSrc="museum.svg"
          imageAlt="Museu"
        />
      </ListItem>
      <ListItem>
        <TravelTypesItem
          label="e mais..."
          imageSrc="earth.svg"
          imageAlt="Planeta Terra"
        />
      </ListItem>
    </UnorderedList>
  )
}