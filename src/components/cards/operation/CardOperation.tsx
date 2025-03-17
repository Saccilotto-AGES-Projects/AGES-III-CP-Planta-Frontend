import SvgIcon from '@/src/components/common/SvgIcon';
import { useRouter } from 'next/navigation';

type Props = {
  id: string;
  title: string;
  type: 'inProgress' | 'finished';
};

export default function CardOperation({ title, type, id }: Props) {
  const router = useRouter();
  const typeConfig = {
    inProgress: {
      description: 'Em andamento',
      iconSrc: '/trending-icon.svg',
      style:
        'border-[#c25327] border-2 rounded-lg flex items-start p-6 gap-x-4 bg-[#fcf3ea] w-full h-auto max-w-70'
    },
    finished: {
      description: 'Finalizado',
      iconSrc: '/finished-icon.svg',
      style:
        'border-[#58a587] border-2 rounded-lg flex items-start p-6 gap-x-4 bg-[#ebffee] w-full h-auto max-w-70'
    }
  };

  const { description, iconSrc, style } = typeConfig[type];

  const handleRedirect = () => {
    router.push(`/order/overview/${id}`);
  };

  return (
    <div className={style} onClick={() => handleRedirect()}>
      <SvgIcon src={iconSrc} alt="" width={30} height={30} />
      <div className="flex flex-col text-start gap-y-1">
        <h3 className="text-xl font-bold text-[#1c4060]">{title}</h3>
        <p className="text-[#757575] text-sm uppercase">{description}</p>
      </div>
    </div>
  );
}