import type { MemberListItem } from "./members-list.vm";
import {
  MemberItemComponent,
  MembersListPaginationComponent,
} from "./components";
import { useMemo, useState } from "react";
import { DEFAULT_MEMBERS_PER_PAGE } from "@/common/constants";
import { Input } from "@/common/ui/input";

interface Props {
  membersList: MemberListItem[];
  organizationId: string;
}

function MembersListComponent(props: Props) {
  const { membersList = [], organizationId } = props;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const filteredMembersList = useMemo(() => {
    const filtered = membersList.filter((member: MemberListItem) =>
      member.login.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return filtered;
  }, [membersList, searchTerm]);

  const paginatedMembersList = useMemo(() => {
    return filteredMembersList.slice(
      (page - 1) * DEFAULT_MEMBERS_PER_PAGE,
      page * DEFAULT_MEMBERS_PER_PAGE,
    );
  }, [filteredMembersList, page]);

  const totalPages = Math.ceil(
    filteredMembersList.length / DEFAULT_MEMBERS_PER_PAGE,
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const onPreviousPage = () => {
    setPage(page - 1);
  };

  const onNextPage = () => {
    setPage(page + 1);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">
          Miembros
          <span className="text-sm text-zinc-500 pl-1.5 bg-zinc-900 rounded-full px-2 py-0.5">
            {membersList.length}
          </span>
        </h3>
        <Input
          type="text"
          placeholder="Buscar miembro"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-xs"
        />
      </div>
      {paginatedMembersList.length > 0 ? (
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {paginatedMembersList?.map((member: MemberListItem) => (
              <MemberItemComponent
                key={member.login}
                member={member}
                organizationId={organizationId}
              />
            ))}
          </ul>
          <MembersListPaginationComponent
            page={page}
            totalPages={totalPages}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        </div>
      ) : (
        <p className="text-center text-zinc-500">No se encontraron miembros</p>
      )}
    </section>
  );
}

export default MembersListComponent;
