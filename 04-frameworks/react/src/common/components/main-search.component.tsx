import { Input } from "@/common/ui/input";
import { useDebounce } from "@/common/hooks/debounce.hook";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  placeholder: string;
  defaultSearch?: string;
  handleSearch: (search: string) => void;
}

const MainSearchComponent = (props: Props) => {
  const { title, placeholder, defaultSearch, handleSearch } = props;

  const [organizationNameState, setOrganizationNameState] = useState<string>(
    defaultSearch ?? "",
  );
  const debouncedOrganizationNameState = useDebounce(organizationNameState, 500);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    handleSearch(debouncedOrganizationNameState);
  }, [debouncedOrganizationNameState, handleSearch]);

  return (
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h1>
        <div className="w-full max-w-xs">
          <Input
            value={organizationNameState}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOrganizationNameState(e.target.value)
            }
            placeholder={placeholder}
          />
        </div>
      </header>
  );
};

export default MainSearchComponent;
