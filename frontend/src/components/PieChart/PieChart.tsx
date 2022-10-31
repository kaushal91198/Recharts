import React, { PureComponent, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
  getProductCategories,
  getProducts,
} from "../../redux/features/ProductSlice/ProductSlice";

type Props = {};

const PieChartSection = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductCategories());
  }, [dispatch]);

  const product = useAppSelector((state) => state.Products.productdetails);
  const productCategory = useAppSelector(
    (state) => state.Products.productCategorydetails
  );

  return (
    <div className="w-full h-[calc((100vh-3.5rem)/2-4rem)]  m-auto">
      <ResponsiveContainer className={"w-full h-full"}>
        <PieChart width={200} height={200}>
          <Pie
            data={productCategory}
            dataKey="marketShare"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={product}
            dataKey="marketShare"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartSection;
