import TagApp from './Tag';
import { BiBed } from 'react-icons/bi';
import { TbCar } from 'react-icons/tb';
import { TbArrowRightBar } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { Empreendimento } from '../../generated';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  content: Empreendimento | undefined;
}

const BlockEmp = ({ content }: Props) => {
  if (!content) return null;

  return (
    <Link href={`/empreendimento/${content.slug}`} className="pb-6">
      <div className="relative h-[400px] xl:h-[450px] bg-blue/20">
        <Image
          src={content.empreendimento?.imagemPrincipal?.sourceUrl || ''}
          fill
          className="object-cover"
          alt="Imagem principal"
        />
        <TagApp name={content.empreendimento} />
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-green mt-4">
          <h2 className="text-xl font-medium">
            {content.empreendimento?.nomeDoEmpreendimento}
          </h2>
          <div className="flex items-center justify-end ">
            <div className="flex items-center mr-3">
              <span className="mr-2">
                {content.empreendimento?.empDormitorios}
              </span>
              <BiBed size={22} />
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                {content.empreendimento?.empVagasDeGaragem}
              </span>
              <TbCar size={22} />
            </div>
          </div>
        </div>
        <p className="text-white flex items-center my-1">
          <TbArrowRightBar size={20} />
          <span className="ml-3">{content.empreendimento?.empMetragem}</span>
        </p>
        <div className="flex items-center text-white">
          <GoLocation size={18} />
          <span className="ml-2 text-sm">
            {content.empreendimento?.empCidade}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlockEmp;
