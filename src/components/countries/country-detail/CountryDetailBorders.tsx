import { Button, Div, Heading } from '@ui';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './CountryDetailBorders.scss';
import { useCountryDetailBorders } from './hooks';
import { composeCountryDetailBorderHeadline } from './services';
import { CountryDetailButtonsSkeleton } from './skeleton';

interface Props {
    borders: string[];
}

export const CountryDetailBorders: FC<Props> = ({ borders }) => {
    const navigate = useNavigate();
    const { isLoading, borderNames, isWithError } =
        useCountryDetailBorders(borders);

    if (isLoading) {
        return <CountryDetailButtonsSkeleton />;
    }

    if (isWithError) {
        return null;
    }

    const navigateToBorderCountry = (borderName: string) => () =>
        navigate(`../detail/${borderName}`);

    return (
        <Div className="country-detail-borders">
            <Heading data-test="country-detail-borders-heading" level={4}>
                {composeCountryDetailBorderHeadline(borders)}
            </Heading>
            <Div className="country-detail-buttons">
                {borderNames.map(borderName => (
                    <Button
                        key={borderName}
                        data-test={`country-detail-${borderName}-button`}
                        className="secondary"
                        onClick={navigateToBorderCountry(borderName)}
                    >
                        {borderName}
                    </Button>
                ))}
            </Div>
        </Div>
    );
};
