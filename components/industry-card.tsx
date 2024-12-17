import IndustryCardCompanyRow, {
  IndustryCardCompanyRowProps,
} from "./company-row";

interface IndustryCardProps {
  jobs: IndustryCardCompanyRowProps[];
  name: string;
  total: number;
}

function IndustryCard({ jobs, name, total }: IndustryCardProps) {
  return (
    <div className="p-[16px] w-[21em] rounded-[8px] bg-white text-[16px]">
      <div className="flex justify-between mb-[16px] pt-[4px]">
        <div className="font-semibold shade-dark">{name}</div>
        <div className="text-galaxy-neutral-400 font-semibold">{total}</div>
      </div>
      <div>
        <div className="border-b-[1px] border-galaxy-neutral-200 mb-[14px] pb-[8px] flex items-center justify-between text-galaxy-neutral-400 text-xs">
          <div className="text-left">Name</div>
          <div className="text-right">Total jobs available</div>
        </div>
        <div className="flex flex-col gap-[16px]">
          {jobs.map((v, i) => (
            <IndustryCardCompanyRow {...v} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndustryCard;
export type { IndustryCardProps };
