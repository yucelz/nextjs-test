import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";

export function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="text-xl font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
