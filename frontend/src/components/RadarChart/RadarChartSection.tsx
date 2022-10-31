import React, { PureComponent, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { getSales } from "../../redux/features/SalesSlice/SalesSlice";

const data = [
  {
    subject: "Math",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

type Props = {};

const RadarChartSection = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSales());
  }, [dispatch]);

  const SalesList = useAppSelector((state) => state.Sales.salesdetail);

  return (
    <div className=" h-[calc((100vh-3.5rem)/2-4rem)]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SalesList}>
          <PolarGrid />
          <PolarAngleAxis dataKey="audience" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="unit"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartSection;
