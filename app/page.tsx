import { IndustryCardCompanyRowProps } from "@/components/company-row";
import IndustryCard from "@/components/industry-card";
import Image from "next/image";

interface CardCompany {
  jobs: IndustryCardCompanyRowProps[];
}

export default function Home() {
  const jobs: IndustryCardCompanyRowProps[] = new Array(5).fill({
    jobsCount: 1,
    companyName: "Test",
    logo: "https://placehold.co/600x400",
  });

  const elements = new Array(5)
    .fill(null)
    .map((_, i) => <IndustryCard key={i} jobs={jobs} />);

  return (
    <div className="flex gap-[24px] flex-row p-[24px] bg-[#ECF1F7] font-source-sans flex-wrap w-full">
      {elements}
    </div>
  );
}


