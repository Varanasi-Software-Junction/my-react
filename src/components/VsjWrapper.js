
import './vsjwrapper.css';
function VsjWrapper(props)
{
	const style="10";
	
	return <div className="vsjwrapper">
	{props.children}
	{style}
	</div>
}
export default VsjWrapper;