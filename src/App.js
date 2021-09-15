import RegisterEmployeeForm from './components/RegisterEmployeeForm';
import { GlobalStateProvider } from './GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <RegisterEmployeeForm />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
