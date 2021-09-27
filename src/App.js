import logo from './logo.svg';
import './App.css';
import VsjForm from './components/VsjForm';
import VsjMultipleObject from './components/VsjMultipleObject';

function App() {
  return (
    <div className="App">
	<h1>Form</h1>
	<VsjForm></VsjForm>
	<h1>Multiple</h1>
	<VsjMultipleObject></VsjMultipleObject>
    </div>
  );
}

export default App;
