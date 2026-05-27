import { DEFAULT_GITHUB_API_URL, DEFAULT_ORGANIZATION_NAME } from "@/common/constants";

export const getOrganizationMembersApi = async (
  { name }: { name: string } = { name: DEFAULT_ORGANIZATION_NAME },
) => {
  const response = await fetch(`${DEFAULT_GITHUB_API_URL}/orgs/${name}/members`);
  if (!response.ok) {
    throw new Error("Failed to fetch organization members");
  }
  return response.json();
};
