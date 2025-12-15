import type { Route } from '../+types/root';
import ProductPage from './page';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function Page() {
  return <ProductPage />;
}
