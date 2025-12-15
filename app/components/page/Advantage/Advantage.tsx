import { PayIcon, VantagensIcon } from '@/components/ui/icons';
import { AdvantageCard } from './AdvantageCard';
import type { Data } from '@/routes/data';
import { useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';

export function Advantage({ data }: { data: Data['advantages'] }) {
  const contentRef = useRef(null);
  useAnimationToRef(contentRef, { y: 50 });
  return (
    <section
      ref={contentRef}
      className="container mx-auto flex flex-col gap-9"
      id="vantagens"
    >
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <div className="bg-accent rounded-lg p-2 w-fit">
          <VantagensIcon className="md:size-12 size-20  fill-cpblue-300" />
        </div>
        <h2 className="md:text-3xl text-2xl text-center md:text-start font-bold text-cpblue-400">
          {data.title}
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
        {data.advantages.map((advantage, index) => (
          <AdvantageCard
            key={Math.random()}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </section>
  );
}
