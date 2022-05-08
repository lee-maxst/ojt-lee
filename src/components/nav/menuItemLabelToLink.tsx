import Link from 'next/link';

const menuItemLabelToLink = (href: string, name: string) => {
  return (
    <Link href={href}>
      <a rel="noopener noreferrer">{name}</a>
    </Link>
  );
};

export default menuItemLabelToLink;
