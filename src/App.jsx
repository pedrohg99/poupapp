import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { SearchInput } from "./components/SearchInput";

function App() {
  return (
    <Container>
      <Aside />
      <main>
        <SearchInput />
      </main>
    </Container>
  );
}

export default App;
