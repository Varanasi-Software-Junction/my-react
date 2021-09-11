import logo from './logo.svg';
import './App.css';
import VsjItem from './components/VsjItem';
import VsjWrapper from './components/VsjWrapper';
function App() {
  return (
    <div className="App">
     <h1>Welcome to VSJ React</h1>
	 <VsjItem message="Hello Varanasi Software Junction"></VsjItem>
	 <VsjItem message="Learn React Here"></VsjItem>
	 <VsjWrapper>Hello Wrapper</VsjWrapper>
    </div>
  );
}

export default App;
