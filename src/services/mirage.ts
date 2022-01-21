import {
  belongsTo,
  createServer,
  hasMany,
  Model,
  RestSerializer,
} from 'miragejs'
import { BelongsTo, HasMany } from 'miragejs/-types'

import { continents, Continent, Country, City } from './database/continents'

interface ContinentModel extends Omit<Continent, 'countries'> {
  countries: HasMany<string>
}

interface CountryModel extends Omit<Country, 'cities'> {
  continent: BelongsTo<string>
  cities: HasMany<string>
}

interface CityModel extends City {
  country: BelongsTo<string>
}

export function makeServer() {
  const server = createServer({
    serializers: {
      cities: RestSerializer.extend({
        include: ['country'],
        embed: true,
      }),
      continent: RestSerializer.extend({
        include: ['continent'],
        embed: true
      })
    },

    models: {
      continent: Model.extend<Partial<ContinentModel>>({
        countries: hasMany(),
      }),

      country: Model.extend<Partial<CountryModel>>({
        continent: belongsTo(),
        cities: hasMany(),
      }),

      city: Model.extend<Partial<CityModel>>({
        country: belongsTo(),
      }),
    },

    seeds(server) {
      continents.forEach(continent => {
        let continentModel = server.create('continent', {
            ...continent,
            countries: null,
          } as any
        )
        
        continent.countries.forEach(country => {
          let countryModel = server.create('country', {
            ...country,
            cities: null,
            continent: continentModel,
          } as any)

          country.cities.forEach(city => {
            server.create('city', {
              ...city,
              country: countryModel,
            } as any)
          })
        })
      })
    },
  
    routes() {
      this.namespace = 'api'
  
      this.get('/continents')
      this.get('/continents/:id')

      this.get('/cities', (schema, request) => {
        const {
          continentId
        } = request.params

        const continentCities = schema.all('city')

        console.log(continentCities)

        return continentCities
      })

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}