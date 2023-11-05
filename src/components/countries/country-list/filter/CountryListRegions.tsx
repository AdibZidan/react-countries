import { useFilteredCountryListState, useSearchParams } from '@hooks';
import { Button, Details, Div, Inline } from '@ui';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { useRegions } from './hooks';

export const CountryListRegions: FC = () => {
    const {
        paramName: regionParam,
        updateParam,
        resetParam
    } = useSearchParams('region');
    const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(
        !regionParam
    );
    const { regions } = useRegions();
    const { reset: resetCountryListState, setFilteredCountries } =
        useFilteredCountryListState();

    const handleReset = () => {
        if (!isResetButtonDisabled) {
            setIsResetButtonDisabled(true);
        }

        resetParam();
        resetCountryListState();
    };

    return (
        <Details openOnLoad={Boolean(regionParam)} title="Filter by Region">
            <Div className="country-list-region-dropdown-values">
                {regions.map(region => {
                    const className = classNames({
                        selected: regionParam === region
                    });
                    const handleOnClick = () => {
                        if (isResetButtonDisabled) {
                            setIsResetButtonDisabled(false);
                        }

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
                isDisabled={isResetButtonDisabled}
                onClick={handleReset}
            >
                Reset
            </Button>
        </Details>
    );
};
