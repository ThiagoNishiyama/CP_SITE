import type { PropsWithChildren } from 'react';

export function FooterMainInformations({ children }: PropsWithChildren<any>) {
  return (
    <section className="container flex gap-8 justify-between lg:items-center flex-col-reverse xl:flex-row">
      {children}
    </section>
  );
}
