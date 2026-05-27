import {
  Building2,
  Calendar,
  GitFork,
  Github,
  Mail,
  MapPin,
  Star,
  Twitter,
  UserCheck,
  Users,
} from "lucide-react";

import { DetailItemComponent, StatCardComponent } from "./components";
import type { MemberDetail } from "./member-detail.vm";

interface Props {
  member: MemberDetail;
}

const formatMemberSince = (date: Date) =>
  new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(date);

const MemberDetailComponent: React.FC<Props> = (props) => {
  const { member } = props;

  const displayName = member.name?.trim() || member.login;
  
  const hasProfileDetails =
    member.location ||
    member.company ||
    member.email ||
    member.hireable ||
    member.twitter_username;

  return (
    <div className="flex flex-col gap-6">
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <img
            className="h-24 w-24 shrink-0 rounded-full border border-zinc-700 object-cover"
            src={member.avatar_url}
            alt={member.login}
          />

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">{displayName}</h1>
              {member.name && (
                <p className="text-sm text-zinc-400">@{member.login}</p>
              )}
              {member.bio && (
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-300">
                  {member.bio}
                </p>
              )}
            </div>

            {hasProfileDetails && (
              <div className="grid gap-4 sm:grid-cols-2">
                {member.location && (
                  <DetailItemComponent icon={<MapPin className="size-4" />} label="Ubicación">
                    {member.location}
                  </DetailItemComponent>
                )}
                {member.company && (
                  <DetailItemComponent icon={<Building2 className="size-4" />} label="Empresa">
                    {member.company}
                  </DetailItemComponent>
                )}
                {member.email && (
                  <DetailItemComponent icon={<Mail className="size-4" />} label="Email">
                    <a
                      href={`mailto:${member.email}`}
                      className="underline underline-offset-2 hover:text-white"
                    >
                      {member.email}
                    </a>
                  </DetailItemComponent>
                )}
                {member.twitter_username && (
                  <DetailItemComponent icon={<Twitter className="size-4" />} label="Twitter">
                    <a
                      href={`https://twitter.com/${member.twitter_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-white"
                    >
                      @{member.twitter_username}
                    </a>
                  </DetailItemComponent>
                )}
                {member.hireable && (
                  <DetailItemComponent icon={<UserCheck className="size-4" />} label="Disponibilidad">
                    Disponible para contratar
                  </DetailItemComponent>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 border-t border-zinc-800 pt-4 text-sm">
              <a
                href={member.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 underline underline-offset-2 hover:text-white"
              >
                <Github className="size-4" />
                Ver perfil en GitHub
              </a>
              <span className="inline-flex items-center gap-2 text-zinc-500">
                <Calendar className="size-4" />
                Miembro desde {formatMemberSince(member.created_at)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Actividad en GitHub</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCardComponent
            label="Seguidores"
            value={member.followers}
            icon={<Users className="size-4" />}
          />
          <StatCardComponent
            label="Siguiendo"
            value={member.following}
            icon={<UserCheck className="size-4" />}
          />
          <StatCardComponent
            label="Repositorios"
            value={member.public_repos}
            icon={<GitFork className="size-4" />}
          />
          <StatCardComponent
            label="Gists"
            value={member.public_gists}
            icon={<Star className="size-4" />}
          />
        </div>
      </section>
    </div>
  );
};

export default MemberDetailComponent;
