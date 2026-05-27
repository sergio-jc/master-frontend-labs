import { switchRoutes } from "@/core";
import { Link, NavLink } from "react-router";

const NavbarComponent = () => {
  const labs = [
    {
      id: "organizations",
      label: "Organizations",
      to: switchRoutes.organizations,
    },
    {
      id: "members",
      label: "Members",
      to: switchRoutes.organizationMembers,
    },
  ];
  return (
    <nav className="flex items-center justify-between p-4 py-3 bg-zinc-900">
      <Link to={switchRoutes.root}>
        <h1 className="text-2xl font-bold">React Labs</h1>
      </Link>

      <ul className="flex items-center gap-4">
        {labs.map((lab) => (
          <li key={lab.id}>
            <NavLink
              key={lab.label}
              to={lab.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium bg-zinc-800 px-2 py-1 rounded-md"
                  : "text-zinc-400 hover:text-white font-medium"
              }
            >
              {lab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
