import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { cn } from '@/lib/utils';
import { useRef, type JSX } from 'react';

export function DirectorCard({
  content,
  index,
}: {
  content: AboutContent;
  index: number;
}) {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef, { y: 0, x: index % 2 === 0 ? -50 : 50 });

  return (
    <section className={cn('py-4')}>
      <div
        className={`container mx-auto md:grid md:grid-cols-1 lg:grid-cols-5 lg:gap-28 gap-16 mb-16`}
        ref={componentRef}
      >
        <div
          className={cn(
            `w-full aspect-square overflow-hidden rounded-lg col-span-2  mb-8`,
            index % 2 === 0 ? 'md:order-1' : 'md:order-2'
          )}
        >
          <img
            src={content.image.src}
            alt={content.image.alt}
            className={cn(
              'w-full h-full object-cover',
              content.image.className
            )}
          />
        </div>
        <div
          className={
            'flex-1 flex flex-col gap-4 col-span-3' +
            (index % 2 === 0 ? ' order-2' : ' order-1')
          }
        >
          <div className="flex gap-4 items-center">
            <div className="w-full h-1 bg-cptext-blue rounded-md"></div>
            <h2 className="text-lg md:text-xl text-cptext-blue w-full font-bold flex-1 min-w-fit">
              {content.title}
            </h2>
            <div className="w-full h-1 bg-cptext-blue rounded-md"></div>
          </div>
          {content.descriptions.map((description, index) => (
            <article
              key={index}
              className={cn(
                'md:text-lg text-sm',
                index % 2 === 0
                  ? 'bg-cptext-blue text-white p-4 rounded-md'
                  : 'bg-gray-100 p-4 rounded-md shadow-md'
              )}
            >
              {description}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DirectorList({
  aboutContent,
}: {
  aboutContent: AboutContent[];
}) {
  return (
    <section>
      {aboutContent.map((content, index) => (
        <DirectorCard key={index} content={content} index={index} />
      ))}
    </section>
  );
}

type AboutContent = {
  title: string;
  descriptions: Array<string | JSX.Element>;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
};

export function AboutCard({
  content,
  index,
}: {
  content: AboutContent;
  index: number;
}) {
  const componentRef = useRef(null);

  useAnimationToRef(componentRef, { y: 0, x: index % 2 === 0 ? -50 : 50 });

  const isSvg = content.image.src.endsWith('.svg');

  return (
    <section className={cn('py-4')}>
      <div
        className={`container mx-auto md:grid md:grid-cols-1 lg:grid-cols-10 lg:gap-28 gap-16 mb-16`}
        ref={componentRef}
      >
        <div
          className={cn(
            isSvg
              ? `w-full aspect-square overflow-hidden rounded-lg col-span-3  mb-8 bg-gray-200 shadow-md p-8 text-white fill-white hidden lg:flex`
              : `w-full aspect-square overflow-hidden rounded-3xl col-span-4 mb-8 shadow-md lg:flex`,
            index % 2 === 0 ? 'md:order-1' : 'md:order-2'
          )}
        >
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={cn(
            'flex-1 flex flex-col gap-4',
            isSvg ? 'col-span-7' : 'col-span-6',
            index % 2 === 0 ? ' order-2' : ' order-1'
          )}
        >
          <div className="flex gap-2 items-center justify-center flex-col">
            {isSvg && (
              <img
                src={content.image.src}
                alt={content.image.alt}
                className="w-12 h-12 object-cover lg:hidden"
              />
            )}
            <div>
              <h2 className="text-lg md:text-xl text-center text-cptext-blue font-bold flex-1 min-w-fit break-words w-fit">
                {content.title}
              </h2>
            </div>
          </div>
          {content.descriptions.map((description, index) => (
            <article
              key={index}
              className={cn(
                'md:text-lg text-sm p-8',
                index % 2 === 0
                  ? 'bg-cptext-blue text-white rounded-md'
                  : ' bg-gray-100 rounded-md shadow-md'
              )}
            >
              {description}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutList({ aboutContent }: { aboutContent: AboutContent[] }) {
  return (
    <section>
      {aboutContent.map((content, index) => (
        <AboutCard key={index} content={content} index={index} />
      ))}
    </section>
  );
}
