import { useApiCountryDetailCall } from 'components/countries/Countries.helper';
import { CountriesContext, CountriesState } from 'CountriesContext';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../content/button/Button';
import { borderNamesConvertedIntoCommonName } from './CountryDetail.props';
import './CountryDetail.scss';
import CountryDetailImage from './image/CountryDetailImage';
import CountryDetailInformation from './information/CountryDetailInformation';

export interface CountryDetailProps {
  countriesState: CountriesState;
  setCountries: React.Dispatch<React.SetStateAction<CountriesState>>;
}

export default function CountryDetail() {
  const { countriesState, setCountries } = useContext(CountriesContext);

  const { name } = useParams();
  const navigate = useNavigate();
  const { country, setCountry } = useApiCountryDetailCall(name ?? '');

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
                setCountry={setCountry}
                borderCountries={borderNamesConvertedIntoCommonName(countriesState, country)}
              />
            </section>
          </>
        )
      }
    </>
  );
}
