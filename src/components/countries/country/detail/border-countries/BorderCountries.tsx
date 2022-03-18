import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../content/button/Button';
import { CountryDetailInformation } from '../CountryDetail.interface';
import { getStyle } from './BorderCountries.helper';
import './BorderCountries.scss';

export interface BorderCountriesProps {
  country: CountryDetailInformation;
  setCountry: React.Dispatch<React.SetStateAction<CountryDetailInformation>>;
  pointer: string;
  values: any;
}

export default function BorderCountries(props: BorderCountriesProps) {
  const isWithValue: boolean = props.values && props.values?.length > 0;
  const [paramName, setParamName] = useState('');
  const navigation = useNavigate();

  useEffect(() => {
    if (paramName) {
      const url = `https://restcountries.com/v3.1/name/${paramName}`;

      fetch(url)
        .then(response => response.json())
        .then(country => {
          props.setCountry(country[0]);
          navigation(`../detail/${paramName}`);
        });
    }
  }, [paramName]);

  return (
    <>
      {
        isWithValue && (
          <div className="border-container">
            <span className="pointer">
              {props.pointer}:
            </span>

            <div className="border-countries" style={getStyle(props)}>
              {
                props.values.map((value: string, index: number) =>
                  <Button
                    className="value"
                    key={index}
                    text={value}
                    onClick={(): void => setParamName(value.toLowerCase())}
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
