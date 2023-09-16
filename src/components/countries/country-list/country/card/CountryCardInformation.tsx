import { Inline } from '@ui';
import { FC } from 'react';
import { composeCountryCardValue } from '../services';
import './CountryCardInformation.scss';

interface Props {
    'data-test': string;
    label: string;
    value: string | number;
}

export const CountryCardInformation: FC<Props> = ({
    'data-test': dataTest,
    label,
    value
}) => (
    <p data-test={dataTest} className="country-card-information">
        <Inline className="label" strong>
            {label}:{' '}
        </Inline>
        <Inline className="value">{composeCountryCardValue(value)}</Inline>
    </p>
);
