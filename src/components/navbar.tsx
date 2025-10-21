import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={onClick}
        variant="paragraph"
        className="font-medium hover:text-light-blue-600 transition-colors duration-200 cursor-pointer"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Speakers",
    href: "#speakers",
  },
  {
    name: "Program",
    href: "#program",
  },
  {
    name: "Sponsors",
    href: "#sponsors",
  },
  {
    name: "Registration",
    href: "#registration",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color="white"
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/public/image/logo.png"
              alt="GATE 2025 Logo"
              width={120}
              height={60}
              className="h-20 w-auto"
              priority
            />
          </div>
          <Typography
            variant="small"
            color="blue-gray"
            className="hidden lg:block opacity-80 max-w-xs"
          >
            Global Summit of Advanced &<br />
            Third Space Endoscopy
          </Typography>
        </div>
        <ul className="ml-10 hidden items-center gap-6 lg:flex text-gray-900">
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            color="light-blue"
            size="sm"
            className="hover:scale-105 transition-transform duration-200 shadow-lg"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("registration")?.offsetTop,
                behavior: "smooth",
              });
            }}
          >
            Register Now
          </Button>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-2 md:py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Button
              color="light-blue"
              className='h-16'
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("registration")?.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
