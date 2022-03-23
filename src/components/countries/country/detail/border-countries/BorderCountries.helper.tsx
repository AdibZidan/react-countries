import { BorderCountriesProps } from './BorderCountries';

export const getStyle = ({ values }: BorderCountriesProps) => ({
  'justifyContent': values?.length > 3 ? 'space-evenly' : 'flex-start'
});
