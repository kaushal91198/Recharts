import React, { ReactNode } from "react";

type Props = {
  activeTab: string;
  id: string;
  children: ReactNode;
};

const TabContent = (props: Props) => {
  const { activeTab, id, children } = props;
  return activeTab === id ? (
    <div className="TabContent overflow-auto  h-[calc((100vh-3.5rem)/2-4rem)]">
      {children}
    </div>
  ) : null;
};

export default TabContent;
