import './App.css';
import {queryClient} from "./Utils/reactQuery";
import {QueryClientProvider} from "@tanstack/react-query";
import {InventoryList} from "./Components/InventoryList";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" data-testid="app">
        <header className="App-header">
          <img src="https://fulfil.universalstore.com/static/version1717065130/frontend/universalstore/universalstore/default/images/logo.svg" className="App-logo" alt="logo" />
        </header>
        <InventoryList/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
