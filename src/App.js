import logo from './logo.svg';
import Counter from './features/counter/Counter'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter/>
    </div>
  );
}

export default App;
