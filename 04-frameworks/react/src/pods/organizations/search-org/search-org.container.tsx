import { useCallback } from "react";
import { routes } from "@/core";
import { useNavigate, useParams } from "react-router";
import MainSearchComponent from "@/common/components/main-search.component";

const SearchOrgContainer = () => {
  const { organizationId } = useParams();
  const navigate = useNavigate();

  const onSearch = useCallback((organizationId: string) => {
    navigate(routes.organizationDetails(organizationId ?? ""));
  }, [navigate]);

  return (
    <MainSearchComponent
      title="Search Organizations"
      placeholder="Busca una organización..."
      handleSearch={onSearch}
      defaultSearch={organizationId ?? ""}
    />
  );
};

export default SearchOrgContainer;