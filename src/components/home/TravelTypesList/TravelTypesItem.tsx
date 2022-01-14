import { Image, ListItem, Text, VStack } from "@chakra-ui/react";

type TravelTypesItemProps = {
  label: string
  imageSrc: string
  imageAlt: string
}

export function TravelTypesItem({ label, imageSrc, imageAlt }: TravelTypesItemProps) {
  return (
    <ListItem
      _notLast={{
        mb: ["1.5rem", null]
      }}
      // _before={{
      //   content: `"\2022"`,    // bug
      //   color: "yellow.500",
      //   fontWeight: "bold",
      //   display: "inline-block",
      //   width: "1em",
      //   ml: "-1em",
      // }}
    >
      <VStack
        alignItems="center"

      >
        <Image src={imageSrc} alt={imageAlt} display={["none", "initial"]}/>
        <Text
          fontWeight={600}
          fontSize={["1.125rem", "1.5rem"]}
          color="gray.600"
        >
          {label}
        </Text>
      </VStack>
    </ListItem>
  )
}