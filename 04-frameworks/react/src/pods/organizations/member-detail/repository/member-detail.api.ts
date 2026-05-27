import { DEFAULT_GITHUB_API_URL } from "@/common/constants";

export const getMemberDetailApi = async (
  { login }: { login: string } = { login: "lemoncode" },
) => {
  const response = await fetch(`${DEFAULT_GITHUB_API_URL}/users/${login}`);
  if (!response.ok) {
    throw new Error("Failed to fetch member");
  }
  return response.json();
};
