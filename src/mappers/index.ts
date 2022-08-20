import { ICountry, ICountryList } from "../types";

export const transformCountries = ( countries : ICountryList[] ): ICountry[] => {
        return countries.map((country) => ({
          flag: country.flags.svg,
          name: country.name.common,
          capital: country.capital[0],
          population: country.population,
          area: country.area,
          region: country.region,
        }))
}