import Link from "next/link";
import Image from "next/image";
import { Box, Button, Icon, SimpleGrid } from "@chakra-ui/react";
import { FiChevronLeft } from 'react-icons/fi';

type WebsiteHeaderProps = {
  containReturnButton?: boolean
}

export function WebsiteHeader({ containReturnButton = false }: WebsiteHeaderProps) {
  return (
    <SimpleGrid
      as="header"
      templateColumns="repeat(3, 1fr)"
      alignItems="center"
      h={["3.125rem", null, "6.25rem"]}
    >
      {containReturnButton && (
        <Link href="/">
          <Button
            leftIcon={<Icon as={FiChevronLeft} />}
            mr="auto"
            background="transparent"
            justifySelf="start"
            gridColumn={1}
          ></Button>
        </Link>
      )}
      <Box
        justifySelf="center"
        gridColumn={2}
      >
        <Image
          src="/logo.svg"
          alt="Avião"
          height={45.92}
          width={184.06}
        />
      </Box>
    </SimpleGrid>
  )
}
