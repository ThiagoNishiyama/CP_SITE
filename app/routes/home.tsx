import { Header } from '@/components/header';
import type { Route } from './+types/home';

import { OurOfficesSection } from '@/components/our-offices';
import { Main } from '@/components/main';
import { Benefits } from '@/components/benefits';
import { ProductCards } from '@/components/products';
import { History } from '@/components/history';
import { HomeFooter as Footer } from '@/container/footer';
import { Partners } from '@/components/partners';
import { InfoModal } from '@/components/infoModal';
import { SocialMedia } from '@/components/socialMedia';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col lg:gap-32 gap-20 pt-20 mb-20">
        <Main />
        <Benefits />
        <Partners title="Conheça nossos parceiros" />
        <ProductCards />
        <OurOfficesSection />
        <SocialMedia />
      </main>
      <Footer />
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
