import { routes } from "@/core";
import SearchOrgComponent from "./search-org.component";
import { useNavigate, useParams } from "react-router";

export const SearchOrgContainer = () => {
  const { organizationId } = useParams();
  const navigate = useNavigate();

  const onSearch = (organizationId: string) => {
    navigate(routes.organizationDetails(organizationId ?? ""));
  };

  return (
    <SearchOrgComponent
      handleSearch={onSearch}
      defaultOrgName={organizationId ?? ""}
    />
  );
};
