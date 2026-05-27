import React, { type PropsWithChildren } from "react";
import NavbarComponent from "./components/navbar.component";

const MainLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen w-full">
      <NavbarComponent />
      <main className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-6">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
