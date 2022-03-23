import { useApiCountryDetailCall } from 'components/countries/Countries.helper';
import { CountriesContext } from 'CountriesContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../content/button/Button';
import { getStyle } from './BorderCountries.helper';
import './BorderCountries.scss';

export interface BorderCountriesProps {
  pointer: string;
  values: any;
}

export default function BorderCountries({ pointer, values }: BorderCountriesProps) {
  const { setCountry } = useContext(CountriesContext);
  const navigate = useNavigate();
  const isWithValue: boolean = values && values?.length > 0;
  const apiCountryDetailCall = useApiCountryDetailCall;

  const callCountryApiAndNavigateToDetailPage = (countryName: string) => {
    return (): void => {
      apiCountryDetailCall(countryName)
        .then(country => setCountry(country[0]))
        .then((): void => navigate(`../detail/${countryName}`));
    };
  };

  return (
    <>
      {
        isWithValue && (
          <div className="border-container">
            <span className="pointer">
              {pointer}:
            </span>

            <div className="border-countries" style={getStyle(values)}>
              {
                values.map((countryName: string, index: number) =>
                  <Button
                    className="value"
                    key={index}
                    text={countryName}
                    onClick={callCountryApiAndNavigateToDetailPage(countryName)}
                  />
                )
              }
            </div>
          </div>
        )
      }
    </>
  );
}
