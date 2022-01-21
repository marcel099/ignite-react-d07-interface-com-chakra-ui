import {
  belongsTo,
  createServer,
  hasMany,
  Model,
  RestSerializer,
} from 'miragejs'

import { continents } from './database/continents'

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend({
        countries: hasMany(),
      }),

      country: Model.extend({
        continent: belongsTo(),
        cities: hasMany(),
      }),

      city: Model.extend({
        country: belongsTo(),
      }),
    },

    serializers: {
      continentShortData: RestSerializer.extend({
        attrs: ['id', 'name', 'carousel_image_url'],
      }),
      continentFullData: RestSerializer.extend({
        attrs: [
          'name', 'banner_image_url',
          'info', 'total_countries', 'total_languages'
        ],
        include: function(request) {
          if (request.queryParams.include === 'countries') {
            return ['countries']
          } else {
            return []
          }
        },
        embed: true
      }),
      country: RestSerializer.extend({
        include: ['cities'],
        embed: true
      }),
    },

    seeds(server) {
      continents.forEach(continent => {
        let continentModel = server.create('continent', {
            ...continent,
            countries: null,
          }
        )
        
        continent.countries.forEach(country => {
          let countryModel = server.create('country', {
            ...country,
            cities: null,
            continent: continentModel,
          })

          country.cities.forEach(city => {
            server.create('city', {
              ...city,
              country: countryModel,
            })
          })
        })
      })
    },
  
    routes() {
      this.namespace = 'api'

      this.get('/continents')
      this.get('/continents', function (schema, request) {
        const continents = schema.continents.all()

        return this.serialize(continents, "continent-short-data")
      })

      this.get('/continents/:id', function (schema, request) {
        const { id } = request.params

        const continent = schema.continents.find(id)

        return this.serialize(continent, "continent-full-data")
      })

      this.namespace = ''
      this.passthrough()
    },
  })

  return server
}