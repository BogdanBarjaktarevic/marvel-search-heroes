import { useLoaderData } from "react-router-dom";

const Characters = () => {
  const characters = useLoaderData();

  return <div>Characters component</div>;
};

export default Characters;
