export const getOrganizationMembersApi = async (
  { name }: { name: string } = { name: "lemoncode" },
) => {
  const response = await fetch(`https://api.github.com/orgs/${name}/members`);
  if (!response.ok) {
    throw new Error("Failed to fetch organization members");
  }
  return response.json();
};
