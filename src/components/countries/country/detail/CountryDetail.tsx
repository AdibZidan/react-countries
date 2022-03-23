import { useApiCountryDetailCall } from 'components/countries/Countries.helper';
import { CountriesContext } from 'CountriesContext';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../content/button/Button';
import { borderNamesConvertedIntoCommonName } from './CountryDetail.props';
import './CountryDetail.scss';
import CountryDetailImage from './image/CountryDetailImage';
import CountryDetailInformation from './information/CountryDetailInformation';

export default function CountryDetail() {
  const { countriesState, country, setCountry } = useContext(CountriesContext);
  const { name } = useParams();
  const navigate = useNavigate();
  const apiCountryDetailCall = useApiCountryDetailCall;

  useEffect(() => {
    apiCountryDetailCall(name ?? '')
      .then(country => setCountry(country[0]));
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
