import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import React, { useRef, useState } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

const partners = [
  {
    image: {
      src: '/assets/images/partners/banco-bmg.svg',
      alt: 'Banco BMG',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description: '0800 723 2044',
        },
        {
          label: 'SAC',
          description:
            '0800 979 9099. Atendimento 24h, todos os dias da semana.',
        },
        {
          label: 'Central de Relacionamento',
          description:
            '(11) 4002 7007 para celulares e 0800 770 1790 para fixos.',
        },
      ],
    },
    link: 'https://www.bmgconsig.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/banco-pan.svg',
      alt: 'Banco Pan',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description: '0800 723 2044',
        },
        {
          label: 'SAC',
          description:
            '0800 775 8686 ou 0800 776 2200 para deficientes auditivos e de fala. Atendimento disponível 24h todos os dias da semana.',
        },
      ],
    },
    link: 'https://www.bancopan.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/banco-day-coval.svg',
      alt: 'Banco Daycoval',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description:
            '0800 777 0900. Atendimento disponível em dias úteis, das 9h às 18h.',
        },
        {
          label: 'SAC Empréstimos',
          description: '0800 775 0500',
        },
        {
          label: ' SAC Deficiente Auditivo',
          description: '0800 775 2005',
        },
      ],
    },
    link: 'https://www.daycoval.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/vemcard.png',
      alt: 'Vemcard',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description: '0800 591 8687',
        },
        {
          label: 'SAC',
          description: 'sac@vemcard.com.br',
        },
      ],
    },
    link: 'https://vemcard.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/master.png',
      alt: 'Banco Master',
    },
    info: {
      ouvidoria: [
        {
          label: 'Central de Relacionamento',
          description:
            '4003-4952 (capital) 0800 881 0001 (demais localidades) De segunda a domingo, das 06h às 22h, incluindo feriados.',
        },
        {
          label: 'SAC',
          description: '0800 729 0779 Atendimento 24 horas, 7 dias por semana.',
        },
        {
          label: 'Ouvidoria',
          description:
            '0800 729 1710 De segunda a sexta, das 08h às 18h, exceto feriado.',
        },
        {
          label: 'Deficiência Auditiva/Fala',
          description: '0800 729 2539 Atendimento 24 horas, 7 dias por semana.',
        },
      ],
    },
    link: 'https://www.bancomaster.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/ole-consignado.svg',
      alt: 'Olé Consignado',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description:
            '0800 726 7404. Atendimento disponível de segunda a sexta-feira, das 9h às 18h.',
        },
        {
          label: 'SAC',
          description:
            '0800 726 7454 ou 0800 771 0401 para deficientes auditivos e de fala. Atendimento disponível de segunda a sexta-feira, das 8h às 20h.',
        },
      ],
    },
    link: 'https://www.oleconsignado.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/meu-cash-card.png',
      alt: 'Meu cash card',
    },
    info: {
      ouvidoria: [
        {
          label: 'Central de Atendimento',
          description: '4003-7688 De segunda à sexta das 9h às 18h',
        },
        {
          label: 'Email',
          description: 'faleconosco@meucashcard.com.br',
        },
      ],
    },
    link: 'https://www.meucashcard.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/santander.svg',
      alt: 'Santander',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description:
            '0800 726 0322 ou 0800 771 0301 para Deficientes Auditivos e de fala. Atendimento disponível de segunda a sexta-feira, das 8h às 22h e aos sábados, das 9h às 14h, exceto feriados.',
        },
        {
          label: 'SAC',
          description:
            '0800 762 7777 ou 0800 771 0401 para deficientes auditivos e de fala. Atendimento 24h todos os dias da semana.',
        },
        {
          label: 'WhatsApp',
          description: '55 (11) 3012 0322',
        },
      ],
    },
    link: 'https://www.santander.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/banco-do-brasil.svg',
      alt: 'Banco do brasil',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description:
            '0800 729 5678 – reclamações não solucionadas nos canais habituais – agência, SAC e demais canais de atendimento, atendimento disponível em dias úteis, das 9h às 18h.',
        },
        {
          label: 'SAC',
          description:
            '0800 729 0722 para informações, reclamações e cancelamento de produtos e serviços.',
        },
        {
          label: '0800 729 0088',
          description:
            '0800 729 0088 para informações, reclamações e cancelamento de cartão, outros produtos e ouvidoria. Atendimento a deficientes auditivos ou de fala, disponível 24h, todos os dias da semana.',
        },
      ],
    },
    link: 'https://www.bb.com.br/site/',
  },
  {
    image: {
      src: '/assets/images/partners/bancosafra.svg',
      alt: 'Banco safra',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento ao cliente',
          description: (
            <a
              className="hover:underline"
              href="https://www.safra.com.br/atendimento/atendimento-ao-cliente.htm"
              target="_blank"
              rel="noreferrer"
            >
              https://www.safra.com.br/atendimento/atendimento-ao-cliente.htm
            </a>
          ),
        },
      ],
    },
    link: 'https://www.safra.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/itau.svg',
      alt: 'Itau',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description:
            '0800 570 0011 (Atendimento disponível em dias úteis das 9h às 18h, exceto feriados)',
        },
        {
          label: 'SAC',
          description:
            '0800 728 0728 (Atendimento exclusivo de segunda a sábado, das 8h às 20h, exceto feriados).',
        },
      ],
    },
    link: 'https://www.itau.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/c6.svg',
      alt: 'C6 Bank',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description:
            '3003 6116 ou 0800 660 6116, 24 horas por dia, 7 dias por semana.',
        },
      ],
    },
    link: 'https://www.c6bank.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/cashme.svg',
      alt: 'CashMe',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description: (
            <a
              className="hover:underline"
              href="https://www.cashme.com.br/fale-conosco/#contact-form"
              target="_blank"
              rel="noreferrer"
            >
              https://www.cashme.com.br/fale-conosco/#contact-form
            </a>
          ),
        },
      ],
    },
    link: 'https://www.cashme.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/creditas.svg',
      alt: 'Creditas',
    },
    info: {
      ouvidoria: [
        {
          label: 'Central de Atendimento',
          description: (
            <a
              className="hover:underline"
              href="https://ajuda.creditas.com/portal/pt-br/home"
              target="_blank"
              rel="noreferrer"
            >
              https://ajuda.creditas.com/portal/pt-br/home
            </a>
          ),
        },
      ],
    },
    link: 'https://www.creditas.com/',
  },
  {
    image: {
      src: '/assets/images/partners/bari.svg',
      alt: 'Banco Bari',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description:
            '4007 2628 ou 0800 602 7007, Atendimento 24h, 7 dias por semana, para dúvidas, informações e solicitações.',
        },
        {
          label: 'SAC',
          description:
            '0800 900 8181, Atendimento 24h, 7 dias por semana, para reclamações, sugestões, elogios e cancelamento.',
        },
      ],
    },
    link: 'https://bancobari.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/t-cash.jpg',
      alt: 'T-cash',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description: (
            <a
              href="https://www.t-cash.com.br/#modal"
              target="_blank"
              className="hover:underline"
            >
              https://www.t-cash.com.br/#modal
            </a>
          ),
        },
      ],
    },
    link: 'https://www.t-cash.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/banco_paulista.png',
      alt: 'Banco Paulista',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description: '0800 772 6116',
        },
        {
          label: 'SAC',
          description:
            '0800 930 1000, Atendimento ao Cliente (dúvidas, solicitações, sugestões e elogios.)',
        },
      ],
    },
    link: 'https://www.bancopaulista.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/creditu.webp',
      alt: 'Creditu',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento ao Cliente',
          description: '(11) 95586-0773',
        },
      ],
    },
    link: 'https://creditu.com/br/',
  },
  {
    image: {
      src: '/assets/images/partners/zilicred.svg',
      alt: 'ZiliCred',
    },
    info: {
      ouvidoria: [
        {
          label: 'Ouvidoria',
          description:
            '0800 591 7281, De segunda a sexta-feira, das 9h às 17h, exceto feriados.',
        },
      ],
    },
    link: 'https://www.zilicred.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/galleria-bank.png',
      alt: 'Galleria Bank',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description: '0800 970 0315',
        },
        {
          label: 'Email',
          description: 'ouvidoria@galleriabank.com.br',
        },
      ],
    },
    link: 'https://galleriabank.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/pontte.svg',
      alt: 'Pontte',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description: (
            <a
              href="https://pontte.com.br/contato/"
              target="_blank"
              className="hover:underline"
            >
              https://pontte.com.br/contato/
            </a>
          ),
        },
      ],
    },
    link: 'https://pontte.com.br/',
  },
  {
    image: {
      src: '/assets/images/partners/crediblue.svg',
      alt: 'Crediblue',
    },
    info: {
      ouvidoria: [
        {
          label: 'Atendimento',
          description:
            'Segunda a sexta, das 8h às 18h. atendimento a clientes e dúvidas gerais.  comercial@crediblue.com.br ',
        },
      ],
    },
    link: 'https://crediblue.com.br/home',
  },
];

type Partner = {
  image: {
    src: string;
    alt: string;
  };
  info: {
    ouvidoria: {
      label: string;
      description: string | React.ReactNode;
    }[];
  };
  link: string;
};

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      className={cn(
        'p-2 border-2 max-w-fit hover:border-2 flex-1 group cursor-pointer hover:shadow-lg min-w-44 lg:min-w-56 transition-all shadow-sm rounded-xl relative aspect-video duration-300 flex items-center justify-center',
        showInfo && `border-transparent hover:border-transparent`
      )}
      style={{ zIndex: 50 - index }}
    >
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="absolute flex bg-border z-10 text-gray-500 font-semibold top-0 left-0 p-1 px-4 rounded-br-xl rounded-tl-md"
      >
        <div className="text-xs flex items-center p-0 ">
          <ChevronRight size={12} />
          Info
        </div>
      </div>
      <a
        href={partner.link}
        target="_blank"
        className="flex items-center justify-center"
      >
        <div className="w-20">
          <img
            className="size-full"
            src={partner.image.src}
            alt={partner.image.alt}
          />
        </div>
        <ExternalLink className="absolute right-2 bottom-2 size-4 text-gray-200 transition-all duration-300 group-hover:text-gray-400" />
      </a>
      {showInfo && (
        <div
          className={`absolute w-full bg-white p-4 rounded-lg shadow-lg top-0 left-0 pt-8 border-4 cursor-default`}
        >
          <div className="flex flex-col gap-4">
            {partner.info.ouvidoria.map((info, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h6 className="font-semibold text-sm text-gray-500">
                  {info.label}
                </h6>
                <p className="text-gray-400 text-xs break-words">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type PartnersProps = {
  title: string;
  description?: string;
};

export function Partners({ title, description }: PartnersProps) {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef);
  return (
    <section
      ref={componentRef}
      className="container mx-auto lg:gap-44 gap-16"
      id="parceiros"
    >
      <div className="gap-16 flex flex-col">
        <div className="text-xl px-8 border-cyan-400 border-l-4 flex items-center w-full">
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
              <h2 className="text-2xl font-bold text-cpblue-400">{title}</h2>
            </div>
            {description && (
              <p className="text-gray-500 text-xs">{description}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <PartnerCard key={Math.random()} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
