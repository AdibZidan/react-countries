import './CountryContent.scss';
import CountryInformation from './information/CountryInformation';

export interface CountryContentProps {
  name: string;
  population: number;
  region: string;
  capital: string;
}

export default function CountryContent(props: CountryContentProps) {
  const readablePopulation: string = new Intl.NumberFormat().format(props.population);

  return (
    <figcaption className='country'>
      <span className="name">
        {props.name}
      </span>

      <CountryInformation
        pointer={'Population'}
        value={readablePopulation}
      />

      <CountryInformation
        pointer={'Region'}
        value={props.region}
      />

      <CountryInformation
        pointer={'Capital'}
        value={props.capital}
      />
    </figcaption>
  );
}
