import { Link } from "react-router";

import { routes } from "@/core";
import type { MemberListItem } from "./members-list.vm";
import { useMemo, useState } from "react";
import { DEFAULT_MEMBERS_PER_PAGE } from "@/common/constants";
import { Button } from "@/common/ui/button";
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
              <li key={member.login} className="contents">
                <Link
                  className="flex items-center gap-4 cursor-pointer border border-zinc-800 rounded-lg p-2"
                  to={routes.organizationMemberDetails(
                    organizationId ?? "",
                    member.login,
                  )}
                >
                  <img
                    src={member.avatar_url}
                    alt={member.login}
                    className="w-10 aspect-square rounded-full border border-zinc-700 object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold underline underline-offset-2">
                      {member.login}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-2">
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Previous
            </Button>
            <span>
              {page} of {totalPages}
            </span>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-center text-zinc-500">No se encontraron miembros</p>
      )}
    </section>
  );
}

export default MembersListComponent;
