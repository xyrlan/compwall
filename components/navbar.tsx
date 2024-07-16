import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";

import {
  SearchIcon,
  Logo,
} from "@/components/icons";
import SelectComponent, { SelectData } from "./select";
import SearchInput from "./search-input";

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
    <NextUINavbar maxWidth="full" position="sticky" className="z-50 sticky top-0">
      <NavbarContent className="w-[250px]" justify="center">

        <NextLink href="/" className="cursor-pointer">
          <Logo width={100} height={100} />
        </NextLink>

      </NavbarContent>
      <NavbarContent className="" justify="start">
        <NavbarItem className="hidden lg:flex basis-2/12"><SelectComponent selectData={selectData} /></NavbarItem>
        <NavbarItem className="hidden lg:flex basis-10/12"><SearchInput placeholder="Search in prod..."/></NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput placeholder="Search in prod..."/>
      </NavbarMenu>
    </NextUINavbar>
  );
};
