import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/axios";

interface Continent {
  name: string
  info: string
  totalCountries: number
  totalLanguages: number
  bannerImageUrl: string
  countries: Country[]
}

interface Country {
  name: string
  flagImageUrl: string
  cities: City[]
}

interface City {
  id: string
  name: string
  imageUrl: string
}


interface ContinentContextData extends Continent {
  isLoading: boolean
}

const ContinentContext = createContext({} as ContinentContextData)

interface ContinentProvider {
  children: ReactNode
  id: string | string[]
}

const initialContinentData: Continent = {
  name: '',
  info: '',
  bannerImageUrl: null,
  totalCountries: 0,
  totalLanguages: 0,
  countries: [],
}

export function ContinentProvider({ children, id }: ContinentProvider) {
  const [continent, setContinent] = useState<Continent>(initialContinentData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getContinentFullInfo() {
      const response = await api.get(`/continents/${id}`, {
        params: {
          include: 'countries'
        }
      })

      const {
        continent,
      } = response.data

      setContinent({
        countries: [],
        ...continent,
      })
      setIsLoading(false)
    }

    // console.log({id})
    if (id !== undefined) {
      // console.log('recall')
      getContinentFullInfo()
    }

    return () => setIsLoading(true)
  }, [id])

  return (
    <ContinentContext.Provider value={{
      ...continent,
      isLoading,
    }}>
      {children}
    </ContinentContext.Provider>
  )
}

export const useContinent = () => useContext(ContinentContext)
