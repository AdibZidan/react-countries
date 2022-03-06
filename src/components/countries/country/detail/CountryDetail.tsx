import { useParams } from 'react-router-dom';
import './CountryDetail.scss';

export default function CountryDetail() {
  const { name } = useParams();

  return (
    <section className="country">
      {name}
    </section>
  );
}
