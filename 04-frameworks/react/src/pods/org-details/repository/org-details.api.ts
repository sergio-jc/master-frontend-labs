export const getOrgDetailsApi = async (
  { name }: { name: string } = { name: "lemoncode" },
) => {
  const response = await fetch(`https://api.github.com/orgs/${name}`);
  if (!response.ok) {
    throw new Error("Failed to fetch organization");
  }
  return response.json();
};
