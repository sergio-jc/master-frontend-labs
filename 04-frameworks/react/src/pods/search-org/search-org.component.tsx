import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const SearchOrgComponent = () => {
  const { organizationName } = useParams();
  const [organizationNameState, setOrganizationNameState] = useState<string>(
    organizationName ?? "",
  );
  const debouncedOrganizationName = useDebounce(organizationNameState, 500);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${debouncedOrganizationName}`);
  }, [debouncedOrganizationName, navigate]);

  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
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
      </nav>
    </header>
  );
};

export default SearchOrgComponent;
