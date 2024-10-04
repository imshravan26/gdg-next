"use client";

import { FC } from "react";
import { SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Switch } from "@nextui-org/switch";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const isLightTheme = theme === "light";

  const onChange = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  if (isSSR) {
    // Prevent rendering on SSR until mounted
    return null;
  }

  return (
    <Switch
      size="lg"
      color="success"
      defaultSelected={!isLightTheme} // Switch checked when in dark mode
      onChange={() => onChange()} // Toggle theme
      startContent={<SunFilledIcon />}
      endContent={<MoonFilledIcon />}
      className={className}
    />
  );
};
