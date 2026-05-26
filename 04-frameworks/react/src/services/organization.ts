export const getOrganization = async ({ name }: { name: string } = { name: "lemoncode" }) => {
  const response = await fetch(`https://api.github.com/orgs/${name}`)
  if (!response.ok) {
    throw new Error("Failed to fetch organization")
  }
  return response.json()
}

export const getOrganizationMembers = async ({ name }: { name: string } = { name: "lemoncode" }) => {
  const response = await fetch(`https://api.github.com/orgs/${name}/members`)
  if (!response.ok) {
    throw new Error("Failed to fetch organization members")
  }
  return response.json()
}

export const getMember = async ({ login }: { login: string } = { login: "lemoncode" }) => {
  const response = await fetch(`https://api.github.com/users/${login}`)
  if (!response.ok) {
    throw new Error("Failed to fetch member")
  }
  return response.json()
}