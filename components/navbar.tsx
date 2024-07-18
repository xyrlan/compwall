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
    <NextUINavbar maxWidth="full" position="sticky" className="z-50 sticky top-0 bg-[#273343]" classNames={{wrapper: "px-0"}} >
      <NavbarContent className="w-[250px]" justify="center">

        <NextLink href="/" className="cursor-pointer">
          <Logo width={100} height={100} />
        </NextLink>

      </NavbarContent>
      <NavbarContent className="pr-6 flex-row justify-between" justify="start">
        <NavbarItem className="hidden lg:flex "><SelectComponent selectData={selectData} /></NavbarItem>
        <NavbarItem className="hidden lg:flex flex-grow"><SearchInput placeholder="Search in prod..."/></NavbarItem>
        {/* <NavbarItem className="hidden lg:flex "><ThemeSwitch /></NavbarItem> */}
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
