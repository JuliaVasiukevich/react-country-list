import { ColorService, ICountry } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({ country }: IProps) => {
  return (
    <li className="list-group-item gx-5">
      <div className="row align-items-center">
        <img
          src={country.flag}
          alt={`${country.name} flag image`}
          className="col-1"
        />
        <p className="col-3 mb-0"> {country.name} </p>
        <p className="col-2 mb-0"> {country.capital} </p>
        <p className="col-2 mb-0"> {country.region} </p>
        <Badge value={country.area} type="area" color={ColorService.Primary} />
        <Badge
          value={country.population}
          type="population"
          color={ColorService.Secondary}
        />
      </div>
    </li>
  );
};
