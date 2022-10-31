import { title } from "process";
import React from "react";

type Props = {
  // children: string;
  title: string;
  varient?: string;
};

const Button = (props: Props) => {
  const { title } = props;
  return (
    <button className="px-4 py-2 rounded-lg text-white mx-2 bg-neutral-800">
      {title}
    </button>
  );
};

export default Button;
