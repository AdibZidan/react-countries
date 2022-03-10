import { useApiCountryDetailCall } from 'components/countries/Countries.helper';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../content/button/Button';
import { countryDetailInformation } from './CountryDetail.props';
import './CountryDetail.scss';
import CountryDetailImage from './image/CountryDetailImage';
import CountryDetailInformation from './information/CountryDetailInformation';

export default function CountryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(countryDetailInformation);

  useApiCountryDetailCall(name, setCountry);

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
