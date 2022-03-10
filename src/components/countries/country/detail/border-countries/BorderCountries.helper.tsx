import { BorderCountriesProps } from './BorderCountries';

export const getStyle = (props: BorderCountriesProps) => ({
  'justifyContent': props.values?.length > 3 ? 'space-evenly' : 'flex-start'
});
