import { create } from 'zustand';
import { Country } from '../../components/countries/types';

interface State {
    countries: Country[];
    filteredCountries: Country[];
}

interface Methods {
    setCountries: (countries: Country[]) => void;
    setFilteredCountries: (searchTerm: string) => void;
}

type Zustand = State & Methods;

export const useFilteredCountryListState = create<Zustand>()(
    (setState, getState) => ({
        countries: [],
        filteredCountries: [],
        setCountries: countries =>
            setState({ countries, filteredCountries: countries }),
        setFilteredCountries: searchTerm => {
            setState({
                filteredCountries: getState().countries.filter(
                    ({ name: { common } }) =>
                        common.toLowerCase().includes(searchTerm.toLowerCase())
                )
            });
        }
    })
);
