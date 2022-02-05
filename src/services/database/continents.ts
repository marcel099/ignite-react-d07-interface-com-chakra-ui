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
    countries: [
      {
        name: 'Egito',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/EG.svg',
        cities: [
          {
            name: 'Cairo',
            image_url: `https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Hurghada',
            image_url: `https://images.unsplash.com/photo-1562679300-722c0b24717d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'África do Sul',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/ZA.svg',
        cities: [
          {
            name: 'Johanesburgo',
            image_url: `https://images.unsplash.com/photo-1636706519609-988babca3dd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Marrocos',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/MA.svg',
        cities: [
          {
            name: 'Marraquexe',
            image_url: `https://images.unsplash.com/photo-1545041552-becc2efcccc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
    ],
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
          },
          {
            name: 'Miami',
            image_url: `https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Los Angeles',
            image_url: `https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Las Vegas',
            image_url: `https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Orlando',
            image_url: `https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'São Francisco',
            image_url: `https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Honolulu',
            image_url: `https://images.unsplash.com/photo-1547537352-ae90c682877e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'México',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/MX.svg',
        cities: [
          {
            name: 'Cancún',
            image_url: `https://images.unsplash.com/photo-1611222565146-f0e39f5217f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Canadá',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/CA.svg',
        cities: [
          {
            name: 'Toronto',
            image_url: `https://images.unsplash.com/photo-1603466182843-75f713ba06b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Vancouver',
            image_url: `https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Argentina',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/AR.svg',
        cities: [
          {
            name: 'Buenos Aires',
            image_url: `https://images.unsplash.com/photo-1609080814811-5837f3c7095a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Peru',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/PE.svg',
        cities: [
          {
            name: 'Lima',
            image_url: `https://images.unsplash.com/photo-1580844867519-adaa6fdfd872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Brasil',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/BR.svg',
        cities: [
          {
            name: 'Rio de Janeiro',
            image_url: `https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
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
          },
          {
            name: 'Cantão',
            image_url: `https://images.unsplash.com/photo-1583996829982-823143cc975a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Xangai',
            image_url: `https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Pequim',
            image_url: `https://images.unsplash.com/photo-1537265655479-901d3de699d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Zhuhai',
            image_url: `https://images.unsplash.com/photo-1568947577887-1bcb41962122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Guilin',
            image_url: `https://images.unsplash.com/photo-1554950113-4f3081cb3a41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
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
          },
          {
            name: 'Chiang Mai',
            image_url: `https://images.unsplash.com/photo-1578157695179-d7b7ddeb2f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Krabi',
            image_url: `https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Singapura',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/SG.svg',
        cities: [
          {
            name: 'Singapura',
            image_url: `https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Emirados Árabes Unidos',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/AE.svg',
        cities: [
          {
            name: 'Dubai',
            image_url: `https://images.unsplash.com/photo-1612409578638-b890d0fa9364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Abu Dhabi',
            image_url: `https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Malásia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/MY.svg',
        cities: [
          {
            name: 'Kuala Lumpur',
            image_url: `https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Johor Bahru',
            image_url: `https://images.unsplash.com/photo-1610917125146-8536b0199df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Ilha de Penang',
            image_url: `https://images.unsplash.com/photo-1591802266103-2816a8828a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
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
          },
          {
            name: 'Muğla',
            image_url: `https://images.pexels.com/photos/8922613/pexels-photo-8922613.jpeg?auto=compress&cs=tinysrgb&dpr=2&&w=${cityImageWidth}`
          },
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
          },
          {
            name: 'Agra',
            image_url: `https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Chennai',
            image_url: `https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Jaipur',
            image_url: `https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Calcutá',
            image_url: `https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=${cityImageWidth}`
          },
          {
            name: 'Bangalor',
            image_url: `https://images.unsplash.com/photo-1565018054866-968e244671af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Japão',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/JP.svg',
        cities: [
          {
            name: 'Tóquio',
            image_url: `https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Osaka',
            image_url: `https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Quioto',
            image_url: `https://images.unsplash.com/photo-1578469645742-46cae010e5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Chiba',
            image_url: `https://images.unsplash.com/photo-1599719619096-7025b3b8be9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Fukuoka',
            image_url: `https://images.unsplash.com/photo-1627902314049-812a02602d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Arábia Saudita',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/SA.svg',
        cities: [
          {
            name: 'Meca',
            image_url: `https://images.unsplash.com/photo-1542521148-51306e7ffc1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`,
          },
          {
            name: 'Medina',
            image_url: `https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Riad',
            image_url: `https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Damã',
            image_url: `https://images.unsplash.com/photo-1578895101408-1a36b834405b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Taiwan',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/TW.svg',
        cities: [
          {
            name: 'Taipei',
            image_url: `https://images.unsplash.com/photo-1547211453-719b1bdec5f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Coreia do Sul',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/KR.svg',
        cities: [
          {
            name: 'Seoul',
            image_url: `https://images.unsplash.com/photo-1572675328361-3c8ee254f35b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Jeju',
            image_url: `https://images.unsplash.com/photo-1596941248238-0d49dcaa4263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Vietnã',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/VN.svg',
        cities: [
          {
            name: 'Ho Chi Minh',
            image_url: `https://images.unsplash.com/photo-1535952548450-d7447587e733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Ha Long',
            image_url: `https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Hanói',
            image_url: `https://images.unsplash.com/photo-1555921015-5532091f6026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Da Nang',
            image_url: `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Indonésia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/ID.svg',
        cities: [
          {
            name: 'Denpasar',
            image_url: `https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Jacarta',
            image_url: `https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Batam',
            image_url: `https://images.unsplash.com/photo-1558438542-f6da3bf7d8f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Israel',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/IL.svg',
        cities: [
          {
            name: 'Jerusalém',
            image_url: `https://images.unsplash.com/photo-1614517453351-6c1522fc7a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Telavive',
            image_url: `https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Filipinas',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/PH.svg',
        cities: [
          {
            name: 'Cebu',
            image_url: `https://images.unsplash.com/photo-1581521894817-f7cb8bedd905?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
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
          },
        ]
      },
      {
        name: 'França',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/FR.svg',
        cities: [
          {
            name: 'Paris',
            image_url: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Nice',
            image_url: `https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Itália',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/IT.svg',
        cities: [
          {
            name: 'Roma',
            image_url: `https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Milão',
            image_url: `https://images.unsplash.com/photo-1572602648934-1d98de6dab48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Veneza',
            image_url: `https://images.unsplash.com/photo-1453747063559-36695c8771bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Florença',
            image_url: `https://images.unsplash.com/photo-1585595751864-6e56dbd53658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'República Tcheca',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/CZ.svg',
        cities: [
          {
            name: 'Praga',
            image_url: `https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Holanda',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/NL.svg',
        cities: [
          {
            name: 'Amsterdã',
            image_url: `https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Espanha',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/ES.svg',
        cities: [
          {
            name: 'Barcelona',
            image_url: `https://images.unsplash.com/photo-1587789202069-f57c846b85db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Madrid',
            image_url: `https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Áustria',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/AT.svg',
        cities: [
          {
            name: 'Viena',
            image_url: `https://images.unsplash.com/photo-1590253198910-1683b35ba5bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Alemanha',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/DE.svg',
        cities: [
          {
            name: 'Berlim',
            image_url: `https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Munique',
            image_url: `https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Frankfurt',
            image_url: `https://images.unsplash.com/photo-1615159073222-de25cfc5fea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Grécia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/GR.svg',
        cities: [
          {
            name: 'Atenas',
            image_url: `https://images.unsplash.com/photo-1503152394-c571994fd383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Heraclião',
            image_url: `https://images.unsplash.com/photo-1586119732042-ff23ccf4bd23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Rodes',
            image_url: `https://images.unsplash.com/photo-1582030826710-a16d19043d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Rússia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/RU.svg',
        cities: [
          {
            name: 'Moscou',
            image_url: `https://images.unsplash.com/photo-1580837119756-563d608dd119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'São Petersburgo',
            image_url: `https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Irlanda',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/IE.svg',
        cities: [
          {
            name: 'Dublin',
            image_url: `https://images.unsplash.com/photo-1602797882193-51cb0e037534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Bélgica',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/BE.svg',
        cities: [
          {
            name: 'Bruxelas',
            image_url: `https://images.unsplash.com/photo-1508608725026-673848eb006c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Hungria',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/HU.svg',
        cities: [
          {
            name: 'Budapeste',
            image_url: `https://images.unsplash.com/photo-1617175356357-e3685f12d2e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Portugal',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/PT.svg',
        cities: [
          {
            name: 'Lisboa',
            image_url: `https://images.unsplash.com/photo-1616862890964-fd20e9dd106d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Porto',
            image_url: `https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Dinamarca',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/DK.svg',
        cities: [
          {
            name: 'Copenhage',
            image_url: `https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Polônia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/PL.svg',
        cities: [
          {
            name: 'Cracóvia',
            image_url: `https://images.unsplash.com/photo-1522689764216-4e6966e5e444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Varsóvia',
            image_url: `https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Suécia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/SE.svg',
        cities: [
          {
            name: 'Estocolmo',
            image_url: `https://images.unsplash.com/photo-1516382772789-f9bfd7cb7532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
    ]
  },
  {
    name: 'Oceania',
    info: 'Oceania é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). Os limites da Oceania são definidos de várias maneiras. A maioria das definições reconhecem partes da Australásia como a Austrália, Nova Zelândia e Nova Guiné, e parte do Arquipélago Malaio como sendo partes da Oceania.',
    total_countries: 16,
    total_languages: 1000,
    carousel_image_url: `https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentCarouselImageWidth}&q=80`,
    banner_image_url: `https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${continentBannerImageWidth}&q=80`,
    countries: [
      {
        name: 'Austrália',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/AU.svg',
        cities: [
          {
            name: 'Sydney',
            image_url: `https://images.unsplash.com/photo-1546499275-102456d6b737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
          {
            name: 'Melbourne',
            image_url: `https://images.unsplash.com/photo-1514395462725-fb4566210144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
      {
        name: 'Nova Zelândia',
        flag_image_url: 'https://catamphetamine.gitlab.io/country-flag-icons/1x1/NZ.svg',
        cities: [
          {
            name: 'Auckland',
            image_url: `https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${cityImageWidth}&q=80`
          },
        ]
      },
    ],
  }
]
