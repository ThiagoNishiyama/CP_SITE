import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { PayIcon, VejaTambemIcon } from '@/components/ui/icons';
import type { Data } from '@/routes/data';

type SeeAlsoCardProps = {
  title: string;
  description: string;
  link: string;
};

const SeeAlsoCard = ({ title, description, link }: SeeAlsoCardProps) => {
  return (
    <div className="bg-slate-50 rounded-3xl shadow-md p-4 flex flex-col gap-2 hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5">
      <h3 className="flex items-center gap-2 text-2xl font-bold text-cpblue-400">
        {title}
      </h3>
      <p
        className="flex items-center gap-2 text-gray-600"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {description}
      </p>
      <Link
        to={link}
        className="flex items-center gap-2 hover:underline w-fit text-cpblue-300"
      >
        Conheça
        <ArrowRight className="size-4" />
      </Link>
    </div>
  );
};

export const SeeAlso = ({ data }: { data: Data['seeAlso'] }) => {
  return (
    <div className="container mx-auto flex flex-col gap-4 pb-8">
      <div className="flex items-center gap-8">
        <div className="bg-accent rounded-lg p-2 w-fit">
          <VejaTambemIcon className="size-12 fill-cptext-cyan" />
        </div>
        <h2 className="text-3xl font-bold text-cpblue-400">{data.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.cards.map((card, index) => (
          <SeeAlsoCard key={Math.random()} {...card} />
        ))}
      </div>
    </div>
  );
};
