import Head from "next/head";
import {
  Divider, Image, SimpleGrid
} from "@chakra-ui/react";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { PageContainer } from "../components/PageContainer";

import { HomeHeader } from "../components/home/HomeHeader";
import { InvitingText } from "../components/home/InvitingText";
import { TravelTypesList } from "../components/home/TravelTypesList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <PageContainer>
        <>
          <WebsiteHeader />
          <Image
            src="background.svg"
            position="absolute"
            zIndex="-1"
            top="6.25rem"
            h="21rem"
            w="100vw"
            px="0"
          />
          <main>
            <HomeHeader />

            <section>
              <TravelTypesList />
              
              <SimpleGrid placeItems="center">
                <Divider
                  size="7"
                  w="5.625rem"
                  borderColor="gray.600"
                  borderBottomWidth={2}
                  opacity="initial"
                  mt="5rem"
                />
              </SimpleGrid>
              <InvitingText />
              <div></div>   { /* sleeper */ }
            </section>
          </main>
        </>
      </PageContainer>
    </>
  )
}
