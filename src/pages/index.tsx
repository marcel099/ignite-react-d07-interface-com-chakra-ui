import { Divider, Heading, Text } from "@chakra-ui/react";

import { Header } from "../components/header";
import { TravelTypesList } from "../components/TravelTypesList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <header>
          <Heading as='h1'>
            <Text as="span" display="block">
              5 Continentes,
            </Text>
            <Text as="span">
              infinitas possibilidades
            </Text>
          </Heading>
        </header>
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
