import Head from "next/head";
import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { PageContainer } from "../components/PageContainer";

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continente | worldtrip</title>
      </Head>
      <PageContainer>
        <>
          <WebsiteHeader containReturnButton={true} />
          <Box
            position="absolute"
            zIndex="-1"
            top="6.25rem"
            h="31.25rem"
            w="100vw"
            px="0"

            background="url(https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
            backgroundRepeat="no-repeat"
            backgroundSize="auto"
            backgroundPosition="center bottom"
            backgroundAttachment="fixed"
          />
          <Heading
            as="h1"
            mt="23rem"
            color="gray.50"
            fontSize="3rem"
            fontWeight={700}
          >
            Europa
          </Heading>
          <SimpleGrid
            as="main"
            mt="8.75rem"
            spacingX="4.375rem"
            columns={[2]}
          >
            <Text
              as="section"
              color="gray.600"
              fontSize="1.5rem"
              fontWeight={400}
            >
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
            <Flex
              justifyContent="flex-start"
              gap="2.625rem"
            >
              <Stack>
                <Text
                  color="yellow.500"
                  fontSize="3rem"
                  fontWeight={600}
                >
                  50
                </Text>
                <Text
                  color="gray.600"
                  fontSize="1.5rem"
                  fontWeight={600}
                >
                  países
                </Text>
              </Stack>
              <Box>
                <Text>60</Text>
                <Text>línguas</Text>
              </Box>
              <Box>
                <Text>27</Text>
                <Text>cidades +100</Text>
              </Box>
            </Flex>
          </SimpleGrid>
          <Box as="article" mt="5rem" mb="2.25rem">
            { /* todo aplicar mb depois em um local correto */ }
            <Heading
              as="h2"
              color="gray.600"
              fontSize="2.25rem"
              fontWeight={500}
            >
              Cidades +100
            </Heading>
            <SimpleGrid
              mt="2.5rem"
              spacingX="2.8125rem"
              spacingY="3rem"
            >
              <Box
                h="17.5rem"
                w="16rem" // todo fazer isso com autofit
                borderStyle="solid"
                borderWidth="1px"
                borderColor="yellow.400"
              >
                <Box as="header">
                  <Image
                    src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
                    alt="Londres"
                    h="10.76rem"
                    w="100%"
                  />
                </Box>
                <Box as="main" p="1.125rem 1.5rem 1.5625rem 1.5rem">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Box>
                      <Text
                        as="h3"
                        color="gray.600"
                        fontSize="1.25rem"
                        fontWeight={600}
                        fontFamily="Barlow, sans-serif"
                      >
                        Londres
                      </Text>
                      <Text
                        color="gray.500"
                        mt="0.75rem"
                        fontSize="1rem"
                        fontWeight={500}
                        fontFamily="Barlow, sans-serif"
                      >
                        Reino Unido
                      </Text>
                    </Box>
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
                      h="1.875rem"
                      w="1.875rem"
                      rounded="full"
                    />
                  </Flex>
                </Box>
              </Box>

            </SimpleGrid>
          </Box>
        </>
      </PageContainer>
    </>
  )
}