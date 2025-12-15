import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import * as React from 'react';

gsap.registerPlugin(useGSAP);
export function useAnimationToRef(
  ref: React.RefObject<HTMLElement | null>,
  options?: gsap.TweenVars
): void {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref]);

  React.useEffect(() => {
    if (isVisible) {
      gsap.from(ref.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'elastic.inOut',
        ...options,
      });
    }
  }, [isVisible, ref]);
}
