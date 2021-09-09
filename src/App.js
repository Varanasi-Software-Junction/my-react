import logo from './logo.svg';
import './App.css';
import VsjItem from './components/VsjItem';
function App() {
  return (
    <div className="App">
     <h1>Welcome to VSJ React</h1>
	 <VsjItem message="Hello Varanasi Software Junction"></VsjItem>
	 <VsjItem message="Learn React Here"></VsjItem>
    </div>
  );
}

export default App;
