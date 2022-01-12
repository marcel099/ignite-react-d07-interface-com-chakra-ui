import Head from "next/head";
import { Text } from "@chakra-ui/react";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { PageContainer } from "../components/PageContainer";

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continente | worldtrip</title>
      </Head>
      <WebsiteHeader containReturnButton={true} />
      <PageContainer>
        <Text>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </PageContainer>
    </>
  )
}