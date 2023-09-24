import { Div, Heading, Image, Inline } from '@ui';
import { FC } from 'react';
import { InnerWrapper } from '../../inner-wrapper';
import './CountryDetail.scss';
import { CountryDetailBorders } from './CountryDetailBorders';
import { CountryDetailInformation } from './CountryDetailInformation';
import { CountryFocusPage } from './CountryFocusPage';
import { useCountryDetail } from './hooks';
import {
    composeCountryCurrencies,
    composeCountryCurrenciesLabel,
    composeCountryLanguages,
    composeCountryLanguagesLabel,
    composeNativeCountryName
} from './services';

export const CountryDetail: FC = () => {
    const { isLoading, country, isWithError } = useCountryDetail();

    if (isLoading) {
        return (
            <CountryFocusPage className="country-detail-loading">
                <InnerWrapper justifyContent="center">
                    <Inline>Country Detail is loading...</Inline>
                </InnerWrapper>
            </CountryFocusPage>
        );
    }

    if (isWithError || !country) {
        return (
            <CountryFocusPage className="country-detail-error">
                <InnerWrapper justifyContent="center">
                    <Inline>Country Detail api failed...</Inline>
                </InnerWrapper>
            </CountryFocusPage>
        );
    }

    const {
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
    } = country;

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
