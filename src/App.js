import { GlobalStateProvider } from './GlobalState';

import LoginEmployeeForm from './components/LoginEmployeeForm';
import RegisterEmployeeForm from './components/RegisterEmployeeForm';
import UpdateInformationForm from './components/UpdateInformationForm';

function App() {
  return (
    <GlobalStateProvider>
      <div>
        <RegisterEmployeeForm />
        <LoginEmployeeForm />
        <UpdateInformationForm />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
