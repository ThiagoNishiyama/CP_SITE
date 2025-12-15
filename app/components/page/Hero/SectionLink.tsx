import { Link } from 'react-router';

type SectionLinkProps = {
  title: string;
  link: string;
};

const SectionLink = ({ title, link }: SectionLinkProps) => (
  <Link
    to={link}
    className="flex items-center gap-2 hover:underline w-fit text-cpblue-300"
  >
    {title}
  </Link>
);

export default SectionLink;