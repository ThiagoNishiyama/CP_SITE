import ProductVariants from '@/components/productVariants';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function Page() {
  return <ProductVariants />;
}
