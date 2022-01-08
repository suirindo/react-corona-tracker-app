// types.ts

// type
export type CountryDataType = {
  date: string,
  newConfirmed: number,
  totalConfirmed: number,
  newRecovered: number,
  totalRecovered: number,
}


type CountriesJsonTypr = {
    Country:string,
    Slug:string,
}[]

export type TopPageType = {
    countriesJson:CountriesJsonTypr,
    setCountry:React.Dispatch<React.SetStateAction<string>>,
    countryData: CountryDataType,
    loading: boolean,
}

export type SelectorType = {
    countriesJson:CountriesJsonTypr,
    setCountry:React.Dispatch<React.SetStateAction<string>>,
}

export type ResultsType = {
    countryData: CountryDataType,
    loading: boolean,
}



// interface

interface SingleCountriesDataType {
    Country:string,
    NewConfirmed:number,
    TotalConfirmed:number,
  }
  export interface AllCountriesDataType extends Array <SingleCountriesDataType>{}

export interface WorldPageType {
    allCountriesData: Array<SingleCountriesDataType>
}

export interface CardType {
    allCountriesData: Array<SingleCountriesDataType>
  }