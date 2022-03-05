import './CountryInformation.scss';

export interface CountryInformationProps {
  pointer: string;
  value: string | number;
}

export default function CountryInformation({ pointer, value }: CountryInformationProps) {
  return (
    <>
      {value && (
        <div className="information">
          <span className="key">
            {pointer}:
          </span>

          <span className="value">
            {value}
          </span>
        </div>
      )}
    </>
  );
}
