import { Inline } from '@ui';
import { FC } from 'react';
import { composeCountryCardValue } from '../services';
import './CountryCardInformation.scss';

interface Props {
    label: string;
    value: string | number;
}

export const CountryCardInformation: FC<Props> = ({ label, value }) => (
    <p className="country-card-information">
        <Inline className="label" strong>
            {label}:{' '}
        </Inline>
        <Inline className="value">{composeCountryCardValue(value)}</Inline>
    </p>
);
