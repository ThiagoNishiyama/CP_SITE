import { BriefcaseBusiness } from 'lucide-react';
import { CarouselContainer } from '@/components/carousel';
import { useMemo, useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { RiCustomerServiceFill, RiDiscountPercentFill } from 'react-icons/ri';
import { AtendimentoIcon, SecurityIcon, SpeedIcon } from '../ui/icons';

const benefitsContent = {
  sub: 'Nossos benefícios',
  title: 'Por que escolher a CP Créditos?',
  description: (
    <p>
      Aqui, você conta com soluções completas em{' '}
      <strong>Crédito Consignado</strong>, <strong>Crédito Pessoal</strong>,{' '}
      <strong>Financiamento Imobiliário</strong>,{' '}
      <strong>Antecipação de FGTS</strong>, <strong>Consórcio</strong>,{' '}
      <strong>Home Equity</strong> e{' '}
      <strong>Refinanciamento Imobiliário</strong>. Tudo isso com a parceria dos
      melhores bancos do mercado, garantindo confiança e cuidado em cada etapa.
    </p>
  ),
  cta: 'Seja parceiro',
  cards: [
    {
      title: 'Atendimento Personalizado',
      description:
        'Nosso time está sempre à disposição para entender suas necessidades e oferecer as melhores soluções financeiras para você.',
      icon: <AtendimentoIcon className="size-5 md:size-8" />,
    },
    {
      title: 'As melhores taxas',
      description:
        'Garantimos condições competitivas, alinhadas às suas possibilidades, sempre com foco no seu bem-estar financeiro.',
      icon: <RiDiscountPercentFill className="size-5 md:size-8" />,
    },
    {
      title: 'Segurança e Transparência',
      description:
        'Trabalhamos com ética e clareza em todas as etapas do processo, porque você merece confiar em quem cuida do seu futuro.',
      icon: <SecurityIcon className="size-5 md:size-8" />,
    },
    {
      title: 'Facilidade e Agilidade',
      description:
        'Esqueça a burocracia! Aqui, seu crédito é aprovado com rapidez e sem complicações.',
      icon: <SpeedIcon className="size-5 md:size-8" />,
    },
  ],
};

export function Benefits() {
  const cards = useMemo(() => {
    return benefitsContent.cards.map((card) => (
      <div
        key={Math.random()}
        className="flex gap-4 shadow-[0_0px_50px_-20px_rgba(0,0,0,0.2)] p-4 sm:p-8 rounded-3xl max-w-[600px] min-h-[200px] md:min-h-[300px] sm:min-h-fit h-full flex-col"
      >
        <div className="flex gap-4 items-center">
          <div className="mt-1 bg-cptext-blue text-white p-1.5 md:p-3 size-fit rounded-md">
            {card.icon}
          </div>
          <h3 className="md:text-2xl font-bold text-cptext-blue">
            {card.title}
          </h3>
        </div>
        <div className="flex gap-4 flex-col">
          <p className="md:text-xl">{card.description}</p>
        </div>
      </div>
    ));
  }, []);
  const contentRef = useRef(null);
  useAnimationToRef(contentRef);

  return (
    <section className=" flex flex-col gap-12 items-center">
      <div className="container mx-auto grid lg:gap-24 gap-16">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-gray-500 md:text-xl">{benefitsContent.sub}</p>
            <h1 className="text-cptext-primary text-2xl md:text-4xl font-bold">
              {benefitsContent.title}
            </h1>
          </div>

          <article className="md:text-xl px-8 border-cyan-400 border-l-4">
            {benefitsContent.description}
          </article>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid">
          {cards}
        </div>
        <div className="md:hidden max-w-[90vw]">
          <CarouselContainer
            components={cards}
            className="h-[240px] md:h-[340px]"
          />
        </div>
      </div>
    </section>
  );
}
