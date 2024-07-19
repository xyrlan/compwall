"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function TabsComponent({ items }: { items: { name: string, key: string, content: React.ReactNode }[] }) {
  const [selected, setSelected] = React.useState(items[0].key);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected as any}
        className="sticky top-16 z-50"
      >
        {items.map((item, index) => (
          <Tab key={item.key} title={item.name}>

                {item.content}
       
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
