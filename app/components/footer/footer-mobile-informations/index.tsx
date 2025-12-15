import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FooterMobileLinks({
  label,
  links,
}: {
  label: string;
  links: any;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-bold text-lg text-cptext-cyan">
          {label}
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            {links.map((link: any) => {
              return (
                <a
                  key={Math.random()}
                  href={link.link}
                  className="text-border text-lg text-white"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
