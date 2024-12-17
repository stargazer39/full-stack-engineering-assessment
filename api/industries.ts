import { API_ENDPOINT } from "@/config";

export interface Industries {
  uuid: string;
  images: Images;
  income_streams: IncomeStream[];
  industries: IncomeStream[];
  name: string;
  tagline: string;
  total_jobs_available: number;
  id: string;
}

export interface Images {
  "32x32": string;
  "74x74": string;
  "100x100": string;
}

export interface IncomeStream {
  id: number;
  name: string;
}

export interface GroupedIndustries {
  industries: Industries[];
  name: string;
}

export async function fetchIndustries(): Promise<GroupedIndustries[]> {
  let response = await fetch(`${API_ENDPOINT}/items?_sort=name`);

  if (response.status != 200) {
    throw new Error("GET /items failed with " + response.status);
  }

  let items: Industries[] = await response.json();

  let industriesMap = new Map<string, GroupedIndustries>();

  items.forEach((value) => {
    value.industries.forEach((industry) => {
      if (!industriesMap.has(industry.name)) {
        industriesMap.set(industry.name, {
          industries: [value],
          name: industry.name,
        });
      } else {
        const existingIndustry = industriesMap.get(industry.name)!;
        existingIndustry.industries.push(value);
        industriesMap.set(industry.name, existingIndustry);
      }
    });
  });

  return industriesMap.values().toArray();
}
