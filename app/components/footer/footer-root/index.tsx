import type { PropsWithChildren } from 'react';

export function FooterRoot({ children }: PropsWithChildren<any>) {
  return (
    <footer className="bg-cptext-blue py-16 lg:py-32 flex flex-col lg:gap-8 items-center">
      {children}
    </footer>
  );
}
