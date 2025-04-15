import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
} from "@heroui/navbar";
import NextLink from "next/link";

import SelectComponent, { SelectData } from "./select";
import SearchInput from "./search-input";

import { Logo } from "@/components/icons";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {
  const selectData: SelectData = {
    label: "Environment",
    placeholder: "Select environment",
    options: [
      { value: "Production" },
      { value: "Staging" },
      { value: "Development" },
    ],
  };

  return (
    <NextUINavbar
      className="z-50 sticky top-0 bg-[#273343] lg:px-5"
      classNames={{ wrapper: "px-0" }}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent justify="start" >
        <NextLink className="cursor-pointer w-[230px]" href="/">
          <Logo height={100} width={100} />
        </NextLink>
        <NavbarItem className="hidden lg:flex ">
          <SelectComponent selectData={selectData} />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex flex-grow">
          <SearchInput placeholder="Search in prod..." />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex "><ThemeSwitch /></NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput placeholder="Search in prod..." />
      </NavbarMenu>
    </NextUINavbar>
  );
};
