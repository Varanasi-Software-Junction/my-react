import logo from './logo.svg';
import './App.css';
import VsjExpenseCalculator from './components/VsjExpenseCalculator';
import VsjExpense from './components/VsjExpense';
import VsjWeather from './components/VsjWeather';

function App() {
  return (
   <div  class="container pt-5 bg-primary text-white text-center" id="root">
   <div class="row">
  <div class="col-sm-1"></div>
  <div class="col-sm-10 bg-white">
  {/*<VsjExpenseCalculator></VsjExpenseCalculator>*/}
  
  </div>
  <div class="col-sm-1"></div>  
   </div>
   <br/>
{/*<VsjExpense></VsjExpense>}*/}
<VsjWeather></VsjWeather>
   
   
   </div>
  );
}

export default App;
