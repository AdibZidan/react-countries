import CountryInformation from '../../content/information/CountryInformation';
import { formatIntoReadable } from '../../Country.helper';
import BorderCountries from '../border-countries/BorderCountries';
import { CountryDetailInformation as CountryDetailInformationInterface } from '../CountryDetail.interface';
import './CountryDetailInformation.scss';

export interface CountryDetailInformationProps {
  countryDetailInformation: CountryDetailInformationInterface;
  setCountry: React.Dispatch<React.SetStateAction<CountryDetailInformationInterface>>;
  borderCountries: string[];
}

export default function CountryDetailInformation({ countryDetailInformation, setCountry, borderCountries }: CountryDetailInformationProps) {
  let population!: string;
  let currencies!: any;

  if (countryDetailInformation.population) {
    population = formatIntoReadable(countryDetailInformation.population);
  }

  if (countryDetailInformation.currencies) {
    currencies = Object.values(countryDetailInformation.currencies)[0];
  }

  return (
    <div className="information">
      <header>
        <h3>
          {countryDetailInformation?.name?.common}
        </h3>
      </header>

      <div className="wrapper">
        <div className="first">
          <CountryInformation
            pointer="Native Name"
            value={countryDetailInformation?.name?.official ?? ''}
          />

          <CountryInformation
            pointer="Population"
            value={population}
          />

          <CountryInformation
            pointer="Region"
            value={countryDetailInformation?.continents?.[0] ?? ''}
          />

          <CountryInformation
            pointer="Sub Region"
            value={countryDetailInformation.subregion ?? ''}
          />
        </div>

        <div className="second">
          <CountryInformation
            pointer="Capital"
            value={countryDetailInformation.capital ?? ''}
          />

          <CountryInformation
            pointer="Top Level Domain"
            value={countryDetailInformation.tld?.join(', ') ?? ''}
          />

          <CountryInformation
            pointer="Currencies"
            value={currencies?.name}
          />

          <CountryInformation
            pointer="Languages"
            value={countryDetailInformation?.languages ?
              Object.values(countryDetailInformation?.languages)?.join(', ') : ''
            }
          />
        </div>
      </div>

      <BorderCountries
        pointer="Border Countries"
        values={borderCountries}
      />
    </div>
  );
}
