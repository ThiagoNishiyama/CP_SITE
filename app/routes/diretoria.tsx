import { Header } from '@/components/header';
import type { Route } from './+types/home';

import { OurOfficesSection } from '@/components/our-offices';
import { HomeFooter as Footer } from '@/container/footer';
import { Partners } from '@/components/partners';
import { InfoModal } from '@/components/infoModal';
import { SocialMedia } from '@/components/socialMedia';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { AboutList, DirectorList } from '@/components/About';
import { Hero } from '@/components/page/Hero/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'CPCréditos' },
    { name: 'description', content: 'CPCréditos' },
  ];
}

const aboutContent = [
  {
    sub: 'Diretoria',
    title: 'Paulo Cattaneo - Co-Fundador e CFO da CP Créditos',
    descriptions: [
      <p>
        Com 25 anos de experiência no Santander, o co-fundador e CFO da CP
        Créditos possui vasta expertise em gestão financeira e crédito
        consignado. Após uma carreira sólida no banco, fundou a CP Créditos em
        2020, com foco em soluções financeiras personalizadas e responsáveis.
      </p>,
      <p>
        Como CFO, ele lidera a inovação em crédito consignado e imobiliário,
        buscando sempre oferecer alternativas seguras e sustentáveis para
        clientes, além de fortalecer parcerias estratégicas no setor financeiro.
      </p>,
    ],
    image: {
      alt: 'Paulo Cattaneo',
      src: '/assets/images/directors/Paulo.jpg',
    },
  },
  {
    sub: 'Diretoria',
    title: 'Lucas Pieri - Fundador e CEO da CP Créditos',
    descriptions: [
      <p>
        Com mais de 20 anos de experiência no mercado financeiro, incluindo uma
        carreira consolidada no Santander, o fundador e CEO da CP Créditos tem
        como missão transformar o setor de crédito. Em 2020, fundou a empresa
        com o objetivo de oferecer soluções financeiras acessíveis e
        transparentes.
      </p>,
      <p>
        Sua trajetória inclui liderança em projetos inovadores, gestão de
        equipes e uma vasta rede de conexões. Como CEO, foca em soluções
        financeiras personalizadas, especialmente no crédito consignado, Home
        Equity e consórcios.
      </p>,
    ],
    image: {
      alt: 'Lucas Pieri',
      src: '/assets/images/directors/Lucas.png',
    },
  },
  {
    sub: 'Diretoria',
    title: 'Fatima Ciriaco - Diretora Financeira da CP Créditos',
    descriptions: [
      <p>
        Com uma trajetória marcada por expertise e liderança, ela é responsável
        por gerenciar as operações financeiras da empresa, garantindo
        eficiência, transparência e sustentabilidade econômica. Com vasta
        experiência no setor financeiro, Fátima se destaca por sua habilidade em
        estratégias de gestão de recursos, análise de riscos e planejamento
        fiscal, contribuindo significativamente para o crescimento e a
        estabilidade da CP Créditos.
      </p>,
      <p>
        Seu perfil profissional combina competência técnica com uma visão
        estratégica, tornando-a uma peça fundamental na liderança da
        organização.
      </p>,
    ],
    image: {
      alt: 'Maria de Fatima Ciriaco Cattaneo',
      src: '/assets/images/directors/Fatima.jpeg',
      className: 'bg-gray-200 object-contain',
    },
  },
  {
    sub: 'Diretoria',
    title: 'Alessandro Bueno - Head Comercial da CP Créditos',
    descriptions: [
      <p>
        Com uma carreira sólida em operações financeiras, Alessandro Bueno é o
        Head Comercial da CP Créditos. Com vasta experiência em gestão de
        processos e otimização de equipes, ele desempenha um papel crucial na
        eficiência e excelência Comercial da empresa.
      </p>,
      <p>
        Sua abordagem estratégica visa melhorar a experiência do cliente,
        garantindo que as soluções financeiras da CP Créditos sejam entregues de
        maneira ágil, segura e personalizada, alinhada com a missão de oferecer
        serviços financeiros inovadores e de alta qualidade.
      </p>,
    ],
    image: {
      alt: 'Alessandro Bueno',
      src: '/assets/images/directors/Alessandro.png',
    },
  },
  {
    sub: 'Diretoria',
    title: 'Wellington Carrilho - Head de Novos Negócios da CP Créditos',
    descriptions: [
      <p>
        Com uma sólida formação em economia e uma carreira voltada para a
        inovação e parcerias estratégicas, Wellington Carrilho é o Head de Novos
        Negócios da CP Créditos. Sua experiência inclui o desenvolvimento de
        estratégias eficazes para identificar oportunidades inexploradas,
        impulsionando o crescimento sustentável da empresa.
      </p>,
      <p>
        Com forte liderança e habilidades de negociação, ele inspira equipes a
        pensar criativamente, estabelecendo relacionamentos sólidos e
        posicionando a empresa de maneira competitiva no mercado.
      </p>,
    ],
    image: {
      alt: 'Wellington Carrilho',
      src: '/assets/images/directors/Wellington.png',
    },
  },
];

const heroData = {
  title: 'Conheça nossa Equipe',
  description: `Conheça a equipe de especialistas que lidera a CP Créditos, com vasta experiência no mercado financeiro e um compromisso com a inovação e a transparência.`,
};

export default function Diretoria() {
  return (
    <>
      <Header />
      <main className="flex flex-col pt-20 pb-20 lg:gap-32 gap-20">
        <Hero data={heroData} />
        <DirectorList aboutContent={aboutContent} />
        <Partners title="Conheça nossos parceiros" />
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
