import { pagesData, type Paths } from '@/routes/data';
import { useLocation } from 'react-router';
import { InfoModal } from '../infoModal';
import { Advantage } from '../page/Advantage/Advantage';
import { Hero } from '../page/Hero/Hero';
import { SeeAlso } from '../page/SeeAlso/SeeAlso';
import { Partners } from '../partners';
import { Products } from '../products';
import { Header } from '../header';
import { HomeFooter } from '@/container/footer';

export default function ProductVariants() {
  const { pathname } = useLocation();

  const path = pathname.split('/').pop() as Paths;

  const data = pagesData[path];

  return (
    <>
      <Header />
      <main className="flex flex-col pt-20">
        <Hero data={data.hero} />
        <Products data={data.variants} />
        <div className="flex flex-col lg:gap-32 gap-20 mt-20 lg:mt-32">
          <Advantage data={data.advantages} />
          <Partners
            title="Consignado Público: parcerias estratégicas"
            description="Atenção: somos prestadores de serviços das instituições financeiras:"
          />
          <SeeAlso data={data.seeAlso} />
        </div>
      </main>
      <HomeFooter />
      <InfoModal />
    </>
  );
}
