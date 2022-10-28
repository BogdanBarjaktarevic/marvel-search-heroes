import SvgIcons from "../assets/index";
import { IconProps } from "../types/icon.type";

const Icon = ({ name, className }: IconProps) => {
  const IconComponent = SvgIcons[name];
  return <IconComponent className={className} />;
};

export default Icon;
