import Link from "next/link";
import {
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


export default function NavabarComponent() {
  return (
    <Navbar fluid className="text-xl tengah z-50 mb-20 fixed bg-slate-800">
      <NavbarBrand as={Link} href="/" className="">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
          Aqmal Code
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="">
        <NavbarLink className="text-base text-white" href="#home" as={Link} >
          Home
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#about" as={Link}>
          About
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#skills" as={Link}>
          Skills
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#visi" as={Link}>
          Vision & Mision
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#social" as={Link}>
          Social Media
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
