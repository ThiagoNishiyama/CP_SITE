import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useAnimationToRef } from '../../hooks/use-animation-to-ref';
import { Link } from 'react-router';
import { SimulationModal } from '../simulationModal';

type SliderProps = React.ComponentProps<typeof Slider> & {
  section: string;
};

export function CreditSlider({ className, section, ...props }: SliderProps) {
  const [value, setValue] = useState(100);
  const [showButton, setShowButton] = useState(false);

  const componentRef = useRef(null);

  useAnimationToRef(componentRef);

  const formatCurrency = (value: number) => {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    const preventTouch = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
    };

    if (sliderElement) {
      sliderElement.addEventListener('touchstart', preventTouch, {
        passive: false,
      });
      sliderElement.addEventListener('touchmove', preventTouch, {
        passive: false,
      });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('touchstart', preventTouch);
        sliderElement.removeEventListener('touchmove', preventTouch);
      }
    };
  }, []);

  return (
    <section ref={componentRef} className="flex flex-col gap-12 mt-4">
      <div className="flex flex-col gap-4">
        <div className="gap-8">
          <div className="text-xl px-8 border-cyan-400 border-l-4 flex items-center w-full">
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-4">
                <span className="text-2xl font-bold text-gray-200">
                  Quanto você precisa?
                </span>
                <span className="text-4xl font-bold text-green-500">
                  {formatCurrency(value)}
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xs font-bold text-gray-300">
                  {formatCurrency(500)}
                </span>
                <Slider
                  ref={sliderRef}
                  defaultValue={[value]}
                  max={500000}
                  step={500}
                  onValueChange={(v) => {
                    if (!showButton) {
                      setShowButton(true);
                    }
                    setValue(v[0]);
                  }}
                  className={cn('flex-1', className)}
                  {...props}
                />
                <span className="text-xs font-bold text-gray-300">
                  {formatCurrency(500000)}
                </span>
              </div>
            </div>
          </div>
        </div>
        {showButton ? (
          <SimulationModal
            variant="cpcyan"
            cta="Simule seu crédito Agora!"
            section={section}
            value={formatCurrency(value)}
          />
        ) : (
          <div className="h-8"> </div>
        )}
      </div>
    </section>
  );
}
