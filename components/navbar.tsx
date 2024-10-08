"use client";
import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="shadow-md"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand className="flex-grow-0">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <svg
              width="75"
              height="35"
              viewBox="0 0 75 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8554 18.2161L30.0433 11.1834C30.7247 10.7893 31.3218 10.2648 31.8006 9.63993C32.2793 9.01504 32.6302 8.30196 32.8334 7.54143C33.0366 6.7809 33.0879 5.9878 32.9846 5.20741C32.8812 4.42703 32.6252 3.67464 32.231 2.99321C31.8369 2.31178 31.3124 1.71465 30.6875 1.23592C30.0626 0.757187 29.3496 0.406225 28.589 0.203072C27.053 -0.207216 25.417 0.00946137 24.0408 0.805437L2.99438 12.9536L17.8554 18.2161Z"
                fill="#EA4335"
              />
              <path
                d="M27.0329 34.6358C28.3523 34.6372 29.6353 34.2033 30.683 33.4013C31.7306 32.5994 32.4845 31.4741 32.8275 30.2001C33.1706 28.9261 33.0838 27.5745 32.5806 26.3549C32.0773 25.1352 31.1857 24.1157 30.0441 23.4543L8.98971 11.3022C7.6135 10.5073 5.97787 10.2916 4.44265 10.7027C2.90743 11.1137 1.59837 12.1178 0.803447 13.494C0.00852585 14.8702 -0.20714 16.5058 0.203894 18.041C0.614927 19.5763 1.61899 20.8853 2.9952 21.6802L24.0376 33.8284C24.9474 34.3569 25.9807 34.6355 27.0329 34.6358Z"
                fill="#4285F4"
              />
              <path
                d="M47.967 34.6358C49.0167 34.6384 50.0485 34.364 50.9582 33.8403L72.0007 21.6922L57.3306 16.3142L44.9637 23.4543C43.8207 24.1145 42.9275 25.1334 42.4227 26.3531C41.918 27.5728 41.8299 28.9249 42.1722 30.1997C42.5145 31.4746 43.268 32.6008 44.3157 33.4036C45.3635 34.2064 46.647 34.641 47.967 34.6398V34.6358Z"
                fill="#FBBC04"
              />
              <path
                d="M68.9961 24.135C70.3165 24.138 71.6008 23.7046 72.6495 22.9023C73.6981 22.0999 74.4523 20.9736 74.7948 19.6984C75.1373 18.4233 75.0489 17.0706 74.5434 15.8509C74.0378 14.6311 73.1435 13.6125 71.9993 12.9535L50.9569 0.805399C49.5807 0.0104784 47.945 -0.205186 46.4098 0.205847C44.8746 0.61688 43.5655 1.62094 42.7706 2.99715C41.9757 4.37336 41.76 6.00899 42.1711 7.54421C42.5821 9.07943 43.5862 10.3885 44.9624 11.1834L66.0048 23.3315C66.9138 23.858 67.9456 24.1352 68.9961 24.135Z"
                fill="#0F9D58"
              />
            </svg>
            <p className="font-bold text-xl pl-2">GDG RCOEM</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="flex items-center justify-end gap-10  "
        justify="end"
      >
        <ul className="hidden lg:flex items-center gap-8 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-gray-800 text-lg hover:text-gray-500 transition-colors dark:text-gray-200 dark:hover:text-gray-300"
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link color="foreground" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
