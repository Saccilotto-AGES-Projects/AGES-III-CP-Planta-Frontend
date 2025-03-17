import Link from 'next/link';
import SvgIcon from '@/src/components/common/SvgIcon';

type Props = {
  href: string;
};

export default function ButtonSettings({ href }: Props) {
  return (
    <Link href={href}>
      <SvgIcon
        src="/gear-icon.svg" // Move SVG to public folder
        alt="Configurações"
        width={45.31}
        height={45}
        className="absolute right-[30px] top-[34px]"
      />
    </Link>
  );
}