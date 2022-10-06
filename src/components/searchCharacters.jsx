import { useEffect } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";

const SearchCharacters = () => {
  const { q } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const handleOnChange = (event) => {
    submit(event.currentTarget.form);
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
