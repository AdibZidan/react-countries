import { useFilteredCountryListState } from '@hooks';
import { FC, useEffect } from 'react';
import { InnerWrapper } from '../../../inner-wrapper';
import { CountryListInputFilter } from './CountryListInputFilter';
import { CountryListRegionDropdown } from './CountryListRegionDropdown';
import './CountryListFilters.scss';

export const CountryListFilters: FC = () => {
    const { reset } = useFilteredCountryListState();

    useEffect(() => () => reset(), [reset]);

    return (
        <InnerWrapper baseClassName="country-list-filters">
            <CountryListInputFilter />
            <CountryListRegionDropdown />
        </InnerWrapper>
    );
};
