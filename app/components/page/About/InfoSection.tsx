import { cn } from '@/lib/utils';
import type { JSX } from 'react';

type SectionHeaderProps = {
  icon: JSX.Element;
  title: string;
  className?: string;
  titleClassName?: string;
};

const SectionHeader = ({
  icon,
  title,
  className,
  titleClassName,
}: SectionHeaderProps) => (
  <div className="flex items-center gap-4">
    <div className={cn(className)}>{icon}</div>
    <h4 className={cn('text-2xl font-bold text-secondary', titleClassName)}>
      {title}
    </h4>
  </div>
);

const SubSectionHeader = ({
  icon,
  title,
  className,
  titleClassName,
}: SectionHeaderProps) => (
  <div className="flex gap-2 items-start">
    <div className={cn(className)}>{icon}</div>
    <h5 className={cn('text-xl font-bold text-secondary', titleClassName)}>
      {title}
    </h5>
  </div>
);

type InfoSectionProps = {
  icon: JSX.Element;
  title: string;
  description?: string | JSX.Element;
  subSections?: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
  }>;
};

export const InfoSection = ({
  icon,
  title,
  description,
  subSections,
}: InfoSectionProps) => (
  <div className="flex flex-col gap-4">
    <SectionHeader
      icon={icon}
      title={title}
      className="bg-gray-100 rounded-lg p-2 w-fit"
    />
    {description && (
      <p className="text-sm md:text-lg text-secondary">{description}</p>
    )}
    <div className="flex flex-col gap-4 md:flex-row md:gap-8">
      {subSections &&
        subSections.map((subSection, index) => (
          <div key={Math.random()}>
            <SubSectionHeader
              icon={subSection.icon}
              title={subSection.title}
              titleClassName="text-md md:text-xl font-bold text-secondary"
            />
            <article className="text-sm md:text-lg text-secondary mt-2">
              {subSection.description}
            </article>
          </div>
        ))}
    </div>
  </div>
);
