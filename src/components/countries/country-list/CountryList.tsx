import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import { useCountryList } from './hooks';

export const CountryList: FC = () => {
    const { isLoading, countries, isWithError } = useCountryList();

    if (isLoading) {
        return <>Countries are loading...</>;
    }

    if (isWithError) {
        return <>Something went wrong...</>;
    }

    return (
        <InnerWrapper>
            {countries.map(({ name: { common } }) => common)}
        </InnerWrapper>
    );
};
