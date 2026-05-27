import type { OrganizationDetails } from "./org-details.vm";

interface Props {
  organization: OrganizationDetails;
}
function OrgDetailsComponent(props: Props) {
  const { organization } = props;

  return (
    <section className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-2 flex gap-3 items-center">
      <div className="shrink-0">
        {organization.avatar_url && (
          <img
            src={organization.avatar_url}
            alt={organization.name}
            className="w-16 aspect-square rounded-full border border-zinc-700 object-cover"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col gap-1 align-center">
        <h2 className="text-xl font-semibold">
          {organization.name}
        </h2>
        {organization.description && (
          <p className="text-sm text-zinc-300">
            {organization.description}
          </p>
        )}
      </div>
    </section>
  );
}

export default OrgDetailsComponent;
