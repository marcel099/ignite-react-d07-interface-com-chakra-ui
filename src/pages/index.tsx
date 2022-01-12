import {
  Divider, SimpleGrid
} from "@chakra-ui/react";

import { WebsiteHeader } from "../components/WebsiteHeader";
import { HomeHeader } from "../components/home/HomeHeader";
import { InvitingText } from "../components/home/InvitingText";
import { TravelTypesList } from "../components/home/TravelTypesList";

export default function Home() {
  return (
    <>
      <WebsiteHeader />
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
  )
}
