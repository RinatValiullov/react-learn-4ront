import tw from "twin.macro";

const SearchBarInput = tw.input`
  border
  mb-5
  p-2
  w-full
`;

const SearchBar = () => {
  return (
    <>
      <SearchBarInput placeholder="search..." />
    </>
  );
};

export { SearchBar };
