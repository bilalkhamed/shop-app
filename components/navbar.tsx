"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { Store as Logo, ShoppingCartIcon } from 'lucide-react'
import { Badge } from "@heroui/badge";
import useCart from "@/lib/useCart";

export const Navbar = () => {
  const { items } = useCart();
  const totalCartItems = items.reduce((total, item) => total + item.quantity, 0);


  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className=" sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ShopEase</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
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
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <div className="cursor-pointer transition-opacity hover:opacity-80 bg-transparent rounded-lg flex items-center justify-center !text-default-500 pt-px px-0 mx-0">
            <NextLink href='/cart'>
              <Badge size="lg" color="danger" content={totalCartItems}>
                <ShoppingCartIcon size={22} className="translate-y-[3px]" />
              </Badge>
            </NextLink>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <div className="cursor-pointer transition-opacity hover:opacity-80 bg-transparent rounded-lg flex items-center justify-center !text-default-500 pt-px px-0 mx-0">
          <NextLink href='/cart'>
            <Badge size="lg" color="danger" content={totalCartItems}>
              <ShoppingCartIcon size={22} className="translate-y-[3px]" />
            </Badge>
          </NextLink>
        </div>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  'foreground'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
