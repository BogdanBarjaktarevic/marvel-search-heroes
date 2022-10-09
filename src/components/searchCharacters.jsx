import {
  Form,
  useLoaderData,
  useSubmit,
  useNavigation,
} from "react-router-dom";

const SearchCharacters = () => {
  const { q } = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  const handleOnChange = (event) => {
    const isFirstSearch = q == null;
    submit(event.currentTarget.form, {
      replace: !isFirstSearch,
    });
  };

  return (
    <div>
      <Form id="search-form" role="search">
        <input
          id="q"
          className={searching ? "loading" : ""}
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
          defaultValue={q}
          onChange={handleOnChange}
        />
        <div id="search-spinner" aria-hidden hidden={!searching} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>
    </div>
  );
};

export default SearchCharacters;
