import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route(
    'produto/consignado/consignado-federal',
    'routes/consignado-federal.tsx'
  ),
  route(
    'produto/consignado/consignado-publico',
    'routes/consignado-publico.tsx'
  ),
  route(
    'produto/consignado/consignado-privado',
    'routes/consignado-privado.tsx'
  ),
  route('produto/consignado/consignado-inss', 'routes/consignado-inss.tsx'),

  route(
    'produto/imobiliario/financiamento-imovel',
    'routes/financiamento-imovel.tsx'
  ),
  route('produto/imobiliario/home-equity', 'routes/home-equity.tsx'),

  route('produto/credito/credito-pessoal', 'routes/credito-pessoal.tsx'),
  route('produto/credito/fgts', 'routes/fgts.tsx'),
  route(
    'produto/credito/financiamento-refinanciamento-veiculos',
    'routes/financiamento-refinanciamento-veiculos.tsx'
  ),

  route('produto/cartao/cartao-consignado', 'routes/cartao-consignado.tsx'),
  route(
    'produto/cartao/cartao-beneficio-consignado',
    'routes/cartao-beneficio-consignado.tsx'
  ),
  route('produto/cartao/cartao-credcesta', 'routes/cartao-credcesta.tsx'),

  route('produto/consorcio', 'routes/consorcio.tsx'),
  route('produto/seguros', 'routes/seguros.tsx'),

  route('produto/outros/painel-solar', 'routes/painel-solar.tsx'),
  route('produto/outros/capital-de-giro', 'routes/capital-de-giro.tsx'),
  route(
    'produto/outros/operacoes-estruturadas',
    'routes/operacoes-estruturadas.tsx'
  ),

  route('produto/consignado', 'routes/consignado.tsx'),

  route('produto/imobiliario', 'routes/imobiliario.tsx'),
  route('sobre', 'routes/sobre.tsx'),
  route('equipe', 'routes/diretoria.tsx'),
] satisfies RouteConfig;
