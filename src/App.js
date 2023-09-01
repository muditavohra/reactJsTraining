import logo from './logo.svg';
import './App.css';
import CounterApp from './components/CounterApp';
import AuthApp from './components/AuthApp';

function App() {
  return (
    <div className="App">
      <CounterApp/>
      <AuthApp/>
    </div>
  );
}

export default App;
