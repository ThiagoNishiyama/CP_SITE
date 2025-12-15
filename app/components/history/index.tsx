import { Button } from '@/components/ui/button';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router';

const historyContent = {
  sub: 'Nossa história',
  title:
    'Desde 2020, temos ajudado pessoas a transformar sonhos em realidade e a conquistar objetivos financeiros com segurança e transparência.',
  description1: `Com soluções completas em crédito consignado, crédito pessoal, crédito imobiliário, antecipação de FGTS, consórcio, home equity e refinanciamento imobiliário, trabalhamos em parceria com os melhores bancos do mercado para oferecer as melhores condições e resultados.`,
  description2: `Aqui, a confiança e o cuidado com você sempre vêm em primeiro lugar. Seja para realizar um sonho, organizar suas finanças ou dar um passo em direção a novos objetivos, estamos ao seu lado em cada etapa.`,
  cta: 'Saiba mais',
  image: '/assets/images/history.jpeg',
  href: '/sobre',
};

export function History() {
  const componentRef = useRef(null);
  useAnimationToRef(componentRef);
  return (
    <section className="mb-20">
      <div
        ref={componentRef}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-5 lg:gap-28 gap-16"
      >
        <div className="w-auto aspect-square overflow-hidden rounded-lg col-span-2">
          <img
            src={historyContent.image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 col-span-3">
          <p className="text-cptext-grey text-md">{historyContent.sub}</p>
          <h2 className="text-cptext-primary text-xl font-bold">
            {historyContent.title}
          </h2>
          <p className="text-lg text-cptext-blue">
            {historyContent.description1}
          </p>
          <p className="text-lg  text-cptext-blue">
            {historyContent.description2}
          </p>
          <Link
            to={historyContent.href}
            className="text-md w-fit border p-2 px-4 rounded-lg hover:bg-cptext-blue/20 transition-all duration-300 border-cptext-blue text-cptext-blue flex items-center gap-2"
          >
            {historyContent.cta}
            <MoveRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
