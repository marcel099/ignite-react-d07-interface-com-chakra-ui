export interface Continent {
  name: string
  info: string
  total_countries: number
  total_languages: number
  carousel_image_url: string
  banner_image_url: string
}

export const continents: Continent[] = [
  {
    name: 'África',
    info: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005).',
    total_countries: 54,
    total_languages: 2000,
    carousel_image_url: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    banner_image_url: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'América',
    info: 'América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. Também é conhecida pela expressão "Novo Mundo", neste caso em oposição à Eurafrásia, considerada o "Velho Mundo", e à Oceania, chamada de "Novíssimo Mundo".',
    total_countries: 35,
    total_languages: 1061,
    carousel_image_url: 'https://images.unsplash.com/photo-1623194417728-adf641357d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    banner_image_url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Ásia',
    info: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
    total_countries: 50,
    total_languages: 2301,
    carousel_image_url: 'https://images.unsplash.com/photo-1441839438427-ad31d742a202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    banner_image_url: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Europa',
    info: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    total_countries: 50,
    total_languages: 60,
    carousel_image_url: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    banner_image_url: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Oceania',
    info: 'Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). Os limites da Oceania são definidos de várias maneiras. A maioria das definições reconhecem partes da Australásia como a Austrália, Nova Zelândia e Nova Guiné, e parte do Arquipélago Malaio como sendo partes da Oceania.',
    total_countries: 16,
    total_languages: 1000,
    carousel_image_url: 'https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    banner_image_url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  }
]
