import Image from "next/image";

interface CardCompany {
  jobDetails: CardCompanyRowProps
}

export default function Home() {
  const elements = new Array(5)
    .fill(null)
    .map((_, i) => <CompanyCard key={i} />);

  return (
    <div className="flex gap-[24px] flex-col p-[24px] bg-[#ECF1F7] font-source-sans">
      {elements}
    </div>
  );
}

function CompanyCard() {
  const elements = new Array(5)
    .fill(null)
    .map((_, i) => <CardCompanyRow key={i} />);
  return (
    <div className="p-[16px] w-[21em] rounded-[8px] bg-white text-[16px]">
      <div className="flex justify-between mb-[16px] pt-[4px]">
        <div className="font-semibold shade-dark">Social</div>
        <div className="text-galaxy-neutral-400 font-semibold">12</div>
      </div>
      <div>
        <div className="border-b-[1px] border-galaxy-neutral-200 mb-[14px] pb-[8px] flex items-center justify-between text-galaxy-neutral-400 text-xs">
          <div className="text-left">Name</div>
          <div className="text-right">Total jobs available</div>
        </div>
        <div className="flex flex-col gap-[16px]">{elements}</div>
      </div>
    </div>
  );
}

interface CardCompanyRowProps {
  jobsCount: number;
  companyName: string;
}

function CardCompanyRow() {
  return (
    <div className="flex flex-row justify-between w-full h-full text-sm">
      <div className="flex flex-row gap-[16px]">
        <div className="w-[24px] h-[24px]">
          <img
            alt="company-logo"
            src={"https://placehold.co/400x400"}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="shade-dark">Layers.io</div>
      </div>
      <div className="text-galaxy-neutral-400">12</div>
    </div>
  );
}
