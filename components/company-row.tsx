interface IndustryCardCompanyRowProps {
  jobsCount: number;
  companyName: string;
  logo: string;
}

function IndustryCardCompanyRow({
  jobsCount,
  companyName,
  logo,
}: IndustryCardCompanyRowProps) {
  return (
    <div className="flex flex-row justify-between w-full h-full text-sm">
      <div className="flex flex-row gap-[16px]">
        <div className="w-[24px] h-[24px]">
          <img
            alt="company-logo"
            src={logo}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="shade-dark">{companyName}</div>
      </div>
      <div className="text-galaxy-neutral-400">{jobsCount}</div>
    </div>
  );
}

export default IndustryCardCompanyRow;
export type { IndustryCardCompanyRowProps };
