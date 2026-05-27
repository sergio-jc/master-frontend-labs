export const getOrganizationMembers = async (
  { name }: { name: string } = { name: "lemoncode" },
) => {
  const response = await fetch(`https://api.github.com/orgs/${name}/members`)
  // const response = await Response.json(members);
  if (!response.ok) {
    throw new Error("Failed to fetch organization members");
  }
  return response.json();
};