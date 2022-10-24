import SvgIcons from "../assets/index";

const Icon = ({ name, className, click }) => {
  const IconComponent = SvgIcons[name];
  return <IconComponent className={className} onClick={click} />;
};

export default Icon;
