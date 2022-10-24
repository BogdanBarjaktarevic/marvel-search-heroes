export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  console.log("q", q);
  const charsArr = Object.values(JSON.parse(localStorage.getItem("favChars")));
  const characters = charsArr.filter((character) =>
    character.name.toLowerCase().includes(q)
  );
  return { characters, q };
}
