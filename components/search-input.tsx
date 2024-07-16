"use client";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "lucide-react";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <Input
      aria-label="Search"
      fullWidth
      color="default"
      labelPlacement="outside"
      placeholder={placeholder}
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  )
};

export default SearchInput;