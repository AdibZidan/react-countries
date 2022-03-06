import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <figure
      className="country"
      onClick={() => navigate(`detail/${props.name.toLowerCase()}`)}>
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
