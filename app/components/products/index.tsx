import { BriefcaseBusiness, MoveRight } from 'lucide-react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';
import { useMemo, useRef } from 'react';
import { CarouselContainer } from '@/components/carousel';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import type { Data } from '@/routes/data';

const productsContent = {
  sub: 'Principais produtos',
  title: 'Nossos Produtos',
  description:
    'Conheça nossas soluções financeiras e escolha a que melhor atende às suas necessidades.',
  productCards: [
    {
      title: 'Crédito Consignado',
      description:
        'Ideal para quem busca praticidade e taxas reduzidas, o crédito consignado é descontado diretamente da folha de pagamento ou aposentadoria. É a opção perfeita para quem deseja organizar as finanças com facilidade e segurança.',
      cta: 'Ver produtos',
      href: '/produto/consignado',
      image: '/assets/images/products/consignado-inss.png',
    },
    {
      title: 'Crédito Imobiliário',
      description:
        'Realize o sonho da casa própria! O crédito imobiliário permite financiar o imóvel que você sempre quis, com condições ajustadas ao seu orçamento. Bancos e instituições financeiras cuidam da transação, e você paga em parcelas que cabem no seu bolso.',
      cta: 'Ver produtos',
      href: '/produto/imobiliario',
      image: '/assets/images/products/financiamento-de-imovel.png',
    },
    {
      title: 'Crédito Pessoal',
      description:
        'Precisando de um apoio financeiro rápido e sem burocracia? O crédito pessoal é a solução ideal para suas necessidades, sem exigir garantias ou alienação de bens. As condições são ajustadas ao seu perfil e aprovadas com agilidade.',
      cta: 'Ver produtos',
      href: '/produto/credito/credito-pessoal',
      image: '/assets/images/products/credito-pessoal.png',
    },
    {
      title: 'Operações Estruturadas',
      description:
        'Projetos grandes pedem soluções financeiras robustas. Nossas Operações Estruturadas oferecem planejamento estratégico e crédito sob medida para demandas específicas, como fusões, aquisições, infraestrutura e expansão empresarial. Feito sob medida para empresas de médio e grande porte.',
      cta: 'Ver produtos',
      href: '/produto/outros/operacoes-estruturadas',
      image: '/assets/images/products/operacoes-estruturadas.png',
    },
    {
      title: 'Consórcio',
      description:
        'Uma alternativa inteligente para adquirir bens ou serviços. Participe de um grupo colaborativo e, dentro de um prazo determinado, alcance seus objetivos financeiros com parcelas planejadas e sem juros abusivos.',
      cta: 'Ver produtos',
      href: '/produto/consorcio',
      image: '/assets/images/products/consorcio.png',
    },
  ],
};

export function Products({ data }: { data: Data['variants'] }) {
  if (!data) return;

  const cards = useMemo(
    () =>
      data?.cards.map((card) => (
        <div
          key={Math.random()}
          className="flex gap-4 bg-background rounded-3xl overflow-hidden min-h-[460px]"
        >
          <div className="flex gap-4 flex-col w-full lg:max-w-[60%] p-4 md:p-8 sm:pr-0">
            <h3 className="md:text-2xl text-lg font-bold text-cptext-primary">
              {card.title}
            </h3>
            <div className="text-sm md:text-lg text-cptext-primary">
              {card.description}
            </div>
            <Link
              to={card.href}
              className="text-cptext-blue p-0 text-sm md:text-lg w-fit flex items-center gap-2"
            >
              {card.cta}
              <MoveRight className="size-4" />
            </Link>
          </div>
          <div className="max-size-[242px] aspect-square overflow-hidden hidden md:block">
            <img
              src={card.image.src}
              alt={card.image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )),
    []
  );

  const componentRef = useRef(null);

  useAnimationToRef(componentRef);

  return (
    <section>
      <section className="bg-blue-950 py-16 lg:py-32">
        <div
          ref={componentRef}
          className="container mx-auto flex items-start flex-col relative justify-between gap-8"
        >
          <div className="max-w-[512px] flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div> {data.icon}</div>
              <p className="text-secondary lg:text-lg text-sm">{data.sub}</p>
            </div>
            <h2 className="text-secondary md:text-2xl text-lg font-bold">
              {data.title}
            </h2>
            <p className="text-white lg:text-lg text-sm">{data.description}</p>
          </div>
          <div>
            <div className="md:grid grid-cols-1  gap-8 relative z-10 hidden">
              {cards}
            </div>
            <div className="md:hidden max-w-[90vw]">
              <CarouselContainer components={cards} className="h-fit" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export function ProductCards() {
  const componentRef = useRef(null);
  useAnimationToRef(componentRef);
  return (
    <section
      ref={componentRef}
      className="container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8 text-secondary fadeIn"
    >
      <div className="container mx-auto grid gap-8 col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-gray-500 text-sm">{productsContent.sub}</p>
            <h1 className="text-cptext-primary text-2xl md:text-3xl font-bold">
              {productsContent.title}
            </h1>
          </div>

          <p className="md:text-xl px-8 border-cyan-400 border-l-4 flex items-center text-cptext-primary">
            {productsContent.description}
          </p>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid"></div>
        <div className="md:hidden max-w-[90vw]"></div>
      </div>

      {productsContent.productCards.map((card, i) => (
        <div
          key={Math.random()}
          className={cn(
            'flex gap-4 bg-background rounded-3xl overflow-hidden bg-cptext-blue flex-col md:flex-row justify-between',
            i % 2 === 0 && 'md:flex-row-reverse ',
            'lg:col-span-2'
          )}
        >
          <div
            className={cn(
              'flex gap-4 flex-col w-full lg:max-w-[60%] p-8',
              i % 2 === 0 ? 'sm:pl-0' : 'sm:pr-0'
            )}
          >
            <h3 className="text-xl md:text-2xl font-bold">{card.title}</h3>
            <p className="md:text-xl">{card.description}</p>
            <Link
              to={card.href}
              className="text-cptext-cyan p-0 md:text-xl w-fit flex items-center gap-2"
            >
              Saiba mais
              <MoveRight className="size-4" />
            </Link>
          </div>
          <div className="md:max-w-[400px] overflow-hidden sm:block object-cover sm:min-w-[400px]">
            <img src={card.image} alt={card.title} className="w-full h-full" />
          </div>
        </div>
      ))}
    </section>
  );
}
