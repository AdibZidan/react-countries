import CountryContent from './content/CountryContent';
import './Country.scss';
import CountryHeader from './header/CountryHeader';

export interface CountryProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export default function Country(props: CountryProps) {
  return (
    <figure className='country'>
      <CountryHeader
        flag={props.flag}
        name={props.name}
      />

      <CountryContent
        name={props.name}
        population={props.population}
        region={props.region}
        capital={props.capital}
      />
    </figure>
  );
}
