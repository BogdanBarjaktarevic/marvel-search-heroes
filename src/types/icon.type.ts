import SvgIcons from "../assets/index";

export type SvgIconsKeys = keyof typeof SvgIcons;

export interface IconProps {
  className?: string;
  name: SvgIconsKeys;
}
