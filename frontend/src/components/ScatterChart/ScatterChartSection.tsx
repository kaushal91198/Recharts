import React, { PureComponent, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getCustomerBase } from "../../redux/features/CustomerBaseSlice/CustomerBaseSlice";

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
type Props = {};

const ScatterChartSection = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomerBase());
  }, [dispatch]);

  const customerbase = useAppSelector(
    (state) => state.Customerbase.customerBasedetail
  );

  return (
    <div className="h-[calc((100vh-3.5rem)/2-4rem)]">
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="spending" name="spending" unit="cash" />
          <YAxis dataKey="age" name="age" unit="yrs" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={customerbase} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartSection;
