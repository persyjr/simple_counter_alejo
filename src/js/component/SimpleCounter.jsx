import React, { useState, useEffect  } from 'react'; // importo use State hook

//function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {//estoy decostruyendo mis props directamente
const SimpleCounter = (props) => { 
    const [seconds, setSeconds] = useState(0); // Inicializamos el estado

    useEffect(() => {
        // Configuramos el intervalo
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1); // Incrementamos el estado usando su valor previo
        }, 1000);

        // Limpiamos el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []); // Usamos un array vacío para que solo se configure al montar el componente

    // Cálculos para los dígitos
    let four = Math.floor(seconds / 1000) % 10;
    let three = Math.floor(seconds / 100) % 10;
    let two = Math.floor(seconds / 10) % 10;
    let one = Math.floor(seconds / 1) % 10;

    return (
        <div>        
            <h1 className='d-flex justify-content-center'> Simple Counter Automatic</h1>
                <h2 className='d-flex justify-content-center'> Use State Hook and UseEffect</h2>
            <div className="bigCounter d-flex justify-content-center w-100">
                <div className="calendar">
                    <i className="far fa-clock"></i>
                </div> 
                <div className="four">{four}</div>
                <div className="three">{three}</div>
                <div className="two">{two}</div>
                <div className="one">{one}</div>
            </div>
        </div>
    );
}

export default SimpleCounter