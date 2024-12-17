"use client";
import { fetchIndustries } from "@/api/industries";
import { IndustryCardCompanyRowProps } from "@/components/company-row";
import IndustryCard from "@/components/industry-card";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

interface CardCompany {
  jobs: IndustryCardCompanyRowProps[];
}

export default async function Home() {
  const industries = await fetchIndustries();

  const elements = industries.map((industry) => {
    const jobs: IndustryCardCompanyRowProps[] = industry.industries.map(
      (v) => ({
        companyName: v.name,
        jobsCount: v.total_jobs_available,
        logo: v.images["32x32"] || v.images["74x74"] || v.images["100x100"],
      })
    );

    return (
      <div>
        <IndustryCard
          name={industry.name}
          jobs={jobs}
          total={industry.industries.length}
        />
      </div>
    );
  });

  return (
    <div className="flex gap-[24px] flex-row p-[24px] bg-[#ECF1F7] font-source-sans flex-wrap w-full">
      {elements}
    </div>
  );
}
