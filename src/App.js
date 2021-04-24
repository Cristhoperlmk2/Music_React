import Home from "./componentes/Home"
import './App.css';
import { Provider } from 'react-redux'
import store from "./store/index"


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Home />
    </div>
    </Provider>
  );
}

export default App;
