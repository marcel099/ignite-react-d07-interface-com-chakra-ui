import { Stack, Text } from "@chakra-ui/react";

type BioInfoProps = {
  value: number
  label: string
}

export function BioItem({ value, label }: BioInfoProps) {
  return (
    <Stack alignItems={["flex-start", null, "center"]}>
      <Text
        color="yellow.500"
        fontSize={["1.5rem", null, "3rem"]}
        fontWeight={600}
      >
        {value}
      </Text>
      <Text
        color="gray.600"
        fontSize={["1.125rem", null, "1.5rem"]}
        fontWeight={600}
        mt={["0", null]}
      >
        {label}
      </Text>
    </Stack>
  )
}