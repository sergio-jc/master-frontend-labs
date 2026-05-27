import { Input } from "@/common/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";

interface Props {
  defaultOrgName?: string;
  handleSearch: (orgName: string) => void;
}

const SearchOrgComponent = (props: Props) => {
  const { defaultOrgName, handleSearch } = props;

  const [organizationNameState, setOrganizationNameState] = useState<string>(
    defaultOrgName ?? "",
  );
  const debouncedOrganizationName = useDebounce(organizationNameState, 500);

  useEffect(() => {
    handleSearch(debouncedOrganizationName ?? "");
  }, [debouncedOrganizationName, handleSearch]);

  return (
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Search Organizations
        </h1>
        <div className="w-full max-w-xs">
          <Input
            value={organizationNameState}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrganizationNameState(e.target.value)
            }
            placeholder="Busca una organización..."
          />
        </div>
      </header>
  );
};

export default SearchOrgComponent;
