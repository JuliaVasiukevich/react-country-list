export interface ICountry {
  flag: string;
  name: string;
  capital: string;
  population: number;
  area: number;
  region: string;
}

export type BadgeLabelType = "area" | "population";

export enum ColorService {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}

export interface ICountryList {
  flags: ICountryFlag;
  name: ICountryName;
  capital: string[];
  population: number;
  area: number;
  region: string;
}

interface ICountryFlag {
  png: string;
  svg: string;
}

interface ICountryName {
  common: string;
  official: string;
  nativeName: { [lang: string]:  ICountryNativeName | undefined} ;
}

interface ICountryNativeName {
    official: string; common: string; 
}

