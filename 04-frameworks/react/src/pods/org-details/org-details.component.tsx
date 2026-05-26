import { useEffect, useState } from "react";
import {
  getOrganization,
  getOrganizationMembers,
} from "@/services/organization";
import { Link, useParams } from "react-router";
import { routes } from "@/core";

interface Organization {
  name: string;
  description: string;
  avatar_url: string;
  url: string;
}

interface Member {
  login: string;
  avatar_url: string;
  url: string;
}

function OrgDetailsComponent() {
  const { companyId } = useParams();

  console.log("companyId", companyId);
  const [organization, setOrganization] = useState<Organization | null>(null);
  console.log("organization", organization);
  const [organizationMembers, setOrganizationMembers] = useState<Member[]>([]);
  console.log("organizationMembers", organizationMembers);

  useEffect(() => {
    if (!companyId) return;
    console.log("companyId 22", companyId);

    getOrganization({ name: companyId as string }).then((organization) => {
      setOrganization(organization);
    });
    getOrganizationMembers({ name: companyId }).then((members: Member[]) => {
      setOrganizationMembers(members);
    });
  }, [companyId]);

  if (!companyId || !organization || !organizationMembers)
    return <p>Company not found</p>;

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 flex gap-6 items-start">
          <div className="shrink-0">
            {organization.avatar_url && (
              <img
                src={organization.avatar_url}
                alt={organization.name}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-zinc-700 object-cover"
              />
            )}
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              {organization.name}
            </h2>
            {organization.description && (
              <p className="text-sm md:text-base text-zinc-300">
                {organization.description}
              </p>
            )}
            {organization.url && (
              <a
                href={organization.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2"
              >
                {organization.url}
              </a>
            )}
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Miembros</h3>
          {/* todo: filtro por nombre de miembro */}
          <ul className="flex flex-col gap-3">
            {organizationMembers.map((member) => (
              <li key={member.login} className="contents">
                <Link
                  className="flex items-center gap-4 cursor-pointer border border-zinc-700 rounded-lg p-2"
                  to={routes.companyMemberDetails(
                    companyId ?? "",
                    member.login,
                  )}
                >
                  <img
                    src={member.avatar_url}
                    alt={member.login}
                    className="w-10 aspect-square rounded-full border border-zinc-700 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">{member.login}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default OrgDetailsComponent;
