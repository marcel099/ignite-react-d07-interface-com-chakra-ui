import { Button, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import { FiChevronLeft } from 'react-icons/fi';

export function WebsiteHeader() {
  return (
    <SimpleGrid
      as="header"
      templateColumns="repeat(3, 1fr)"
      alignItems="center"
      height="100"
    >
      <Button
        leftIcon={<Icon as={FiChevronLeft} />}
        mr="auto"
        background="transparent"
        justifySelf="start"
      ></Button>
      <Image
        src="logo.svg"
        alt="Avião"
        h="2.87rem"
        justifySelf="center"
      />
    </SimpleGrid>
  )
} // 72.5rem de largura
