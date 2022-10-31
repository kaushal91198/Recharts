import React from "react";
import { SidebarRoutes } from "../../constants/constant";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="w-16 h-full    bg-slate-200">
      <div className="bg-neutral-800 rounded-lg my-3 mx-3 py-auto h-[calc(100vh-5rem)]">
        <ul className="flex flex-col items-center justify-center">
          {SidebarRoutes.map((i) => (
            <li className="w-6 py-4" key={i.label}>
              <img src={i.icon} alt="" />
            </li>
          ))}
        </ul>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
