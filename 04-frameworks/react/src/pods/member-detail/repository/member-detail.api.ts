export const getMemberDetailApi = async (
  { login }: { login: string } = { login: "lemoncode" },
) => {
  const response = await fetch(`https://api.github.com/users/${login}`);
  if (!response.ok) {
    throw new Error("Failed to fetch member");
  }
  return response.json();
};
