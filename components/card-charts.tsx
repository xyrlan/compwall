import React from "react";
import { Divider } from "@heroui/react";

const CardCharts = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-xl">
      <h3 className="flex flex-row items-center font-medium bg-gray-200 dark:bg-stone-800 py-4 px-4 rounded-t-xl">
        {title}
      </h3>
      <Divider />
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

export default CardCharts;
