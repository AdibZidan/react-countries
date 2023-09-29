import { useFilteredCountryListState } from '@hooks';
import { Div } from '@ui';
import { FC } from 'react';
import './CountryListInputFilter.scss';

export const CountryListInputFilter: FC = () => {
    const { setFilteredCountries } = useFilteredCountryListState();

    const handleOnChange = ({
        target: { value }
    }: {
        target: { value: string };
    }) => setFilteredCountries(value, 'name');

    return (
        <Div
            data-test="country-list-input-filter-container"
            className="country-list-input-filter-container"
        >
            <label
                data-test="country-list-input-filter-label"
                className="visually-hidden-label"
                htmlFor="country-list-input-filter"
            >
                Search for a country...
            </label>
            <input
                data-test="country-list-input-filter"
                placeholder="Search for a country..."
                name="country-list-input-filter"
                id="country-list-input-filter"
                type="text"
                onChange={handleOnChange}
            />
        </Div>
    );
};
