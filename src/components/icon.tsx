import SvgIcons from "../assets/index";

interface IconProps {
  className: string;
  name: OnlyKeys;
}

type OnlyKeys = keyof typeof SvgIcons;

const Icon = ({ name, className }: IconProps) => {
  const IconComponent: React.FC<React.SVGProps<SVGSVGElement>> = SvgIcons[name];
  return <IconComponent className={className} />;
};

export default Icon;
