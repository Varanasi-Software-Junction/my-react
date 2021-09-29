import logo from './logo.svg';
import './App.css';
import VsjForm from './components/VsjForm';
import VsjMultipleObject from './components/VsjMultipleObject';
import VsjMultiplePrev from './components/VsjMultiplePrev';
import Addition from './components/Addition';

function App() {
  return (
    <div className="App">
	<h1>Form</h1>
	<VsjForm></VsjForm>
	<h1>Using Objects</h1>
	<VsjMultipleObject></VsjMultipleObject>
	<VsjMultiplePrev/>
	
    <Addition></Addition>
	
	
	
    </div>
  );
}

export default App;
