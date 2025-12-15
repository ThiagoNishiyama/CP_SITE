import { footersInformations } from '../footer-SEO-informations';

export function FooterCopyright() {
  return (
    <section className="container flex flex-col gap-4 justify-center items-center mt-8 lg:mt-0">
      <p className="text-white">{footersInformations.infos.copyright}</p>
    </section>
  );
}
