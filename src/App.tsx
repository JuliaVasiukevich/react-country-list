import { CountryList } from "./components/CountryList";
import countryData from "./country-data.json";
import { ICountry, ICountryList } from "./types";
import { transformCountries } from './mappers/index';

export const App = () => {

  const countries : ICountry[] =  transformCountries(countryData);

  return (
    <main className="container">
      <h1 className="my-3">Country List</h1>
      <CountryList countries = {countries} />
    </main>
  );
};
