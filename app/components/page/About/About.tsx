import { ArrowRight, CircleHelp } from 'lucide-react';
import { InfoSection } from './InfoSection';
import { ConhecaIcon } from '@/components/ui/icons';
import type { Data } from '@/routes/data';
import { useRef } from 'react';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';
import { SimulationModal } from '@/components/simulationModal';

export function About({
  data,
  section,
}: {
  data: Data['about'];
  section: string;
}) {
  if (!data) return null;
  const contentRef = useRef(null);
  useAnimationToRef(contentRef, { y: 0 });

  return (
    <section ref={contentRef} className="bg-cptext-blue py-16" id="oque-e">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="flex items-center gap-8">
          <div className="rounded-lg p-2 w-fit border-4">{data.icon}</div>
          <h2 className="text-2xl font-bold text-secondary">{data.title}</h2>
        </div>
        <div className="flex flex-col gap-6 backdrop-filter backdrop-blur-sm py-8 rounded-3xl">
          {data.sections.map((section, index) => (
            <div key={Math.random()}>
              <InfoSection key={Math.random()} {...section} />
              {index === 0 && <div className="bg-cptext-cyan h-1.5 mt-4" />}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <SimulationModal
            cta="SIMULE AGORA!"
            variant="cpcyan"
            section={section}
          />
        </div>
      </div>
    </section>
  );
}
