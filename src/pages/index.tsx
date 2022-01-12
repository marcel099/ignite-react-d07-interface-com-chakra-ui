import {
  Divider, Text
} from "@chakra-ui/react";

import { Header } from "../components/header";
import { HomeHeader } from "../components/homeHeader";
import { TravelTypesList } from "../components/TravelTypesList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHeader />

        <section>
          <TravelTypesList />
          
          <Divider />
          <Text>
            <Text as="span" display="block">
              Vamos nessa?
            </Text>
            <Text as="span">
              Então escolha seu continente
            </Text>
          </Text>
          <div></div>   { /* sleeper */ }
        </section>
      </main>
    </>
  )
}
