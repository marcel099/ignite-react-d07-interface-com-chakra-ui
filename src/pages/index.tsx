import Head from "next/head";
import {
  Divider, SimpleGrid
} from "@chakra-ui/react";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { PageContainer } from "../components/PageContainer";

import { PageBanner } from "../components/PageBanner";
import { HomeHeader } from "../components/home/HomeHeader";
import { InvitingText } from "../components/home/InvitingText";
import { TravelTypesList } from "../components/home/TravelTypesList";
import { SwipperSlider } from "../components/home/SwipperSlider";

export default function Home() {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <PageContainer
        mb={["1.5rem", null, "2.5rem"]}
      >
        <>
          <WebsiteHeader />
          <PageBanner
            h={["10.125rem", null, "21rem"]}
            backgroundImageUrl={backgroundImageUrl}
            backgroundPosition="center top"
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
                  mt={["2.25rem", null, "5rem"]}
                />
              </SimpleGrid>
              <InvitingText />
              <SwipperSlider />
            </section>
          </main>
        </>
      </PageContainer>

    </>
  )
}
