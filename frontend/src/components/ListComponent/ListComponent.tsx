import React from "react";

type Props = {};

const ListComponent = (props: Props) => {
  return (
    <table className="table-auto  h-full w-full text-left">
      <thead>
        <tr>
          <th>ID</th>
          <th>Reference</th>
          <th>Value</th>
          <th>Dec</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(20)].map((i: any, index: number) => (
          <tr className={index % 2 !== 0 ? "bg-slate-100" : ""}>
            <td>ID</td>
            <td>Reference</td>
            <td>Value</td>
            <td>Dec</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListComponent;
