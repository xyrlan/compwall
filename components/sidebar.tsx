"use client";
import React from "react";

import SidebarListbox from "./sidebar-listbox";

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 p-2 h-full w-[250px] fixed top-0 left-0 pt-16 z-40">
      <SidebarListbox />
    </div>
  );
};
