import './CountryDetailImage.scss';

export interface CountryDetailImageProps {
  flag: string;
  name: string;
}

export default function CountryDetailImage(props: CountryDetailImageProps) {
  return (
    <figure className="image">
      <img
        src={props.flag}
        alt={props.name}
      />
    </figure>
  );
}
