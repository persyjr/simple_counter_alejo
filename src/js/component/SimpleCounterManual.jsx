import React, { useState, useEffect  } from 'react'; // importo use State hook

//function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {//estoy decostruyendo mis props directamente
// Este codigo me permite entender como funciona el hook useState, simplemente me permite cambiar el estado de una variable
// desde el front end no me modifica la base de datos, todo lo hago desde aca mismo en tiempo real.
const SimpleCounterManual = (props) => { 
    const [seconds, setSeconds] = useState(0); // Inicializamos el estado

    

    return (
        <div>
            <h1 className='d-flex justify-content-center'> Simple Counter Manual</h1>
            <h2 className='d-flex justify-content-center'> Use State Hook</h2>
            <div className="bigCounter d-flex justify-content-center w-100">
                <div className="calendar">
                    <i className="far fa-clock"></i>
                </div>            
                <button onClick={()=>setSeconds(seconds-1)}>-</button>
                    <div>{seconds}</div>
                <button onClick={()=>setSeconds(seconds+1)}>+</button>
            </div>
        </div>
    );
}

export default SimpleCounterManual