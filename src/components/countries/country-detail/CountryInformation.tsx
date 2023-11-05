import { Div, Heading, Image } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import { CountryDetail } from '../types';
import { CountryDetailBorders } from './CountryDetailBorders';
import { CountryDetailInformation } from './CountryDetailInformation';
import { CountryFocusPage } from './CountryFocusPage';
import {
    composeCountryCurrencies,
    composeCountryCurrenciesLabel,
    composeCountryLanguages,
    composeCountryLanguagesLabel,
    composeNativeCountryName
} from './services';

interface Props {
    country: CountryDetail;
}

export const CountryInformation: FC<Props> = ({
    country: {
        flags: { svg: src, alt = '' },
        name: { common: countryName, nativeName },
        population,
        region,
        subregion,
        capital = [],
        tld: topLevelDomains = [],
        currencies,
        languages,
        borders = []
    }
}) => {
    const showInformationSection =
        topLevelDomains.length > 0 || currencies || languages;

    return (
        <CountryFocusPage className="country-detail">
            <InnerWrapper>
                <Image data-test="country-detail-image" src={src} alt={alt} />
                <Div className="divider">
                    <Heading data-test="country-detail-heading" level={2}>
                        {countryName}
                    </Heading>
                    <Div className="country-detail-information-section">
                        <Div>
                            {nativeName && (
                                <CountryDetailInformation
                                    label="Native Name"
                                    value={composeNativeCountryName(nativeName)}
                                />
                            )}
                            <CountryDetailInformation
                                label="Population"
                                value={population}
                            />
                            <CountryDetailInformation
                                label="Region"
                                value={region}
                            />
                            {subregion && (
                                <CountryDetailInformation
                                    label="Sub Region"
                                    value={subregion}
                                />
                            )}
                            {capital.length > 0 && (
                                <CountryDetailInformation
                                    label="Capital"
                                    value={capital[0]}
                                />
                            )}
                        </Div>
                        {showInformationSection && (
                            <Div>
                                {topLevelDomains.length > 0 && (
                                    <CountryDetailInformation
                                        label="Top Level Domain"
                                        value={topLevelDomains[0]}
                                    />
                                )}
                                {currencies && (
                                    <CountryDetailInformation
                                        label={composeCountryCurrenciesLabel(
                                            currencies
                                        )}
                                        value={composeCountryCurrencies(
                                            currencies
                                        )}
                                    />
                                )}
                                {languages && (
                                    <CountryDetailInformation
                                        label={composeCountryLanguagesLabel(
                                            languages
                                        )}
                                        value={composeCountryLanguages(
                                            languages
                                        )}
                                    />
                                )}
                            </Div>
                        )}
                    </Div>
                    {borders.length > 0 && (
                        <CountryDetailBorders borders={borders} />
                    )}
                </Div>
            </InnerWrapper>
        </CountryFocusPage>
    );
};
