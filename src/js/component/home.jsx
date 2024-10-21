import React, { useState, useEffect} from "react";
import Counter from "./Counter.jsx";
import PropTypes from "prop-types";


//create your first component
const Home = () => {
	
	const [counter, setCounter] = useState (0)

	useEffect(()=>{
		const interval = setInterval(()=> {
			setCounter ((prevCounter)=>prevCounter+1)
		},1000)
	},[])

	const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;

	return (
			<Counter
			six = {six}
			five = {five}
			four = {four}
			three = {three}
			two = {two}
			one = {one}
			/>
	);
};

export default Home;