import { useFilteredCountryListState, useSearchParams } from '@hooks';
import { Button, Details, Div, Inline } from '@ui';
import classNames from 'classnames';
import { FC } from 'react';
import { useRegions } from './hooks';

export const CountryListRegions: FC = () => {
    const {
        paramName: regionParam,
        updateParam,
        resetParam
    } = useSearchParams('region');
    const { regions } = useRegions();
    const { reset: resetCountryListState, setFilteredCountries } =
        useFilteredCountryListState();

    const handleReset = () => {
        resetParam();
        resetCountryListState();
    };

    return (
        <Details openOnLoad={Boolean(regionParam)} title="Filter By Region">
            <Div className="country-list-region-dropdown-values">
                {regions.map(region => {
                    const className = classNames({
                        selected: regionParam === region
                    });
                    const handleOnClick = () => {
                        updateParam(region);
                        setFilteredCountries(region, 'region');
                    };

                    return (
                        <Inline
                            data-test="country-list-region-dropdown-value"
                            key={region}
                            className={className}
                            onClick={handleOnClick}
                        >
                            {region}
                        </Inline>
                    );
                })}
            </Div>
            <Button
                className="secondary"
                isDisabled={!regionParam}
                onClick={handleReset}
            >
                Reset
            </Button>
        </Details>
    );
};
