import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useAnimationToRef } from '@/hooks/use-animation-to-ref';

export function CarouselContainer({
  components,
  className,
}: {
  components: React.ReactNode[];
  className?: string;
}) {
  const componentRef = React.useRef(null);
  useAnimationToRef(componentRef);
  return (
    <Carousel ref={componentRef} className="w-full">
      <CarouselContent
        className={cn('w-full h-[500px] flex items-center', className)}
      >
        {components.map((component, index) => (
          <CarouselItem
            key={Math.random()}
            className="pl-4 basis-11/12 lg:basis-1/3"
          >
            {component}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
