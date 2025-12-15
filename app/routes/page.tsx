import type { Route } from '../+types/root';
import { Header } from '@/components/header';
import { InfoModal } from '@/components/infoModal';
import { About } from '@/components/page/About/About';
import { Advantage } from '@/components/page/Advantage/Advantage';
import { pagesData, type Paths } from '@/routes/data';
import { Hero } from '@/components/page/Hero/Hero';
import { SeeAlso } from '@/components/page/SeeAlso/SeeAlso';
import { Partners } from '@/components/partners';
import { HomeFooter } from '@/container/footer';
import { useLocation } from 'react-router';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { SocialMedia } from '@/components/socialMedia';
import { SimulationModal } from '@/components/simulationModal';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function ProductPage() {
  const { pathname } = useLocation();

  const path = pathname.split('/').pop() as Paths;

  const data = pagesData[path];

  return (
    <>
      <Header />
      <main className="flex flex-col pt-20">
        <Hero data={data.hero} />
        <About data={data.about} section={data.section} />
        <div className="flex flex-col lg:gap-32 gap-20 lg:pt-20 pt-16">
          <Advantage data={data.advantages} />
          <Partners
            title={`${data.hero.title}: parcerias estratégicas`}
            description="Atenção: somos prestadores de serviços das instituições financeiras:"
          />
          <SocialMedia />
          <SeeAlso data={data.seeAlso} />
        </div>
      </main>
      <HomeFooter />
      <InfoModal />
      <FloatingWhatsApp
        phoneNumber={import.meta.env.VITE_CP_PHONE}
        accountName="CPCréditos"
        avatar="/assets/images/whatsApp-avatar.jpeg"
        chatMessage="Olá! Como podemos te ajudar?"
        statusMessage="Estamos online!"
        darkMode={false}
        placeholder="Digite sua mensagem..."
      />
    </>
  );
}
