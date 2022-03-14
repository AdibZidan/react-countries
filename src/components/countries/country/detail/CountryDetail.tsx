import { CountriesState } from 'App';
import { useApiCountryDetailCall } from 'components/countries/Countries.helper';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../content/button/Button';
import './CountryDetail.scss';
import CountryDetailImage from './image/CountryDetailImage';
import CountryDetailInformation from './information/CountryDetailInformation';

export interface CountryDetailProps {
  setCountries: React.Dispatch<React.SetStateAction<CountriesState>>;
}

export default function CountryDetail({ setCountries }: CountryDetailProps) {
  const { name } = useParams();
  const navigate = useNavigate();
  const country = useApiCountryDetailCall(name ?? '');

  useEffect(() => {
    if (name) {
      setCountries((countriesState: CountriesState) => ({
        countries: countriesState.copy,
        copy: countriesState.copy
      }));
    }
  }, []);

  return (
    <>
      {
        country && (
          <>
            <Button
              className="back"
              text="&#8592; Back"
              onClick={(() => navigate('../'))}
            />

            <section className="country">
              <CountryDetailImage
                flag={country?.flags?.svg ?? ''}
                name={country?.name?.common ?? ''}
              />

              <CountryDetailInformation
                countryDetailInformation={country}
              />
            </section>
          </>
        )
      }
    </>
  );
}
