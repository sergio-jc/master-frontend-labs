import { useEffect, useState } from "react";
import { getOrganization } from "./org-details.api";
import { useParams } from "react-router";
import OrgDetailsComponent from "./org-details.component";
import type { OrganizationDetails } from "./org-details.vm";

function OrgDetailsContainer() {
  const { organizationId } = useParams();

  const [organization, setOrganization] = useState<OrganizationDetails | null>(null);

  useEffect(() => {
    if (!organizationId) return;

    getOrganization({ name: organizationId as string }).then((organization) => {
      setOrganization(organization);
    });
  }, [organizationId]);

  if (!organizationId || !organization)
    return <p>Organization not found</p>;

  return (
    <OrgDetailsComponent organization={organization} />
  );
}

export default OrgDetailsContainer;
