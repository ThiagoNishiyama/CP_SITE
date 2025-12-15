import { Header } from '@/components/header';
import type { Route } from './+types/home';

import { OurOfficesSection } from '@/components/our-offices';
import { HomeFooter as Footer } from '@/container/footer';
import { Partners } from '@/components/partners';
import { InfoModal } from '@/components/infoModal';
import { SocialMedia } from '@/components/socialMedia';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { AboutList } from '@/components/About';
import { Hero } from '@/components/page/Hero/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}
const aboutContent = [
  {
    title: 'Conheça a CP Assessoria Financeira | CPCréditos',
    descriptions: [
      <p>
        Fundada em 2020, a CP Assessoria Financeira nasceu com o propósito de
        oferecer soluções diferenciadas nos mercados de{' '}
        <strong>Crédito Consignado</strong>, <strong>Crédito Pessoal</strong> e{' '}
        <strong>Crédito Imobiliário</strong>, sempre com foco no crescimento
        sustentável e no atendimento de excelência.
      </p>,
      <p>
        Nosso time é formado por profissionais altamente capacitados, com
        profundo conhecimento do mercado financeiro e comprometidos em atender
        às necessidades específicas de cada cliente. Assim, nos posicionamos
        como uma referência em assessoria financeira, entregando soluções que
        realmente fazem a diferença.
      </p>,
    ],
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/equipe-cp.jpg',
    },
  },
  {
    sub: 'Nossa História',
    title: 'CPCréditos | Humanizando o Crédito',
    descriptions: [
      <p>
        Em 2024, a CP Assessoria Financeira evoluiu para se tornar a CPCréditos,
        marcando uma nova era de inovação e proximidade com nossos clientes. O
        rebranding veio para destacar nosso propósito: transformar o acesso ao
        crédito em uma experiência mais humana, transparente e personalizada.
      </p>,
      <p>
        Com o slogan <strong>"CPCréditos | Humanizando o Crédito"</strong>,
        reafirmamos nosso compromisso de oferecer soluções financeiras
        acessíveis e que realmente fazem a diferença na vida das pessoas. A
        mudança no nome reflete nossa essência: ir além do crédito,
        proporcionando confiança e cuidado em cada interação.
      </p>,
    ],
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/logo.svg',
    },
  },
  {
    title: 'Nossa Missão',
    descriptions: [
      <p>
        Redefinir o acesso ao crédito, tornando-o uma experiência
        verdadeiramente humana e personalizada. Nossa missão é oferecer soluções
        financeiras que sejam acessíveis, éticas e moldadas às necessidades
        únicas de cada cliente, enquanto impulsionamos o crescimento sustentável
        de todos os envolvidos, criando impacto positivo em cada interação.
      </p>,
    ],
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/missao.svg',
    },
  },
  {
    title: 'Nossa Visão',
    descriptions: [
      <p>
        Ser reconhecida como a principal referência em soluções financeiras no
        Brasil, destacando-se pela inovação, sustentabilidade e excelência no
        atendimento. Nosso foco é transformar vidas, sempre colocando as pessoas
        no centro de tudo o que fazemos e promovendo um mercado financeiro mais
        acessível e inclusivo.
      </p>,
    ],
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/visao.svg',
    },
  },
  {
    title: 'Nossos Valores',
    descriptions: [
      <ul className="list-disc list-inside">
        <h4 className="text-xl font-bold mb-1">Excelência no Atendimento</h4>
        <li>
          Qualidade, transparência e ética em cada relação com nossos clientes;
        </li>
        <li>
          Atendimento verdadeiramente personalizado, com foco em compreender e
          atender às necessidades específicas;
        </li>
        <li>Soluções práticas que entregam valor real e impacto positivo.</li>
      </ul>,
      <ul className="list-disc list-inside">
        <h4 className="text-xl font-bold mb-1">Inovação e Expertise</h4>
        <li>
          Parcerias com os principais bancos e líderes do setor financeiro,
          garantindo excelência nas soluções;
        </li>
        <li>
          Uma equipe atualizada, conectada às últimas tendências e inovações do
          mercado;
        </li>
        <li>
          Operações conduzidas com segurança e transparência, entregando as
          melhores opções de crédito, adaptadas a cada necessidade.
        </li>
      </ul>,
      <ul className="list-disc list-inside">
        <h4 className="text-xl font-bold mb-1">Compromisso e Impacto</h4>
        <li>
          Crescimento responsável, alinhado às melhores práticas do mercado
          financeiro;
        </li>
        <li>
          Compromisso com o desenvolvimento contínuo dos nossos clientes,
          parceiros e equipe;
        </li>
        <li>
          Soluções que geram impacto positivo e promovem o crescimento
          sustentável de todos os envolvidos.
        </li>
      </ul>,
    ],
    image: {
      alt: 'Imagem sobre a empresa',
      src: '/assets/images/valores.svg',
    },
  },
];

const heroData = {
  title: 'Sobre a CPCréditos',
  description:
    'Transformamos o acesso ao crédito em uma experiência mais humana, transparente e acessível. Conheça nossa história, valores e compromisso com você.',
};
export default function About() {
  return (
    <>
      <Header />
      <main className="flex flex-col pt-20 pb-20">
        <Hero data={heroData} />
        <div className="flex gap-4 flex-col items-center container my-16">
          <h2 className="text-3xl text-center md:text-3xl text-cptext-blue w-full font-bold flex-1 min-w-fit ">
            HUMANIZANDO O CRÉDITO
          </h2>
          {/* <div
            className={`w-full md:w-1/2 aspect-square overflow-hidden  col-span-3  mb-8 shadow-md text-white fill-white hidden lg:flex rounded-lg`}
          >
            <img
              src="/assets/images/equipe-cp.jpg"
              alt="Imagem sobre a empresa"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
        <div className="flex flex-col lg:gap-32 gap-20">
          <AboutList aboutContent={aboutContent} />
          <Partners title="Conheça nossos parceiros" />
          <OurOfficesSection />
          <SocialMedia />
        </div>
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
