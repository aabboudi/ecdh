import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TiktokIcon,
  InstagramIcon,
  HeartFilledIcon,
  Logo,
  LinkedinIcon,
} from "@/components/icons";

const Donate = () => {
  return (
    <Button
      as={Link}
      className="text-sm font-normal text-default-600 bg-default-100"
      href={siteConfig.links.donate}
      startContent={<HeartFilledIcon className="text-success" />}
      variant="ghost"
    >
      Donate
    </Button>
  );
};

export const Navbar = () => {
  return (
    <NextUINavbar
      className="fixed shadow-lg top-0 z-50"
      maxWidth="2xl"
      position="static"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <Image
              alt="ECDH Logo"
              className="absolute mt-3 ml-[-30px]"
              height={90}
              src="/ecdh_logo.svg"
              width={90}
            />
            <p className="font-bold text-inherit ml-12">ECDH</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-8 justify-start ml-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium font-semibold",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 lg:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <Link
            isExternal
            aria-label="LinkedIn"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Tiktok" href={siteConfig.links.tiktok}>
            <TiktokIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Donate />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <Donate />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-12 flex flex-col text-center gap-6">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <Divider />
          <NavbarItem className="flex justify-center gap-4">
            <Link
              isExternal
              aria-label="LinkedIn"
              href={siteConfig.links.linkedin}
            >
              <LinkedinIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <InstagramIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="Tiktok" href={siteConfig.links.tiktok}>
              <TiktokIcon className="text-default-500" />
            </Link>
            <Divider orientation="vertical" />
            <ThemeSwitch />
          </NavbarItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
