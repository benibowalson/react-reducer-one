import './App.css';
import Counter from './benny-components/Counter';

const fName = 'Evidence'

function App() {
  return (
    <div className="App">
      <h1>Hello {fName}</h1>
      <Counter />
    </div>
  );
}

export default App;
