import { Stack, Text } from "@chakra-ui/react";

type BioInfoProps = {
  value: number
  label: string
}

export function BioItem({ value, label }: BioInfoProps) {
  return (
    <Stack alignItems="center">
      <Text
        color="yellow.500"
        fontSize="3rem"
        fontWeight={600}
      >
        {value}
      </Text>
      <Text
        color="gray.600"
        fontSize="1.5rem"
        fontWeight={600}
      >
        {label}
      </Text>
    </Stack>
  )
}