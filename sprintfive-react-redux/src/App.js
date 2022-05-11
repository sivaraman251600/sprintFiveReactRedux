import './App.css';
import {Provider} from 'react-redux'
import HookCoffeeContainer from './components/HookCoffeeContainer';
import { store } from './redux/coffee/CoffeeStore';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <UserDetail />
      </Provider>
    </div>
  );
}

export default App;
