import './CountryHeader.scss';

export interface CountryHeaderProps {
  flag: string;
  name: string;
}

export default function CountryHeader({ flag, name }: CountryHeaderProps) {
  return (
    <header className="country">
      <img
        src={flag}
        alt={name}
      />
    </header>
  );
}
