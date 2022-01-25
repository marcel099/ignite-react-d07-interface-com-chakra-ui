export interface Continent {
  name: string
  info: string
  total_countries: number
  total_languages: number
  carousel_image_url: string
  banner_image_url: string
  countries: Country[]
}

export interface Country {
  name: string
  flag_image_url: string
  cities: City[]
}

export interface City {
  name: string
  image_url: string
}

const continentCarouselImageWidth = 1140
const continentBannerImageWidth = 1470
const cityImageWidth = 340

export const continents: Continent[] = [
  {
    name: 'África',
    info: 'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005).',
    total_countries: 54,
    total_languages: 2000,
    carousel_image_url: `https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentCarouselImageWidth}&q=80`,
    banner_image_url: `https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentBannerImageWidth}&q=80`,
    countries: [],
  },
  {
    name: 'América',
    info: 'América é o continente localizado no hemisfério ocidental e que se estende, no sentido norte-sul, desde o oceano Ártico até o cabo Horn, ao longo de cerca de 15 mil quilômetros. Também é conhecida pela expressão "Novo Mundo", neste caso em oposição à Eurafrásia, considerada o "Velho Mundo", e à Oceania, chamada de "Novíssimo Mundo".',
    total_countries: 35,
    total_languages: 1061,
    carousel_image_url: `https://images.unsplash.com/photo-1623194417728-adf641357d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentCarouselImageWidth}&q=80`,
    banner_image_url: `https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentBannerImageWidth}&q=80`,
    countries: [
      {
        name: 'Estados Unidos',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/US.svg',
        cities: [
          {
            name: 'Nova York',
            image_url: `https://images.unsplash.com/photo-1587162146766-e06b1189b907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      }
    ],
  },
  {
    name: 'Ásia',
    info: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering.',
    total_countries: 50,
    total_languages: 2301,
    carousel_image_url: `https://images.unsplash.com/photo-1441839438427-ad31d742a202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentCarouselImageWidth}&q=80`,
    banner_image_url: `https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentBannerImageWidth}&q=80`,
    countries: [
      {
        name: 'China',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/CN.svg',
        cities: [
          {
            name: 'Hong Kong',
            image_url: `https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`,
          },
          {
            name: 'Macau',
            image_url: `https://images.unsplash.com/photo-1628695141670-8d58bc150895?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Shenzhen',
            image_url: `https://images.unsplash.com/photo-1595951908518-f64787a1c6dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Tailândia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/TH.svg',
        cities: [
          {
            name: 'Bancoque',
            image_url: `https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Phuket',
            image_url: `https://images.unsplash.com/photo-1577375837944-47617314bfd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Pattaya',
            image_url: `https://images.unsplash.com/photo-1538114618364-ae7f63d1ee7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Singapura',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/SG.svg',
        cities: [
          {
            name: 'Singapura',
            image_url: `https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Emirados Árabes Unidos',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/AE.svg',
        cities: [
          {
            name: 'Dubai',
            image_url: `https://images.unsplash.com/photo-1612409578638-b890d0fa9364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Malásia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/MY.svg',
        cities: [
          {
            name: 'Kuala Lumpur',
            image_url: `https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Turquia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/TR.svg',
        cities: [
          {
            name: 'Istanbul',
            image_url: `https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`,
          },
          {
            name: 'Antália',
            image_url: `https://images.unsplash.com/photo-1625402780041-5d12b7887913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Índia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/IN.svg',
        cities: [
          {
            name: 'Deli',
            image_url: `https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Mumbai',
            image_url: `https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Japan',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/JP.svg',
        cities: [
          {
            name: 'Tóquio',
            image_url: `https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Arábia Saudita',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/SA.svg',
        cities: [
          {
            name: 'Meca',
            image_url: `https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`,
          }
        ]
      },
      {
        name: 'Taiwan',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/TW.svg',
        cities: [
          {
            name: 'Taipei',
            image_url: `https://images.unsplash.com/photo-1547211453-719b1bdec5f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      }
    ],
  },
  {
    name: 'Europa',
    info: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    total_countries: 50,
    total_languages: 60,
    carousel_image_url: `https://images.unsplash.com/photo-1471960098958-2059c6681742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentCarouselImageWidth}&q=80`,
    banner_image_url: `https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentBannerImageWidth}&q=80`,
    countries: [
      {
        name: 'Reino Unido',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/GB.svg',
        cities: [
          {
            name: 'Londres',
            image_url: `https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'França',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/FR.svg',
        cities: [
          {
            name: 'Paris',
            image_url: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      },
      {
        name: 'Itália',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/IT.svg',
        cities: [
          {
            name: 'Roma',
            image_url: `https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          }
        ]
      }
    ]
  },
  {
    name: 'Oceania',
    info: 'Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). Os limites da Oceania são definidos de várias maneiras. A maioria das definições reconhecem partes da Australásia como a Austrália, Nova Zelândia e Nova Guiné, e parte do Arquipélago Malaio como sendo partes da Oceania.',
    total_countries: 16,
    total_languages: 1000,
    carousel_image_url: `https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentCarouselImageWidth}&q=80`,
    banner_image_url: `https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentBannerImageWidth}&q=80`,
    countries: [],
  }
]
