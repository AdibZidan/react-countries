import { Inline, Paragraph } from '@ui';
import { FC } from 'react';
import './CountryDetailInformation.scss';
import { composeCountryDetailValue } from './services';

interface Props {
    label: string;
    value: string | number;
}

export const CountryDetailInformation: FC<Props> = ({ label, value }) => (
    <Paragraph
        data-test="country-detail-information"
        className="country-detail-information"
    >
        <Inline data-test="country-detail-information-label" className="label">
            {label}:{' '}
        </Inline>
        <Inline data-test="country-detail-information-value" className="value">
            {composeCountryDetailValue(value)}
        </Inline>
    </Paragraph>
);
