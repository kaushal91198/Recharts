import React, { useState } from "react";
import PieChart from "../../components/PieChart/PieChart";
import RadarChartSection from "../../components/RadarChart/RadarChartSection";
import ScatterChartSection from "../../components/ScatterChart/ScatterChartSection";
import TabContent from "../../components/Tab/TabContent/TabContent";
import TabItem from "../../components/Tab/TabItem/TabItem";

type Props = {};

const ForcastSection = (props: Props) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs border h-full bg-white  rounded-lg">
      <ul className="nav flex h-10 flex-row w-full">
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

      <div className="outlet h-[calc((100vh-3.5rem)/2-4rem)]">
        <TabContent id="tab1" activeTab={activeTab}>
          <PieChart />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <ScatterChartSection />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <RadarChartSection />
        </TabContent>
      </div>
    </div>
  );
};

export default ForcastSection;
