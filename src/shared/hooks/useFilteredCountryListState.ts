import { create } from 'zustand';
import { Country } from '../../components/countries/types';

interface State {
    countries: Country[];
    filteredCountries: Country[];
}

interface Methods {
    setCountries: (countries: Country[]) => void;
    setFilteredCountries: (countries: Country[], searchTerm: string) => void;
}

type Zustand = State & Methods;

export const useFilteredCountryListState = create<Zustand>()(setState => {
    return {
        countries: [],
        filteredCountries: [],
        setCountries: countries =>
            setState({ countries, filteredCountries: countries }),
        setFilteredCountries: (initialCountries, searchTerm) => {
            setState({
                filteredCountries: initialCountries.filter(
                    ({ name: { common } }) =>
                        common.toLowerCase().includes(searchTerm.toLowerCase())
                )
            });
        }
    };
});
