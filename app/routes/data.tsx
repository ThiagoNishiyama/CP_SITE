import { ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { FaCar, FaRegLightbulb } from 'react-icons/fa6';
import { MdQuestionMark } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';

import {
  VantagensIcon,
  AirplaneIcon,
  BuildingIcon,
  CardIcon,
  CreditIcon,
  HomeIcon,
  SecurityIcon,
} from '../components/ui/icons';
import type { JSX } from 'react';

export type Paths =
  | 'consignado-publico'
  | 'consignado-federal'
  | 'consignado-privado'
  | 'consignado-inss'
  | 'financiamento-imovel'
  | 'home-equity'
  | 'credito-pessoal'
  | 'fgts'
  | 'financiamento-refinanciamento-veiculos'
  | 'cartao-consignado'
  | 'cartao-beneficio-consignado'
  | 'cartao-credcesta'
  | 'consorcio'
  | 'seguros'
  | 'painel-solar'
  | 'capital-de-giro'
  | 'operacoes-estruturadas'
  | 'imobiliario'
  | 'consignado';

type Image = {
  src: string;
  alt: string;
};

type VariantCard = {
  title: string;
  description: string | JSX.Element;
  image: Image;
  href: string;
  cta: string;
};

type SeeAlsoCard = {
  title: string;
  description: string;
  link: string;
};

type SeeAlso = {
  title: string;
  cards: SeeAlsoCard[];
};

export type Data = {
  section: string;
  hero: {
    title: string;
    description: string;
    links?: { title: string; link: string }[];
    image?: Image;
  };
  about?: {
    title: string;
    icon: JSX.Element;
    sections: {
      icon: JSX.Element;
      title: string;
      description?: string | JSX.Element;
      subSections?: {
        icon: JSX.Element;
        title: string;
        description: string;
      }[];
    }[];
  };
  advantages: {
    title: string;
    description: string;
    advantages: { title: string; description: string; icon: JSX.Element }[];
  };
  seeAlso: SeeAlso;
  variants?: {
    icon: JSX.Element;
    sub: string;
    title: string;
    description: string;
    cta: string;
    image: Image;
    cards: VariantCard[];
  };
};

export type PagesData = {
  [key in Paths]: Data;
};

const seeAlsoConsignado = [
  {
    title: 'Consignado Público',
    description: 'Conheça o consignado público e suas vantagens.',
    link: '/produto/consignado/consignado-publico',
  },
  {
    title: 'Consignado Federal',
    description: 'Conheça o consignado federal e suas vantagens.',
    link: '/produto/consignado/consignado-federal',
  },
  {
    title: 'Consignado Privado',
    description: 'Conheça o consignado privado e suas vantagens.',
    link: '/produto/consignado/consignado-privado',
  },
  {
    title: 'Consignado INSS',
    description: 'Conheça o consignado INSS e suas vantagens.',
    link: '/produto/consignado/consignado-inss',
  },
];

const seeAlsoImobiliario = [
  {
    title: 'Financiamento de Imóvel',
    description: 'Conheça o financiamento de imóvel e suas vantagens.',
    link: '/produto/imobiliario/financiamento-imovel',
  },
  {
    title: 'Home Equity',
    description: 'Conheça o home equity e suas vantagens.',
    link: '/produto/imobiliario/home-equity',
  },
  {
    title: 'Crédito Consignado',
    description: 'Conheça o crédito consignado e suas vantagens.',
    link: '/produto/consignado',
  },
  {
    title: 'Crédito Pessoal',
    description: 'Conheça o crédito pessoal e suas vantagens.',
    link: '/produto/credito/credito-pessoal',
  },
];

const seeAlsoCredito = [
  {
    title: 'Crédito Pessoal',
    description: 'Conheça o crédito pessoal e suas vantagens.',
    link: '/produto/credito/credito-pessoal',
  },
  {
    title: 'FGTS',
    description: 'Conheça o FGTS e suas vantagens.',
    link: '/produto/credito/fgts',
  },
  {
    title: 'Financiamento e Refinanciamento de Veículos',
    description:
      'Conheça o financiamento e refinanciamento de veículos e suas vantagens.',
    link: '/produto/credito/financiamento-refinanciamento-veiculos',
  },
  {
    title: 'Crédito Consignado',
    description: 'Conheça o crédito consignado e suas vantagens.',
    link: '/produto/consignado',
  },
];

const seeAlsoCartao = [
  {
    title: 'Cartão Consignado',
    description: 'Conheça o cartão consignado e suas vantagens.',
    link: '/produto/cartao/cartao-consignado',
  },
  {
    title: 'Cartão Benefício Consignado',
    description: 'Conheça o cartão benefício consignado e suas vantagens.',
    link: '/produto/cartao/cartao-beneficio-consignado',
  },
  {
    title: 'Cartão Credcesta',
    description: 'Conheça o cartão credcesta e suas vantagens.',
    link: '/produto/cartao/cartao-credcesta',
  },
  {
    title: 'Crédito Consignado',
    description: 'Conheça o crédito consignado e suas vantagens.',
    link: '/produto/consignado',
  },
];

const seeAlsoConsorcio = [
  {
    title: 'Consórcio',
    description: 'Conheça o consórcio e suas vantagens.',
    link: '/produto/consorcio',
  },
  {
    title: 'Seguros CPCréditos',
    description: 'Conheça os seguros CPCréditos e suas vantagens.',
    link: '/produto/seguros',
  },
  {
    title: 'Crédito Consignado',
    description: 'Conheça o crédito consignado e suas vantagens.',
    link: '/produto/consignado',
  },
  {
    title: 'Crédito Pessoal',
    description: 'Conheça o crédito pessoal e suas vantagens.',
    link: '/produto/credito/credito-pessoal',
  },
];

const seeAlsoOutros = [
  {
    title: 'Painel Solar',
    description: 'Conheça o painel solar e suas vantagens.',
    link: '/produto/outros/painel-solar',
  },
  {
    title: 'Capital de Giro',
    description: 'Conheça o capital de giro e suas vantagens.',
    link: '/produto/outros/capital-de-giro',
  },
  {
    title: 'Operações Estruturadas',
    description: 'Conheça as operações estruturadas e suas vantagens.',
    link: '/produto/outros/operacoes-estruturadas',
  },
  {
    title: 'Crédito Pessoal',
    description: 'Conheça o crédito pessoal e suas vantagens.',
    link: '/produto/credito/credito-pessoal',
  },
];

const heroLinks = [
  { title: 'O que é', link: '#oque-e' },
  { title: 'Vantagens', link: '#vantagens' },
  { title: 'Parceiros', link: '#parceiros' },
  {
    title: 'Seja parceiro',
    link: import.meta.env.VITE_LINKEDIN,
  },
];

const getSeeAlso = (list: SeeAlsoCard[], title: string): SeeAlso => {
  return {
    title: 'Veja também',
    cards: list.filter((card) => card.title !== title),
  };
};

export const pagesData: PagesData = {
  'consignado-publico': {
    section: 'consignado-publico',
    hero: {
      title: 'Consignado Público',
      description:
        'Crédito exclusivo para servidores públicos municipais, estaduais e federais, ativos e inativos, com condições especiais e vantagens diferenciadas.',
      image: {
        src: '/assets/images/products/consignado-publico.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <GiReceiveMoney className="size-8 text-white" />,
      title: 'Conheça o Consignado Público',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Consignado Público é uma linha de crédito exclusiva para
              servidores públicos municipais, estaduais e federais, sejam eles
              ativos ou inativos. Essa modalidade oferece condições
              diferenciadas, como:
              <ul className="list-disc pl-6 mt-2">
                <li>Taxas de juros reduzidas, proporcionando economia;</li>
                <li>
                  Prazos de pagamento longos, garantindo flexibilidade no
                  orçamento;
                </li>
                <li>
                  Desconto direto na folha de pagamento, trazendo mais
                  praticidade e segurança.
                </li>
              </ul>
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Municipais',
              description: `Funcionários públicos que atuam em órgãos administrados pelas prefeituras das cidades.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Estaduais',
              description: `Funcionários públicos que trabalham em órgãos administrados pelos governos dos estados.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Federais',
              description: `Funcionários públicos que exercem suas funções em órgãos administrados pelo governo federal.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Público: Principais Vantagens',
      description: 'Conheça as principais vantagens do consignado público.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description:
            'Aproveite uma das menores taxas do mercado, tornando o crédito mais acessível e econômico.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Prazos de pagamento longos',
          description:
            'Tenha mais flexibilidade financeira com prazos estendidos que se ajustam ao seu orçamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Desconto direto na folha de pagamento',
          description:
            'Garanta praticidade e segurança com parcelas descontadas automaticamente no contracheque.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Menos burocracia',
          description:
            'Ideal para quem precisa de crédito rápido, com menos burocracia e condições vantajosas.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoConsignado, 'Consignado Público'),
  },
  'consignado-federal': {
    section: 'consignado-federal',
    hero: {
      title: 'Consignado Federal',
      description:
        'Crédito exclusivo para servidores federais ativos, aposentados e pensionistas, com limite elevado, taxas competitivas e condições ajustadas. Ideal para realizar projetos, quitar dívidas ou atender necessidades emergenciais com economia e praticidade.',
      image: {
        src: '/assets/images/products/consignado-federal.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <GiReceiveMoney className="size-8 text-white" />,
      title: 'Conheça o Consignado Federal',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Consignado Federal é uma linha de crédito exclusiva para
              servidores federais ativos, aposentados e pensionistas. Oferece
              vantagens como limite de crédito elevado, taxas competitivas e
              condições ajustadas para garantir economia e praticidade.
              <br />
              Além disso, o Consignado Federal oferece:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Limite de crédito elevado, ajustado à margem consignável,
                  permitindo a contratação de valores maiores;
                </li>
                <li>
                  Taxas de juros competitivas, inferiores às modalidades
                  tradicionais, devido à segurança da cobrança direta;
                </li>
                <li>
                  Condições exclusivas e flexíveis, ideais para quem busca
                  crédito para realizar projetos pessoais, quitar dívidas ou
                  atender necessidades emergenciais.
                </li>
              </ul>
              É uma solução prática e confiável, que combina economia,
              facilidade e segurança.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores Ativos',
              description: `Funcionários públicos federais que ocupam cargos em órgãos administrados pelo governo federal, com vínculo estável e margem consignável disponível.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Aposentados',
              description: `Funcionários públicos federais aposentados que prestaram serviços em órgãos administrados pelo governo federal e possuem renda garantida pela aposentadoria.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pensionistas',
              description: `Pensionistas que recebem benefícios oriundos de servidores públicos federais falecidos, garantindo margem consignável para acesso ao crédito.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Federal: Principais Vantagens',
      description: 'Conheça as principais vantagens do consignado federal.',
      advantages: [
        {
          title: 'Condições exclusivas',
          description:
            'Vantagens exclusivas para servidores federais, incluindo limite de crédito elevado e flexibilidade de pagamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Taxas competitivas',
          description:
            'Taxas ajustadas para garantir economia e viabilidade financeira ao contratante.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Prático e acessível',
          description:
            'Uma solução simples e acessível para financiar projetos pessoais, quitar dívidas ou atender necessidades emergenciais com tranquilidade.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoConsignado, 'Consignado Federal'),
  },
  'consignado-privado': {
    section: 'consignado-privado',
    hero: {
      title: 'Consignado Privado',
      description:
        'Crédito exclusivo para colaboradores de empresas privadas conveniadas, com taxas reduzidas, desconto em folha e fácil acesso, mesmo para quem possui outras pendências financeiras.',
      image: {
        src: '/assets/images/products/consignado-privado.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <GiReceiveMoney className="size-8 text-white" />,
      title: 'Conheça o Consignado Privado',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Consignado Privado é uma modalidade de crédito exclusiva para
              colaboradores de empresas privadas conveniadas. Ele oferece
              benefícios especiais para o trabalhador do setor privado, como:
              <ul className="list-disc pl-6 mt-2">
                <li>Taxas de juros reduzidas, garantindo economia;</li>
                <li>
                  Parcelas descontadas diretamente na folha de pagamento,
                  proporcionando praticidade e segurança;
                </li>
                <li>
                  Acessibilidade, mesmo para quem possui outras pendências
                  financeiras, tornando o crédito rápido e descomplicado.
                </li>
              </ul>
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Colaboradores de Empresas Privadas',
              description: `Trabalhadores do setor privado que atuam em empresas com convênio ativo para oferecer essa linha de crédito.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado Privado: Principais Vantagens',
      description: 'Conheça as principais vantagens do consignado privado.',
      advantages: [
        {
          title: 'Taxas reduzidas',
          description:
            'Condições adaptadas ao perfil do cliente, com taxas mais baixas e vantajosas para o trabalhador do setor privado.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Parcelas descontadas na folha',
          description:
            'Praticidade e segurança garantidas com o desconto automático das parcelas diretamente na folha de pagamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Acessibilidade',
          description:
            'Uma solução rápida e acessível, mesmo para quem possui outras pendências financeiras, sem complicações.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoConsignado, 'Consignado Privado'),
  },
  'consignado-inss': {
    section: 'consignado-inss',
    hero: {
      title: 'Consignado INSS',
      description:
        'Crédito exclusivo para aposentados e pensionistas do INSS, com taxas reduzidas, desconto automático no benefício e opções de renegociação.',
      image: {
        src: '/assets/images/products/consignado-inss.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <GiReceiveMoney className="size-8 text-white" />,
      title: 'Conheça o Consignado INSS',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div className="flex flex-col">
              O Consignado INSS é uma modalidade de crédito destinada a
              aposentados e pensionistas do Instituto Nacional do Seguro Social
              (INSS). Ele oferece benefícios exclusivos, como:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Descontos automáticos no benefício mensal, garantindo
                  praticidade e segurança;
                </li>
                <li>
                  Taxas de juros controladas pelo governo, proporcionando
                  economia;
                </li>
                <li>
                  Opção de renegociação ou refinanciamento de contratos
                  existentes, se necessário.
                </li>
              </ul>
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Aposentados',
              description: `Pessoas que contribuíram para a Previdência Social e recebem aposentadoria.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pensionistas',
              description: `Pessoas que recebem pensão por falecimento de um segurado do INSS.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consignado INSS: principais vantagens',
      description: 'Conheça as principais vantagens do consignado INSS.',
      advantages: [
        {
          title: 'Descontos automáticos',
          description:
            'Garanta tranquilidade com parcelas descontadas automaticamente do benefício mensal, sem preocupações adicionais.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Taxas de juros controladas',
          description:
            'Aproveite taxas reguladas pelo governo, garantindo economia e segurança em seus pagamentos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Renegociação ou refinanciamento',
          description:
            'Conte com a flexibilidade de renegociar ou refinanciar contratos existentes, caso necessário.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Segurança e menor custo',
          description:
            'Uma solução confiável e acessível para quem busca crédito com praticidade e economia.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoConsignado, 'Consignado INSS'),
  },
  'financiamento-imovel': {
    section: 'financiamento-imovel',
    hero: {
      title: 'Financiamento de Imóvel',
      description:
        'Realize o sonho da casa própria ou invista em imóveis com facilidade. Descubra as vantagens que essa modalidade de financiamento oferece.',
      image: {
        src: '/assets/images/products/financiamento-de-imovel.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <HomeIcon className="size-8" fill="white" />,
      title: 'Conheça o Financiamento de Imóvel',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Financiamento de Imóvel é a solução ideal para quem deseja
              realizar o sonho da casa própria ou investir em imóveis. Ele
              oferece:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Condições flexíveis de pagamento, com prazos longos e parcelas
                  que cabem no orçamento;
                </li>
                <li>
                  Taxas de juros competitivas, ajustadas ao seu perfil
                  financeiro;
                </li>
                <li>
                  A possibilidade de financiar imóveis residenciais, comerciais
                  ou terrenos, de acordo com suas necessidades.
                </li>
              </ul>
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pessoas Físicas',
              description: `Perfeito para quem busca sair do aluguel ou expandir o patrimônio com segurança e praticidade.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Financiamento de Imóvel: Principais Vantagens',
      description:
        'Conheça as principais vantagens do financiamento de imóvel.',
      advantages: [
        {
          title: 'Condições flexíveis de pagamento',
          description:
            'Aproveite prazos longos e parcelas acessíveis que facilitam a aquisição do imóvel desejado.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Taxas de juros competitivas',
          description:
            'Taxas ajustadas ao seu perfil financeiro, garantindo economia e segurança no financiamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Diversidade de opções de imóveis',
          description:
            'Possibilidade de financiar imóveis residenciais, comerciais ou terrenos, atendendo diferentes necessidades e objetivos de investimento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoImobiliario, 'Financiamento de Imóvel'),
  },
  'home-equity': {
    section: 'home-equity',
    hero: {
      title: 'Home Equity / Crédito com Garantia de Imóvel',
      description:
        'Converta o valor do seu imóvel em crédito com o Home Equity, a solução ideal para quem busca recursos com condições exclusivas e flexíveis.',
      image: {
        src: '/assets/images/products/home-equity.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <HomeIcon className="size-8" fill="white" />,
      title: 'Conheça o Home Equity',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Home Equity é uma modalidade de crédito que permite transformar
              o valor do seu imóvel em recursos financeiros. Com essa solução,
              você acessa vantagens exclusivas, como:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Taxas de juros reduzidas, mais baixas do que as de empréstimos
                  pessoais;
                </li>
                <li>
                  Altos valores de crédito, com liberação de até 60% do valor do
                  imóvel;
                </li>
                <li>
                  Flexibilidade de uso, permitindo aplicar o recurso em
                  diferentes objetivos, como quitar dívidas, investir em
                  negócios, reformar sua casa, entre outros.
                </li>
              </ul>
              Ao utilizar o imóvel como garantia, você mantém a propriedade do
              bem e acessa crédito seguro, com condições diferenciadas e prazos
              ajustados às suas necessidades.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pessoas Físicas',
              description: `Ideal para quem deseja aproveitar o patrimônio de forma segura e prática, transformando imóveis em oportunidades de investimento e liquidez.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Home Equity: Principais Vantagens',
      description: 'Conheça as principais vantagens do Home Equity.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description: 'Inferiores às de empréstimos pessoais.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Altos valores de crédito',
          description: 'Liberação de até 60% do valor do imóvel.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Flexibilidade de uso',
          description: 'Utilize o recurso em diversos objetivos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoImobiliario, 'Home Equity'),
  },
  // Crédito Pessoal
  'credito-pessoal': {
    section: 'credito-pessoal',
    hero: {
      title: 'Crédito Pessoal',
      description:
        'A solução ideal para quem busca recursos financeiros rápidos, com praticidade e sem complicações.',
      image: {
        src: '/assets/images/products/credito-pessoal.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <CreditIcon className="size-8" fill="white" />,
      title: 'Conheça o Crédito Pessoal',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Crédito Pessoal é a solução ideal para quem precisa de recursos
              rápidos e descomplicados. Com ele, você conta com:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Liberação ágil, sem necessidade de garantias ou burocracia;
                </li>
                <li>
                  Flexibilidade no uso, para emergências, projetos pessoais ou
                  investimentos;
                </li>
                <li>
                  Parcelamento ajustável, com condições que cabem no seu
                  orçamento.
                </li>
              </ul>
              Uma escolha prática e rápida para quem busca soluções financeiras
              com facilidade.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pessoas Físicas',
              description: `Indivíduos que buscam soluções financeiras rápidas e práticas para emergências, projetos pessoais ou investimentos.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Quem precisa de crédito emergencial',
              description: `Indivídios que precisam de recursos financeiros rápidos para despesas imprevistas.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Indivíduos sem bens para garantia',
              description: `Pessoas que buscam um processo simples e acessível para obter crédito.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Crédito Pessoal: principais vantagens',
      description: 'Conheça as principais vantagens do Crédito Pessoal.',
      advantages: [
        {
          title: 'Liberação ágil',
          description: 'Sem necessidade de garantias.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Flexibilidade no uso',
          description: 'Utilize o crédito como desejar.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Parcelamento ajustável',
          description: 'Condições que cabem no seu orçamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoCredito, 'Crédito Pessoal'),
  },
  // FGTS – Saque-Aniversário
  fgts: {
    section: 'fgts',
    hero: {
      title: 'FGTS – Saque-Aniversário',
      description:
        'Antecipe o saldo do seu FGTS – Saque-Aniversário e tenha dinheiro imediato para realizar seus planos.',
      image: {
        src: '/assets/images/products/fgts.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <CreditIcon className="size-8" fill="white" />,
      title: 'Conheça o FGTS – Saque-Aniversário',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              Antecipe o valor disponível no seu FGTS – Saque-Aniversário e
              transforme seu benefício em dinheiro imediato.
              <br />
              Vantagens:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Taxas reduzidas, devido à segurança do crédito vinculado ao
                  FGTS;
                </li>
                <li>Pagamento automático, sem impacto no orçamento mensal;</li>
                <li>Processo 100% digital, rápido e sem burocracia.</li>
              </ul>
              Uma alternativa econômica e prática para quem precisa de dinheiro
              sem comprometer o salário.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Trabalhadores com FGTS – Saque-Aniversário',
              description: `Pessoas que optaram por receber o Saque-Aniversário do FGTS e desejam antecipar o valor disponível.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'FGTS – Saque-Aniversário: Principais Vantagens',
      description:
        'Conheça as principais vantagens do FGTS – Saque-Aniversário.',
      advantages: [
        {
          title: 'Taxas reduzidas',
          description:
            'Economize com taxas menores, garantidas pela segurança do crédito vinculado ao FGTS.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Pagamento automático',
          description:
            'Parcelas descontadas diretamente do saldo do FGTS, sem impacto no seu orçamento mensal.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Processo 100% digital',
          description: 'Acesso rápido e sem burocracia, com aprovação online.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoCredito, 'FGTS'),
  },

  // Financiamento e Refinanciamento de Veículos
  'financiamento-refinanciamento-veiculos': {
    section: 'financiamento-refinanciamento-veiculos',
    hero: {
      title: 'Financiamento e Refinanciamento de Veículos',
      description:
        'Com o Financiamento, conquiste o carro próprio com condições personalizadas. No Refinanciamento, use seu carro quitado como garantia e acesse crédito com vantagens exclusivas.',
      image: {
        src: '/assets/images/products/financionamento.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <FaCar className="size-8 text-white" />,
      title: 'Conheça o Financiamento e Refinanciamento de Veículos',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Financiamento de Veículos:</strong> Realize o sonho do
                  carro próprio com condições personalizadas.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Taxas atrativas e prazos de pagamento ajustáveis;</li>
                    <li>
                      Financiamento para carros novos ou usados, com ampla
                      aprovação de crédito;
                    </li>
                    <li>
                      Parcelas acessíveis, garantindo planejamento financeiro.
                    </li>
                  </ul>
                  Uma escolha ideal para adquirir um veículo de forma segura e
                  acessível.
                </li>
                <li>
                  <strong>Refinanciamento de Veículos:</strong> Utilize seu
                  carro quitado como garantia para obter crédito com vantagens
                  exclusivas.
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Taxas de juros reduzidas, mais baixas que empréstimos
                      pessoais;
                    </li>
                    <li>Liberação de até 90% do valor do veículo;</li>
                    <li>Permaneça com seu carro enquanto utiliza o crédito.</li>
                  </ul>
                  Uma solução prática e econômica para liberar recursos em
                  momentos de necessidade ou oportunidade.
                </li>
              </ul>
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Financiamento de Veículos',
              description: `Disponível para pessoas físicas que desejam adquirir carros novos ou usados com aprovação de crédito.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Refinanciamento de Veículos',
              description: `Exclusivo para proprietários de veículos quitados que buscam crédito utilizando o carro como garantia.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title:
        'Financiamento e Refinanciamento de Veículos: Principais Vantagens',
      description:
        'Conheça as principais vantagens do Financiamento e Refinanciamento de Veículos.',
      advantages: [
        {
          title: 'Taxas atrativas e prazos ajustáveis',
          description:
            'Condições flexíveis para financiar ou refinanciar com segurança.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Financiamento para carros novos ou usados',
          description:
            'Aproveite ampla aprovação de crédito para adquirir o veículo desejado.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Parcelas que cabem no seu bolso',
          description:
            'Planeje suas finanças com pagamentos acessíveis e ajustados ao seu orçamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Taxas de juros reduzidas',
          description:
            'No refinanciamento, economize com taxas inferiores às de empréstimos pessoais.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Liberação de até 90% do valor do veículo',
          description:
            'Obtenha crédito enquanto continua utilizando seu carro quitado.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(
      seeAlsoCredito,
      'Financiamento e Refinanciamento de Veículos'
    ),
  },

  // Cartão Consignado
  'cartao-consignado': {
    section: 'cartao-consignado',
    hero: {
      title: 'Cartão Consignado',
      description:
        'A opção perfeita para quem busca crédito rotativo com taxas reduzidas e benefícios exclusivos.',
      image: {
        src: '/assets/images/products/cartao-consignado.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <CardIcon className="size-8" fill="white" />,
      title: 'Conheça o Cartão Consignado',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <article>
              O Cartão Consignado é a solução ideal para quem busca crédito
              rotativo com benefícios exclusivos:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Sem consulta ao SPC/Serasa</strong>, garantindo maior
                  facilidade de aprovação;
                </li>
                <li>
                  <strong>Parcelas descontadas automaticamente</strong> na folha
                  de pagamento ou benefício, evitando atrasos;
                </li>
                <li>
                  <strong>Taxas de juros reduzidas</strong>, inferiores às dos
                  cartões convencionais;
                </li>
                <li>
                  <strong>Limite elevado</strong>, oferecendo mais poder de
                  compra e flexibilidade financeira.
                </li>
              </ul>
              Uma escolha prática e econômica para quem deseja aliar crédito
              acessível com controle financeiro.
            </article>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores públicos.',
              description: `Servidores públicos municipais, estaduais e federais.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Aposentados e pensionistas',
              description: `Aposentados e pensionistas do INSS que possuem margem consignável disponível.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Cartão Consignado: Principais Vantagens',
      description: 'Conheça as principais vantagens do Cartão Consignado.',
      advantages: [
        {
          title: 'Sem consulta ao SPC/Serasa',
          description:
            'Aprovação facilitada, mesmo para quem possui restrições no CPF.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Parcelas descontadas automaticamente',
          description:
            'Pagamentos realizados diretamente na folha de pagamento ou benefício, sem risco de atrasos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Taxas de juros reduzidas',
          description:
            'Economize com taxas menores do que as cobradas por cartões de crédito tradicionais.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Limite elevado',
          description:
            'Mais poder de compra e flexibilidade financeira para o seu dia a dia.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoCartao, 'Cartão Consignado'),
  },

  // Cartão Benefício Consignado
  'cartao-beneficio-consignado': {
    section: 'cartao-beneficio-consignado',
    hero: {
      title: 'Cartão Benefício Consignado',
      description:
        'Exclusivo para aposentados e pensionistas do INSS, com benefícios e condições especiais pensados para atender esse público.',
      image: {
        src: '/assets/images/products/cartao-beneficio-consignado.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <CardIcon className="size-8" fill="white" />,
      title: 'Conheça o Cartão Benefício Consignado',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Cartão Benefício Consignado é exclusivo para aposentados e
              pensionistas do INSS, oferecendo benefícios únicos:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Sem anuidade</strong>, garantindo mais economia;
                </li>
                <li>
                  <strong>Descontos automáticos</strong> no benefício mensal,
                  facilitando o pagamento;
                </li>
                <li>
                  <strong>Uso amplo</strong>, permitindo saques em dinheiro e
                  compras à vista ou parceladas.
                </li>
              </ul>
              Uma solução prática e acessível para quem busca um cartão com
              vantagens exclusivas e maior controle financeiro.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Aposentados e pensionistas.',
              description: `Aposentados e pensionistas do INSS com margem consignável disponível para contratação.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Cartão Benefício Consignado: Principais Vantagens',
      description:
        'Conheça as principais vantagens do Cartão Benefício Consignado.',
      advantages: [
        {
          title: 'Sem anuidade',
          description: 'Economize com um cartão isento de taxas anuais.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Descontos automáticos',
          description:
            'Pagamentos realizados diretamente no benefício mensal, com praticidade e segurança.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Uso amplo',
          description:
            'Acesse saques em dinheiro e faça compras à vista ou parceladas com facilidade.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoCartao, 'Cartão Benefício Consignado'),
  },

  // Cartão Credcesta
  'cartao-credcesta': {
    section: 'cartao-credcesta',
    hero: {
      title: 'Cartão Credcesta',
      description:
        'Benefícios exclusivos para servidores públicos e pensionistas, com condições especiais e praticidade.',
      image: {
        src: '/assets/images/products/cartao-credcesta.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <CardIcon className="size-8" fill="white" />,
      title: 'Conheça o Cartão Credcesta',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Cartão Credcesta é uma solução prática e acessível, com
              benefícios exclusivos para servidores públicos e pensionistas. Ele
              oferece:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Taxas competitivas</strong>, ajustadas às condições do
                  público atendido;
                </li>
                <li>
                  <strong>Ampla aceitação</strong>, em milhares de
                  estabelecimentos para compras e serviços;
                </li>
                <li>
                  <strong>Saques emergenciais e parcelamento flexível</strong>,
                  para maior conveniência;
                </li>
                <li>
                  <strong>Desconto direto na folha de pagamento</strong>,
                  garantindo mais comodidade e segurança.
                </li>
              </ul>
              Uma alternativa vantajosa para quem busca crédito com controle
              simplificado.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Servidores públicos.',
              description: `Servidores públicos municipais, estaduais e federais com margem consignável disponível.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pensionistas',
              description: `Pensionistas que recebem benefícios com possibilidade de consignação.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Cartão Credcesta: Principais Vantagens',
      description: 'Conheça as principais vantagens do Cartão Credcesta.',
      advantages: [
        {
          title: 'Taxas competitivas',
          description:
            'Condições ajustadas às necessidades de servidores públicos e pensionistas.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Aceitação ampla',
          description:
            'Utilize o cartão em milhares de estabelecimentos para compras e serviços.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Saques emergenciais e parcelamento flexível',
          description:
            'Tenha conveniência e segurança em momentos de necessidade.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Desconto direto na folha de pagamento',
          description:
            'Pagamentos automáticos que oferecem praticidade e tranquilidade.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoCartao, 'Cartão Credcesta'),
  },

  // Consórcio
  consorcio: {
    section: 'consorcio',
    hero: {
      title: 'Consórcio',
      description:
        'A maneira inteligente e econômica de conquistar seus sonhos, com parcelas acessíveis e sem juros.',
      image: {
        src: '/assets/images/products/consorcio.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <AirplaneIcon className="size-8" fill="white" />,
      title: 'Conheça o Consórcio',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              O Consórcio é uma alternativa inteligente e econômica para
              realizar seus sonhos, sem juros e com condições acessíveis.
              <br />
              Benefícios:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Taxas reduzidas</strong>, apenas com cobrança de taxa
                  de administração, sem <strong>juros</strong>;
                </li>
                <li>
                  <strong>Planejamento financeiro</strong>, ideal para adquirir
                  <strong> imóveis, veículos</strong> ou outros bens de forma
                  programada;
                </li>
                <li>
                  <strong>Flexibilidade nas parcelas</strong>, com opções que se
                  ajustam ao seu <strong>orçamento</strong>;
                </li>
                <li>
                  Participação em <strong>sorteios mensais</strong> e
                  possibilidade de antecipação por <strong>lance</strong>.
                </li>
              </ul>
              Uma solução prática e organizada para quem deseja investir no
              futuro, com tranquilidade e sem pressa.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pessoas físicas ou jurídicas',
              description: `Pessoas físicas ou jurídicas que desejam adquirir bens ou serviços de forma planejada e econômica.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Quem busca uma alternativa sem juros',
              description: `Quem busca uma alternativa sem juros para comprar imóveis, veículos ou outros bens.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Quem valoriza flexibilidade no orçamento',
              description: `Quem valoriza flexibilidade no orçamento e a oportunidade de antecipar a contemplação por lances.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Consórcio: Principais Vantagens',
      description: 'Conheça as principais vantagens do Consórcio.',
      advantages: [
        {
          title: 'Taxas reduzidas',
          description: 'Apenas a cobrança de taxa de administração, sem juros.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Planejamento financeiro',
          description:
            'Ideal para adquirir imóveis, veículos ou outros bens de forma programada.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Flexibilidade nas parcelas',
          description: 'Com opções que se ajustam ao seu orçamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Participação em sorteios mensais',
          description: 'E possibilidade de antecipação por lance.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoConsorcio, 'Consórcio'),
  },

  // Seguros CPCréditos
  seguros: {
    section: 'seguros',
    hero: {
      title: 'Seguros CPCréditos',
      description:
        'Proteção personalizada para o que mais importa, com condições feitas sob medida para você.',
      image: {
        src: '/assets/images/products/seguros.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <SecurityIcon className="size-8" />,
      title: 'Conheça os Seguros CPCréditos',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              Os Seguros CPCréditos oferecem proteção personalizada para o que
              realmente importa. Seja qual for sua necessidade, contamos com as
              melhores opções do mercado:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Seguro de Vida:</strong> Segurança financeira para
                  você e sua família em momentos imprevistos;
                </li>
                <li>
                  <strong>Seguro Residencial:</strong> Proteção completa para
                  seu imóvel contra{' '}
                  <strong>danos, furtos e outros riscos;</strong>
                </li>
                <li>
                  <strong>Seguro Veicular:</strong> Cobertura para o seu carro,
                  com <strong>assistência 24 horas</strong> e vantagens
                  exclusivas.
                </li>
              </ul>
              Com planos adaptáveis e atendimento ágil, garantimos tranquilidade
              e confiança. Com os Seguros CPCréditos, você protege o que é
              valioso e mantém sua tranquilidade em qualquer situação.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Pessoas que desejam proteger bens',
              description: `Pessoas que desejam proteger bens como casa, carro ou patrimônio.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Quem busca segurança financeira',
              description: `Quem busca segurança financeira e cobertura em situações inesperadas.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Indivíduos que valorizam personalização',
              description: `Indivíduos que valorizam personalização e eficiência em serviços de seguro.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Seguros CPCréditos: Principais Vantagens',
      description: 'Conheça as principais vantagens dos Seguros CPCréditos.',
      advantages: [
        {
          title: 'Seguro de Vida',
          description:
            'Segurança financeira para você e sua família em momentos imprevistos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Seguro Residencial',
          description:
            'Proteção completa para o seu imóvel contra danos, furtos e outros riscos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Seguro Veicular',
          description:
            'Cobertura completa para o seu carro, com assistência 24 horas e vantagens exclusivas.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Planos adaptáveis',
          description:
            'E atendimento ágil, garantindo tranquilidade e confiança em qualquer situação.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoConsorcio, 'Seguros CPCréditos'),
  },
  // Painel Solar
  'painel-solar': {
    section: 'painel-solar',
    hero: {
      title: 'Painel Solar',
      description:
        'Invista em energia sustentável com nosso financiamento para painéis solares, combinando economia e responsabilidade ambiental para reduzir custos e proteger o planeta.',
      image: {
        src: '/assets/images/products/painel-solar.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <BuildingIcon className="size-8" fill="white" />,
      title: 'Conheça o Painel Solar',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              Invista em energia sustentável com nosso financiamento para
              Painéis Solares, uma solução econômica e ecológica para reduzir
              custos e cuidar do planeta.
              <br />
              Benefícios:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Taxas de juros competitivas</strong>, facilitando o
                  acesso à tecnologia;
                </li>
                <li>
                  <strong>Financiamento de sistemas completos</strong> para
                  residências, empresas ou propriedades rurais;
                </li>
                <li>
                  <strong>Redução imediata na conta de energia</strong>, com
                  retorno do investimento em poucos anos;
                </li>
                <li>
                  <strong>Contribuição para a sustentabilidade</strong>,
                  utilizando energia limpa e renovável.
                </li>
              </ul>
              Uma escolha perfeita para quem deseja economizar e adotar soluções
              sustentáveis no dia a dia.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Proprietários residenciais',
              description: `Proprietários residenciais que querem reduzir custos com energia e contribuir para o meio ambiente.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Empresas',
              description: `Empresas que buscam eficiência energética e economia sustentável.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Propriedades rurais',
              description: `Propriedades rurais que desejam aproveitar soluções renováveis para atender às suas demandas de energia.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Painel Solar: Principais Vantagens',
      description: 'Conheça as principais vantagens do Painel Solar.',
      advantages: [
        {
          title: 'Taxas de juros competitivas',
          description: 'Facilitam o acesso à tecnologia de energia solar.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Financiamento de sistemas completos',
          description:
            'Disponível para residências, empresas ou propriedades rurais.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Redução imediata na conta de energia',
          description:
            'Economize já, com retorno do investimento em poucos anos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Contribuição para a sustentabilidade',
          description:
            'Adote energia limpa e renovável para cuidar do planeta.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoOutros, 'Painel Solar'),
  },

  // Capital de Giro
  'capital-de-giro': {
    section: 'capital-de-giro',
    hero: {
      title: 'Capital de Giro',
      description:
        'Fortaleça seu negócio com nosso Crédito para Capital de Giro, uma solução prática para equilibrar o fluxo de caixa e impulsionar suas operações.',
      image: {
        src: '/assets/images/products/capital-de-giro.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <BuildingIcon className="size-8" fill="white" />,
      title: 'Conheça o Capital de Giro',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              Apoie o crescimento do seu negócio com nosso Crédito para Capital
              de Giro, uma linha de crédito essencial para equilibrar o fluxo de
              caixa e impulsionar operações.
              <br />
              Benefícios:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Taxas ajustadas</strong> ao perfil da sua empresa, com
                  condições flexíveis;
                </li>
                <li>
                  <strong>Liberação rápida</strong>, para atender necessidades
                  imediatas, como{' '}
                  <strong>
                    compra de estoque, pagamento de fornecedores ou folha
                    salarial
                  </strong>
                  ;
                </li>
                <li>
                  <strong>Parcelamento adaptado</strong> à realidade financeira
                  do negócio;
                </li>
                <li>
                  Disponível para{' '}
                  <strong>empresas de diferentes portes e setores.</strong>
                </li>
              </ul>
              Uma solução prática para manter sua empresa saudável e em
              crescimento.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Empresas de pequeno, médio e grande porte',
              description: `Empresas de pequeno, médio e grande porte que precisam de suporte financeiro para operações diárias.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Empreendedores',
              description: `Empreendedores que buscam equilibrar o fluxo de caixa em períodos de alta ou baixa demanda.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Negócios de diversos setores',
              description: `Negócios de diversos setores que desejam fortalecer suas operações e garantir a continuidade.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Capital de Giro: Principais Vantagens',
      description: 'Conheça as principais vantagens do Capital de Giro.',
      advantages: [
        {
          title: 'Taxas ajustadas ao perfil da sua empresa',
          description:
            'Condições flexíveis que atendem às necessidades específicas do seu negócio.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Liberação rápida',
          description:
            'Atenda demandas imediatas, como pagamento de fornecedores e compra de estoque.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Parcelamento adaptado',
          description:
            'Condições alinhadas à realidade financeira do seu negócio.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Disponível para empresas de diferentes portes e setores',
          description:
            'Uma solução acessível para negócios de todos os tamanhos e segmentos.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoOutros, 'Capital de Giro'),
  },

  // Operações Estruturadas
  'operacoes-estruturadas': {
    section: 'operacoes-estruturadas',
    hero: {
      title: 'Operações Estruturadas',
      description:
        'Soluções financeiras robustas e personalizadas para projetos complexos, atendendo demandas específicas com estratégias sob medida.',
      image: {
        src: '/assets/images/products/operacoes-estruturadas.png',
        alt: 'Seguros CPCréditos',
      },
      links: heroLinks,
    },
    about: {
      icon: <BuildingIcon className="size-8" fill="white" />,
      title: 'Conheça as Operações Estruturadas',
      sections: [
        {
          icon: <MdQuestionMark className="size-8  text-cptext-blue" />,
          title: 'O que é?',
          description: (
            <div>
              Para projetos de maior complexidade, nossas Operações Estruturadas
              oferecem soluções financeiras personalizadas para atender demandas
              específicas.
              <br />
              Benefícios:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Planejamento estratégico</strong>, com análise
                  detalhada das necessidades do cliente;
                </li>
                <li>
                  <strong>Estruturação de crédito</strong>, garantias e prazos
                  customizados;
                </li>
                <li>
                  <strong>Apoio especializado</strong> para fusões, aquisições,
                  investimentos em infraestrutura ou expansão de negócios;
                </li>
                <li>
                  <strong>Soluções sob medida</strong> para empresas de médio e
                  grande porte.
                </li>
              </ul>
              Com as Operações Estruturadas, sua empresa conta com um apoio
              financeiro robusto para projetos estratégicos e de alto impacto.
            </div>
          ),
        },
        {
          icon: <FaRegLightbulb className="size-8 text-cptext-blue" />,
          title: 'Para quem é?',
          subSections: [
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Empresas de médio e grande porte',
              description: `Empresas de médio e grande porte que precisam de suporte financeiro para projetos complexos.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title:
                'Negócios que demandam planejamento financeiro estratégico',
              description: `Negócios que demandam planejamento financeiro estratégico para expansão ou reestruturação.`,
            },
            {
              icon: <ArrowRight className="size-6 text-cptext-cyan" />,
              title: 'Empresas em processo de fusão, aquisição ou investimento',
              description: `Empresas em processo de fusão, aquisição ou investimento em infraestrutura e outros projetos de grande escala.`,
            },
          ],
        },
      ],
    },
    advantages: {
      title: 'Operações Estruturadas: Principais Vantagens',
      description:
        'Conheça as principais vantagens das Operações Estruturadas.',
      advantages: [
        {
          title: 'Planejamento estratégico',
          description:
            'Análise detalhada e personalizada das necessidades da sua empresa.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Estruturação de crédito',
          description:
            'Garantias e prazos ajustados às demandas específicas do projeto.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Apoio especializado',
          description:
            'Soluções financeiras para fusões, aquisições, investimentos em infraestrutura e expansão de negócios.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Soluções sob medida',
          description:
            'Desenvolvidas especialmente para empresas de médio e grande porte.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoOutros, 'Operações Estruturadas'),
  },

  imobiliario: {
    section: 'imobiliario',
    hero: {
      title: 'Crédito Imobiliário',
      description:
        'Descubra as melhores soluções para adquirir imóveis ou transformar o valor do seu patrimônio em crédito com condições exclusivas e flexíveis.',
      image: {
        src: '/assets/images/products/financiamento-de-imovel.png',
        alt: 'Crédito Imobiliário',
      },
      links: heroLinks,
    },
    variants: {
      icon: <BriefcaseBusiness className="size-8 text-cptext-cyan" />,
      sub: '/produto',
      title: 'Crédito Imobiliário',
      description:
        'Descubra as melhores soluções para adquirir imóveis ou transformar o valor do seu patrimônio em crédito com condições exclusivas e flexíveis.',
      cta: 'Saiba mais',
      image: {
        src: '/assets/images/products/imobiliario.png',
        alt: 'Crédito Imobiliário',
      },
      cards: [
        {
          title: 'Financiamento de Imóvel',
          description: (
            <article className="flex flex-col gap-2">
              Conquiste o imóvel dos seus sonhos com o Financiamento de Imóvel.
              Essa solução oferece:
              <ul className="list-disc list-inside">
                <li>
                  Condições flexíveis de pagamento, com prazos longos e parcelas
                  acessíveis;
                </li>
                <li>
                  Taxas de juros competitivas, ajustadas ao seu perfil
                  financeiro;
                </li>
                <li>
                  Possibilidade de financiar imóveis residenciais, comerciais ou
                  terrenos.
                </li>
              </ul>
              A escolha perfeita para sair do aluguel ou investir no futuro com
              segurança.
              <br />
            </article>
          ),
          image: {
            src: '/assets/images/imobiliario.png',
            alt: 'Financiamento de Imóvel',
          },
          href: '/produto/imobiliario/financiamento-imovel',
          cta: 'Saiba mais sobre Financiamento de Imóvel',
        },
        {
          title: 'Home Equity / Crédito com Garantia de Imóvel',
          description: (
            <article className="flex flex-col gap-2">
              Transforme o valor do seu imóvel em crédito com o Home Equity, uma
              alternativa prática e vantajosa. Ele oferece:
              <ul className="list-disc list-inside">
                <li>
                  Taxas de juros reduzidas, mais baixas do que as de empréstimos
                  pessoais;
                </li>
                <li>Liberação de até 60% do valor do imóvel como crédito;</li>
                <li>
                  Flexibilidade para utilizar os recursos em diversos objetivos,
                  como quitar dívidas, investir em negócios ou realizar
                  reformas.
                </li>
              </ul>
              Uma solução segura para acessar crédito com condições
              diferenciadas e manter a propriedade do seu imóvel.
              <br />
            </article>
          ),
          image: {
            src: '/assets/images/products/home-equity.png',
            alt: 'Home Equity',
          },
          href: '/produto/imobiliario/home-equity',
          cta: 'Saiba mais sobre Home Equity',
        },
      ],
    },
    advantages: {
      title: 'Crédito Imobiliário: Principais Vantagens',
      description: 'Conheça as principais vantagens do crédito imobiliário.',
      advantages: [
        {
          title: 'Condições flexíveis de pagamento',
          description:
            'Parcelas acessíveis e prazos longos que se ajustam ao seu planejamento financeiro.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Taxas de juros competitivas',
          description:
            'Economize com taxas ajustadas ao seu perfil e condições exclusivas para crédito imobiliário.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Diversidade de opções',
          description:
            'Financie imóveis residenciais, comerciais ou terrenos, ou transforme o valor do seu imóvel em crédito.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Segurança e praticidade',
          description:
            'Modalidades de crédito seguras, com recursos disponíveis para diferentes objetivos e fácil aprovação.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: getSeeAlso(seeAlsoImobiliario, ' '),
  },
  consignado: {
    section: 'consignado',
    hero: {
      title: 'Crédito Consignado',
      description:
        'Garanta mais praticidade e economia! Com parcelas descontadas diretamente do salário ou aposentadoria, você aproveita taxas reduzidas e um processo descomplicado.',
      image: {
        src: '/assets/images/products/consignado-inss.png',
        alt: 'Crédito Consignado',
      },
      links: [
        { title: 'Vantagens', link: '#vantagens' },
        { title: 'Parceiros', link: '#parceiros' },
        {
          title: 'Seja parceiro',
          link: import.meta.env.VITE_LINKEDIN,
        },
      ],
    },
    variants: {
      icon: <BriefcaseBusiness className="size-8 text-cptext-cyan" />,
      sub: '/produto',
      title: 'Crédito Consignado',
      description:
        'O crédito consignado é uma modalidade de empréstimo em que as parcelas são descontadas diretamente na folha de pagamento ou no benefício de aposentadoria. Essa solução oferece mais praticidade, taxas de juros reduzidas e segurança para quem busca organizar suas finanças.',
      cta: 'Saiba mais',
      image: {
        src: '/assets/images/products/credito-consignado.png',
        alt: 'Crédito Consignado',
      },
      cards: [
        {
          title: 'Consignado INSS',
          description: (
            <article className="flex flex-col gap-2">
              Exclusivo para aposentados e pensionistas do Instituto Nacional do
              Seguro Social (INSS), o Consignado INSS oferece:
              <ul className="list-disc list-inside">
                <li>Descontos automáticos no benefício mensal;</li>
                <li>Taxas de juros controladas pelo governo;</li>
                <li>
                  Opção de renegociação ou refinanciamento de contratos
                  existentes.
                </li>
              </ul>
              É uma alternativa prática, segura e econômica para quem deseja
              crédito com menor custo.
            </article>
          ),
          image: {
            src: '/assets/images/products/consignado-inss.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-inss',
          cta: 'Saiba mais sobre Consignado INSS',
        },
        {
          title: 'Consignado Público',
          description: (
            <article className="flex flex-col gap-2">
              Desenvolvido especialmente para servidores públicos municipais,
              estaduais e federais, ativos e inativos, o Consignado Público
              oferece:
              <ul className="list-disc list-inside">
                <li>Taxas de juros competitivas;</li>
                <li>Parcelas descontadas diretamente no contracheque;</li>
                <li>Condições exclusivas e diferenciadas.</li>
              </ul>
              Ideal para servidores que buscam crédito fácil e confiável.
            </article>
          ),
          image: {
            src: '/assets/images/products/consignado-publico.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-publico',
          cta: 'Saiba mais sobre Consignado Público',
        },
        {
          title: 'Consignado Privado',
          description: (
            <article className="flex flex-col gap-2">
              Voltado para colaboradores de empresas privadas conveniadas, o
              Consignado Privado é uma solução prática e acessível que oferece:
              <ul className="list-disc list-inside">
                <li>Taxas de juros reduzidas;</li>
                <li>Parcelas descontadas diretamente na folha de pagamento;</li>
                <li>
                  Facilidade de acesso, mesmo para quem possui outras pendências
                  financeiras.
                </li>
              </ul>
              Uma excelente opção para trabalhadores do setor privado que
              precisam de crédito rápido e descomplicado.
            </article>
          ),

          image: {
            src: '/assets/images/products/consignado-privado.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-privado',
          cta: 'Saiba mais sobre Consignado Privado',
        },
        {
          title: 'Consignado Federal',

          description: (
            <article className="flex flex-col gap-2">
              Exclusivo para servidores federais ativos, aposentados e
              pensionistas, o Consignado Federal oferece:
              <ul className="list-disc list-inside">
                <li>
                  Limite de crédito elevado, dependendo da margem consignável;
                </li>
                <li>Taxas de juros atrativas para garantir economia;</li>
                <li>
                  Condições ajustadas para atender projetos pessoais, quitação
                  de dívidas ou necessidades emergenciais.
                </li>
              </ul>
              Uma solução completa para quem deseja crédito com segurança e
              flexibilidade.
            </article>
          ),
          image: {
            src: '/assets/images/products/consignado-federal.png',
            alt: 'Crédito Consignado',
          },
          href: '/produto/consignado/consignado-federal',
          cta: 'Saiba mais sobre Consignado Federal',
        },
      ],
    },
    advantages: {
      title: 'Crédito Consignado: principais vantagens',
      description: 'Conheça as principais vantagens do consignado público.',
      advantages: [
        {
          title: 'Taxas de juros reduzidas',
          description:
            'Aproveite uma das menores taxas do mercado, tornando o crédito mais acessível e econômico para você.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Prazos de pagamento longos',
          description:
            'Tenha mais flexibilidade no planejamento financeiro com prazos estendidos que se ajustam ao seu orçamento.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Desconto direto em folha de pagamento',
          description:
            'Garanta segurança e praticidade com o desconto automático das parcelas diretamente no salário ou benefício.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
        {
          title: 'Menos burocracia',
          description:
            'Ideal para quem precisa de crédito rápido e descomplicado, com condições vantajosas e um processo simples.',
          icon: <VantagensIcon className="size-10 fill-cpblue-300" />,
        },
      ],
    },
    seeAlso: {
      title: 'Veja também',
      cards: seeAlsoConsignado,
    },
  },
};
