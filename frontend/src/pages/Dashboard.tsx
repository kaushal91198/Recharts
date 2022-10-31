import ForcastSection from "../containers/ForcastSection/ForcastSection";
import HistorySection from "../containers/HistorySection/HistorySection";
import InventorySection from "../containers/InventorySection/InventorySection";
import RecordSection from "../containers/RecordSection/RecordSection";
import TransactionSection from "../containers/TransactionSection/TransectionList";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="w-full p-3 bg-slate-200 grid grid-flow-row gap-4 h- grid-cols-3 ">
      <div className="col-span-2 h-[calc((100vh-3.5rem)/2-1.5rem)]">
        <HistorySection />
      </div>
      <div className="col-span-1 h-[calc((100vh-3.5rem)/2-1.5rem)]">
        <ForcastSection />
      </div>
      <div className="col-span-1 h-[calc((100vh-3.5rem)/2-1.5rem)]">
        <InventorySection />
      </div>
      <div className="col-span-1 h-[calc((100vh-3.5rem)/2-1.5rem)]">
        <RecordSection />
      </div>
      <div className="col-span-1 h-[calc((100vh-3.5rem)/2-1.5rem)]">
        <TransactionSection />
      </div>
    </div>
  );
};

export default Dashboard;
