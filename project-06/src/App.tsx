import tw from "twin.macro";
import { SearchBar } from "./components/Search/Search";
import { Table } from "./components/Table/Table";

const Container = tw.div`
  p-6
  w-full
  text-center
`;

const Title = tw.h1`
  text-2xl
  font-semibold
  mb-5
`;

const App = () => {
  return (
    <Container>
      <Title>Pruduct Table</Title>
      <SearchBar />
      <Table />
    </Container>
  );
};

export default App;
