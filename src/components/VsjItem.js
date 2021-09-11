import './vsjitem.css';
import VsjSubItem from './VsjSubItem';
function VsjItem(props)
{
	
	return <p className="vsj">
	<VsjSubItem message="Sub Item"/>
	<h2>{props.message}</h2>
	<img src='Varanasi Software Junction Phone Logo.png'/>
	</p>;
}
export default VsjItem;