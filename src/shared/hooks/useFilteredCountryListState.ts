import { create } from 'zustand';
import { Country } from '../../components/countries/types';

type FilterType = 'name' | 'region';

interface State {
    countries: Country[];
    filteredCountries: Country[];
}

interface Methods {
    setCountries: (countries: Country[]) => void;
    setFilteredCountries: (searchTerm: string, type: FilterType) => void;
    reset: () => void;
}

type Zustand = State & Methods;

export const useFilteredCountryListState = create<Zustand>()(
    (setState, getState) => ({
        countries: [],
        filteredCountries: [],
        setCountries: countries =>
            setState({ countries, filteredCountries: countries }),
        setFilteredCountries: (searchTerm, type) => {
            const searchTermLowerCased = searchTerm.toLowerCase();

            setState({
                filteredCountries: getState().countries.filter(
                    ({ name: { common }, region }) => {
                        if (type === 'name') {
                            return common
                                .toLowerCase()
                                .includes(searchTermLowerCased);
                        }

                        return region
                            .toLowerCase()
                            .includes(searchTermLowerCased);
                    }
                )
            });
        },
        reset: () =>
            setState({
                countries: getState().countries,
                filteredCountries: getState().countries
            })
    })
);
