"use client";
import { Input } from "@heroui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <Input
    size="sm"
      fullWidth
      aria-label="Search"
      color="default"
      labelPlacement="outside"
      placeholder={placeholder}
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
};

export default SearchInput;
