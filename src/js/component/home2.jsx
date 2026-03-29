import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounterManual from "./SimpleCounterManual.jsx";
import SimpleCounter from "./SimpleCounter.jsx";
import Explicacion from "./Explicacion.jsx";

//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<h1 className="text-center text-primary mt-5">Simple Counter</h1>
				<SimpleCounter  />
				<SimpleCounterManual  />
				<Explicacion  />
			
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
