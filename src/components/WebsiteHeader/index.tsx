import { Button, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import { FiChevronLeft } from 'react-icons/fi';

type WebsiteHeaderProps = {
  containReturnButton: boolean
}

export function WebsiteHeader({ containReturnButton = false }: WebsiteHeaderProps) {
  return (
    <SimpleGrid
      as="header"
      templateColumns="repeat(3, 1fr)"
      alignItems="center"
      height="100"
    >
      {containReturnButton && (
        <Button
          leftIcon={<Icon as={FiChevronLeft} />}
          mr="auto"
          background="transparent"
          justifySelf="start"
          gridColumn={1}
        ></Button>
      )}
      <Image
        src="logo.svg"
        alt="Avião"
        h="2.87rem"
        justifySelf="center"
        gridColumn={2}
      />
    </SimpleGrid>
  )
} // 72.5rem de largura
