import { useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';

const benefitsContent = {
  sub: 'Nos acompanhe nas redes',
  title: 'Nossas Redes',
  description: `Acompanhe nossas redes sociais e fique por dentro de todas as novidades e promoções!`,
};

const socialMediaContent = [
  {
    title: 'Instagram',
    description: 'Acompanhe nossas novidades e promoções no Instagram.',
    href: import.meta.env.VITE_INSTAGRAM,
    image: {
      src: '/assets/images/instagram.svg',
      alt: 'Instagram',
    },
  },
  {
    title: 'Facebook',
    description: 'Curta nossa página no Facebook e fique por dentro de tudo.',
    href: import.meta.env.VITE_FACEBOOK,
    image: {
      src: '/assets/images/facebook.svg',
      alt: 'Facebook',
    },
  },
  {
    title: 'LinkedIn',
    description:
      'Conecte-se conosco no LinkedIn e acompanhe nossas atualizações.',
    href: import.meta.env.VITE_LINKEDIN,
    image: {
      src: '/assets/images/linkedin.svg',
      alt: 'LinkedIn',
    },
  },
  {
    title: 'WhatsApp',
    description: 'Fale conosco pelo WhatsApp e tire suas dúvidas.',
    href: import.meta.env.VITE_WHATSAPP,
    image: {
      src: '/assets/images/whatsapp.svg',
      alt: 'WhatsApp',
    },
  },
];

export function SocialMedia() {
  const contentRef = useRef(null);
  useAnimationToRef(contentRef);

  return (
    <section ref={contentRef} className=" flex flex-col gap-12 items-center">
      <div className="container mx-auto grid md:gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <p className="text-gray-500 text-sm">{benefitsContent.sub}</p>
            <h1 className="text-cptext-primary text-2xl md:text-3xl font-bold">
              {benefitsContent.title}
            </h1>
          </div>

          <p className="md:text-xl px-8 border-cyan-400 border-l-4 flex items-center">
            {benefitsContent.description}
          </p>
        </div>
        <div className="grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid"></div>
        <div className="md:hidden max-w-[90vw]"></div>
      </div>
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {socialMediaContent.map((content, index) => (
          <a
            key={index}
            href={content.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-4 shadow-lg p-8 rounded-3xl border border-cptext-blue
              hover:shadow-xl transition-all duration-300 hover:bg-cptext-blue/10
            "
          >
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="w-12 h-12"
            />
            <h2 className="text-secondary-foreground text-xl font-bold">
              {content.title}
            </h2>
            <p className="text-secondary-foreground text-sm text-center">
              {content.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
