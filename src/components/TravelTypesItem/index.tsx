import { Image, Text, VStack } from "@chakra-ui/react";

type TravelTypesItemProps = {
  label: string
  imageSrc: string
  imageAlt: string
}

export function TravelTypesItem({ label, imageSrc, imageAlt }: TravelTypesItemProps) {
  return (
    <VStack alignItems="center">
      <Image src={imageSrc} alt={imageAlt} display={["none", "block"]}/>
      <Text fontWeight={600} fontSize="1.5rem">
        {label}
      </Text>
    </VStack>
  )
}