import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type AdvantageCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function AdvantageCard({
  title,
  description,
  className,
}: AdvantageCardProps) {
  return (
    <div
      className={cn(
        'flex gap-4 shadow-[0_0px_50px_-20px_rgba(0,0,0,0.2)] p-4 sm:p-8 rounded-3xl sm:min-h-fit h-full flex-col sm:flex-row',
        className
      )}
    >
      <div className="flex gap-4 flex-col">
        <div className="flex items-center gap-4">
          <h3 className="text-xl md:text-2xl font-bold text-cpblue-300">
            {title}
          </h3>
        </div>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
}
