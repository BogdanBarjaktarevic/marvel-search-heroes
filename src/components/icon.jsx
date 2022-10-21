import SvgIcons from "../assets/index";

const Icon = ({ name, className }) => {
  const IconComponent = SvgIcons[name];
  return <IconComponent className={className} />;
};

export default Icon;
