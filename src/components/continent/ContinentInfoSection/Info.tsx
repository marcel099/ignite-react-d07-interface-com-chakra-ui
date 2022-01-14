import { Text } from "@chakra-ui/react";

export function Info() {
  return (
    <Text
      as="section"
      color="gray.600"
      fontSize={["0.875rem", null, "1.5rem"]}
      fontWeight={400}
      align={["justify", null]}
    >
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
    </Text>
  )
}