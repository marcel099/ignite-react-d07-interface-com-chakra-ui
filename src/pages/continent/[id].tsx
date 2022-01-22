import Head from "next/head";
import { useRouter } from "next/router";

import { ContinentProvider } from "../../contexts/ContinentContext";

import { WebsiteHeader } from "../../components/WebsiteHeader";
import { PageContainer } from "../../components/PageContainer";

import { ContinentBanner } from "../../components/continent/ContinentBanner";
import { ContinentTitle } from "../../components/continent/ContinentTitle";
import { ContinentInfoSection } from "../../components/continent/ContinentInfoSection";
import { CitiesSection } from "../../components/continent/CitiesSection";

export default function Continent() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Continente | worldtrip</title>
      </Head>
      <PageContainer
        mb={["1rem", null, "2.25rem"]}
      >
        <ContinentProvider id={id}>
          <WebsiteHeader containReturnButton={true} />
          <ContinentBanner />
          <ContinentTitle />
          <ContinentInfoSection />
          <CitiesSection />
        </ContinentProvider>
      </PageContainer>
    </>
  )
}