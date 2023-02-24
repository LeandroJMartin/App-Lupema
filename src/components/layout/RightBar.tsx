import { Empreendimento } from '../../generated';
import BlockEmp from './BlockEmp';

interface Props {
  emp: Empreendimento;
}

const RightBar = ({ emp }: Props) => {
  return (
    <div className="py-6 px-6 border border-green text-white">
      <BlockEmp content={emp} main={false} />
    </div>
  );
};

export default RightBar;
