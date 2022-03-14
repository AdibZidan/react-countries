import { CountriesState } from 'App';
import { Country } from 'components/countries/country/Country.interface';

export const getNewState = (
  countriesState: CountriesState,
  countryParam: undefined | string
) => ({
  countries: !countryParam ? countriesState.copy : getFilteredCountries(countriesState, countryParam),
  copy: countriesState.copy
});

export const getFilteredCountries = (
  { copy }: CountriesState,
  countryParam: undefined | string
): Country[] => {
  const isCountryParamIncludedInSearch = (country: Country): boolean => country
    .name
    .common
    .toLowerCase()
    .includes(countryParam?.toLowerCase() ?? '');

  return copy.filter(isCountryParamIncludedInSearch);
};
