import React, { useState, useEffect } from "react";
import { SlArrowDownCircle } from "react-icons/sl";
//create your first component
const Home = () => {
	const [color, setColor] = useState('')
	const[ show, setShow] = useState ()
useEffect(()=> {
	console.log(color)
},[color])
	return (
		<div className="app">
			<div className="trafficlight"></div>
			<div className="containersemaforo">
				<div className={`light red ${color=== 'red' ? 'glow' : ''} `} onClick={() => setColor('red')}></div>
				<div className={`light yellow ${color=== 'yellow' ? 'glow' : ''} `} onClick={() => setColor('yellow')}></div>
				<div className={`light green ${color=== 'green' ? 'glow' : ''} `} onClick={() => setColor('green')}></div>
				{show?<div className={`light purple ${color=== 'purple' ? 'glow' : ''} `} onClick={() => setColor('purple')}></div>: ''}
				<button onClick={()=>setShow(!show)}><SlArrowDownCircle /></button>

			</div>
		</div>
	);
};

export default Home;
