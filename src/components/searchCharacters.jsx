import { Form, useLoaderData, useSubmit } from "react-router-dom";

const SearchCharacters = () => {
  const { q } = useLoaderData();
  const submit = useSubmit();

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
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
          defaultValue={q}
          onChange={handleOnChange}
        />
      </Form>
    </div>
  );
};

export default SearchCharacters;
