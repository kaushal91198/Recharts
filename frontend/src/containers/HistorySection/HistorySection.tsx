import React, { useState } from "react";
import AreaChart from "../../components/AreaChart/AreaChart";
import BarChartSection from "../../components/BarChart/BarChartSection";
import LineChartSection from "../../components/LineChart/LineChart";
import TabContent from "../../components/Tab/TabContent/TabContent";
import TabItem from "../../components/Tab/TabItem/TabItem";

type Props = {};

const HistorySection = (props: Props) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs border h-full bg-white  rounded-lg">
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

      <div className="outlet  h-[calc((100vh-3.5rem)/2-4rem)]">
        <TabContent id="tab1" activeTab={activeTab}>
          <AreaChart />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <BarChartSection />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <LineChartSection />
        </TabContent>
      </div>
    </div>
  );
};

export default HistorySection;
