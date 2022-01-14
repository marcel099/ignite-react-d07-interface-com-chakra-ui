import Head from "next/head";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { PageContainer } from "../components/PageContainer";

import { ContinentBanner } from "../components/continent/ContinentBanner";
import { ContinentTitle } from "../components/continent/ContinentTitle";
import { ContinentInfoSection } from "../components/continent/ContinentInfoSection";
import { CitiesSection } from "../components/continent/CitiesSection";

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continente | worldtrip</title>
      </Head>
      <PageContainer>
        <>
          <WebsiteHeader containReturnButton={true} />
          <ContinentBanner />
          <ContinentTitle />
          <ContinentInfoSection />
          <CitiesSection />
        </>
      </PageContainer>
    </>
  )
}