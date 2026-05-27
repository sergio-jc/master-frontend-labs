import React, { type PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-6">{children}</div>;
};

export default MainLayout;
