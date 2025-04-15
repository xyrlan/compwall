"use client";
import React from "react";
import { Tabs, Tab } from "@heroui/react";

export default function TabsComponent({
  items,
}: {
  items: { name: string; key: string; content: React.ReactNode }[];
}) {
  const [selected, setSelected] = React.useState(items[0].key);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        className="sticky top-16 z-50"
        selectedKey={selected}
        onSelectionChange={setSelected as any}
      >
        {items.map((item) => (
          <Tab key={item.key} title={item.name}>
            {item.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
