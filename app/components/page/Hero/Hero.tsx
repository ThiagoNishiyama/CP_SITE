import type { Data } from '@/routes/data';
import { gsap } from 'gsap';
import { Link } from 'react-router';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const SectionLink = ({ title, link }: { title: string; link: string }) => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const offset = 110;

    gsap.to(window, { duration: 1, scrollTo: { y: link, offsetY: offset } });
  };

  return (
    <Link
      to={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      className="flex items-center gap-2 hover:underline w-fit text-cpblue-300"
      onClick={link.startsWith('http') ? undefined : scrollToSection}
    >
      {title}
    </Link>
  );
};

export function Hero({ data }: { data: Data['hero'] }) {
  return (
    <>
      <section className="bg-[url('/assets/images/bg/bg-mobile.png')]  md:bg-[url('/assets/images/bg/bg-pattern.png')] h-full flex items-center justify-center bg-cover bg-top">
        <div className="container mx-auto flex items-center pt-8 flex-col md:flex-row justify-between gap-8 relative w-full min-h-[500px] max-w-[800px]">
          <div className=" md:absolute md:right-0 z-10 flex flex-col gap-4">
            {data.links && (
              <nav className="rounded-2xl relative bg-background shadow-md hidden lg:flex md:max-w-fit self-end">
                <div className="lg:p-6 p-0 pt-6 flex gap-6 justify-between items-center">
                  <div className="flex gap-8">
                    {data.links.map((link, index) => (
                      <SectionLink key={Math.random()} {...link} />
                    ))}
                  </div>
                </div>
              </nav>
            )}
            <div className="md:max-w-[60%] flex flex-col gap-4 backdrop-filter backdrop-blur-sm p-8 rounded-3xl bg-gray-200/80 self-end">
              <h1 className="text-cpblue-400 lg:text-5xl text-3xl font-bold">
                {data.title}
              </h1>
              <p className="lg:text-xl text-md text-gray-900">
                {data.description}
              </p>
            </div>
          </div>
          {data.image && (
            <div className="min-h-[300px] md:h-fit md:w-[60%] md:max-w-[448px] md:mr-8 md:absolute md:left-0 bottom-0">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
