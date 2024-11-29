import ContextProvider from "./components/ContextProvider";
import Page from "./Page";

function App() {
  return (
    <>
      <ContextProvider>
        <Page />
      </ContextProvider>
    </>
  );
}

export default App;
