"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export default function BreadcrumbsComponent({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <Breadcrumbs size="lg">
      {items.map((item, index) => (
        <BreadcrumbItem key={index} href={item.href}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
