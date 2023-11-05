import { useFilteredCountryListState } from '@hooks';
import { FC, useEffect } from 'react';
import { InnerWrapper } from '../../../inner-wrapper';
import { CountryListInputFilter } from './CountryListInputFilter';
import { CountryListRegionDropdown } from './CountryListRegionDropdown';

export const CountryListFilters: FC = () => {
    const { reset } = useFilteredCountryListState();

    useEffect(() => () => reset(), [reset]);

    return (
        <InnerWrapper>
            <CountryListInputFilter />
            <CountryListRegionDropdown />
        </InnerWrapper>
    );
};
