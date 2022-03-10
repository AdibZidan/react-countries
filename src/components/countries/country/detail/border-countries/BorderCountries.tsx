import Button from '../../content/button/Button';
import { getStyle } from './BorderCountries.helper';
import './BorderCountries.scss';

export interface BorderCountriesProps {
  pointer: string;
  values: any;
}

export default function BorderCountries(props: BorderCountriesProps) {
  const isWithValue: boolean = props.values && props.values?.length > 0;

  return (
    <>
      {
        isWithValue && (
          <div className="border-container">
            <span className="pointer">
              {props.pointer}:
            </span>

            <div className="border-countries" style={getStyle(props)}>
              {
                props.values.map((value: string, index: number) =>
                  <Button
                    className="value"
                    key={index}
                    text={value}
                  />
                )
              }
            </div>
          </div>
        )
      }
    </>
  );
}
