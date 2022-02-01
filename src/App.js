import { AddTransaction } from "./components/AddTransaction";
import Balence from "./components/Balence";
import Header from "./components/Header";
import IncomeExpensive from "./components/IncomeExpensive";
import { TransactionList }  from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (

    <GlobalProvider>
      <Header />

      <div className="container">
        <Balence />     
        <IncomeExpensive />  
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

  );
}

export default App;
