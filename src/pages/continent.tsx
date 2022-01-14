import Head from "next/head";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { PageContainer } from "../components/PageContainer";

import { FullWidthBanner } from "../components/FullWidthBanner";
import { ContinentTitle } from "../components/continent/ContinentTitle";
import { ContinentInfoSection } from "../components/continent/ContinentInfoSection";
import { CitiesSection } from "../components/continent/CitiesSection";

export default function Continent() {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

  return (
    <>
      <Head>
        <title>Continente | worldtrip</title>
      </Head>
      <PageContainer>
        <>
          <WebsiteHeader containReturnButton={true} />
          <FullWidthBanner
            top="6.25rem"
            h="31.25rem"
            backgroundImageUrl={backgroundImageUrl}
            backgroundPosition="center bottom"
          />
          <ContinentTitle />
          <ContinentInfoSection />
          <CitiesSection />
        </>
      </PageContainer>
    </>
  )
}