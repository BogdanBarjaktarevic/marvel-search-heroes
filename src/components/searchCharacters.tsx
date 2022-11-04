import { useEffect } from "react";
import {
  Form,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { RootLoaderData } from "../types/character.type";
import Icon from "./icon";

const SearchCharacters = () => {
  const { q } = useLoaderData() as RootLoaderData;
  const submit = useSubmit();
  const navigation = useNavigation();

  useEffect(() => {
    (document.getElementById("q") as HTMLInputElement).value = q;
  }, [q]);

  // console.log(navigation);

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const isFirstSearch = q == null;
    submit(event.currentTarget.form, {
      replace: !isFirstSearch,
    });
  };

  return (
    <Form id="search-form" role="search">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <Icon
            className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${
              searching ? "animate-spin" : ""
            }`}
            name={searching ? "loading" : "search"}
          />
        </div>
        <input
          id="q"
          aria-label="Search characters"
          placeholder="Search characters..."
          type="search"
          name="q"
          defaultValue={q}
          onChange={handleOnChange}
          className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </Form>
  );
};

export default SearchCharacters;
