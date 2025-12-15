import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

type SeeAlsoCardProps = {
  title: string;
  description: string;
  link: string;
};

export function SeeAlsoCard({ title, description, link }: SeeAlsoCardProps) {
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
}
