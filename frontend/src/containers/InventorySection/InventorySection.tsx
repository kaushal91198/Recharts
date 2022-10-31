import React, { useState } from "react";
import ListComponent from "../../components/ListComponent/ListComponent";
import TabContent from "../../components/Tab/TabContent/TabContent";
import TabItem from "../../components/Tab/TabItem/TabItem";

type Props = {};

const InventorySection = (props: Props) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs border  bg-white h-full rounded-lg">
      <ul className="nav flex flex-row w-full">
        <TabItem
          title="Tab 1"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Tab 2"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabItem
          title="Tab 3"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet overflow-auto ">
        <TabContent id="tab1" activeTab={activeTab}>
          <ListComponent />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <ListComponent />
          <ListComponent />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ListComponent />
        </TabContent>
      </div>
    </div>
  );
};

export default InventorySection;
