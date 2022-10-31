import React from "react";

type Props = {
  setActiveTab: Function;
  id: string;
  activeTab: string;
  title: string;
};

const TabItem = (props: Props) => {
  const { setActiveTab, id, activeTab, title } = props;
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li
      onClick={handleClick}
      className={
        activeTab === id
          ? "active bg-neutral-800 py-2 text-white px-4 rounded-t-lg"
          : " px-4 rounded-t-lg py-2"
      }
    >
      {title}
    </li>
  );
};

export default TabItem;
