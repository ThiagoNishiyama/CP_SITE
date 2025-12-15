import { CreditSlider } from '../creditSlider';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

const mainContent = [
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito consignado descomplicado',
    description: `Esqueça a burocracia! Aqui você garante as melhores taxas e condições para o seu crédito consignado.
Simule agora mesmo e descubra o valor ideal para realizar seus planos com facilidade!
`,
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/consignado.png',
      alt: 'Casal de meia idade sorrindo',
      class: '',
    },
    section: 'consignado',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito imobiliário para realizar seus sonhos',
    description: `Quer conquistar a casa própria ou investir em grandes oportunidades? Aqui você encontra as melhores taxas e condições para o crédito imobiliário ideal para você.
Simule agora e descubra o valor que pode transformar seus planos em realidade!`,
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/imobiliario.png',
      alt: 'Familia feliz',
      class: '',
    },
    section: 'imobiliario',
  },
  {
    sub: 'CPCreditos: Humanizando o crédito',
    title: 'Crédito pessoal para você realizar seus sonhos',
    description: `Crédito pessoal para realizar seus sonhos
Não adie seus planos! Aqui você encontra as melhores taxas e condições para transformar seus sonhos em realidade.
Simule agora e descubra o valor perfeito para você!`,
    cta: 'Seja nosso parceiro',
    image: {
      src: '/assets/images/credito-pessoal.png',
      alt: 'Mulher com passaporte',
      class: '',
    },
    section: 'home',
  },
];
const Hero = ({ hero }: any) => {
  return (
    <div className="bg-[url('/assets/images/bg/bg-mobile.png')]  md:bg-[url('/assets/images/bg/bg-pattern.png')] h-full flex items-center justify-center bg-cover bg-top">
      <section className="bg-gradient-to-l from-cptext-blue/95 to-cptext-blue/90  md:to-cptext-blue/80 via-cptext-blue/95  flex justify-center pt-16 h-full w-full">
        <div className="container mx-auto flex items-center flex-col-reverse lg:flex-row justify-between gap-2 h-full">
          <div
            className={cn(
              'w-full h-fit lg:min-w-[490px] md:mr-8 md:max-w-[490px]',
              hero.image.class
            )}
          >
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 pb-4">
            <p className="text-gray-300 lg:text-xl text-xs">{hero.sub}</p>
            <h1 className="text-secondary lg:text-4xl text-2xl font-bold">
              {hero.title}
            </h1>
            <p className="text-white lg:text-xl text-sm">{hero.description}</p>
            <CreditSlider section={hero.section} />
          </div>
        </div>
      </section>
    </div>
  );
};

export function Main() {
  const autoPlay = Autoplay({
    delay: 2e4,
    stopOnMouseEnter: true,
    stopOnFocusIn: true,
  });

  return (
    <section>
      <Carousel
        className="w-full bg-cptext-blue "
        opts={{ loop: true }}
        plugins={[autoPlay]}
      >
        <CarouselContent>
          {mainContent.map((hero, index) => (
            <CarouselItem key={index}>
              <Hero hero={hero} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </section>
  );
}
