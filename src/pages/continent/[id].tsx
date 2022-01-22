import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { api } from "../../services/axios";

import { WebsiteHeader } from "../../components/WebsiteHeader";
import { PageContainer } from "../../components/PageContainer";

import { PageBanner } from "../../components/PageBanner";
import { ContinentTitle } from "../../components/continent/ContinentTitle";
import { ContinentInfoSection } from "../../components/continent/ContinentInfoSection";
import { CitiesSection } from "../../components/continent/CitiesSection";

export default function Continent() {
  const router = useRouter()
  const { continentId } = router.query

  useEffect(() => {
    async function getContinentFullInfo() {
      const response = await api.get(`/continents/${continentId}`, {
        params: {
          include: 'countries'
        }
      })
    }

    getContinentFullInfo()
  }, [continentId])


  const backgroundImageUrl = "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

  return (
    <>
      <Head>
        <title>Continente | worldtrip</title>
      </Head>
      <PageContainer
        mb={["1rem", null, "2.25rem"]}
      >
        <>
          <WebsiteHeader containReturnButton={true} />
          <PageBanner
            h={["9.375rem", null, "31.25rem"]}
            backgroundImageUrl={backgroundImageUrl}
            backgroundPosition={["center", null, "center bottom"]}
          />
          <ContinentTitle />
          <ContinentInfoSection />
          <CitiesSection />
        </>
      </PageContainer>
    </>
  )
}