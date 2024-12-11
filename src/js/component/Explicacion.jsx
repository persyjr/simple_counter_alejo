import React, { useState, useEffect  } from 'react'; // importo use State hook

//function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {//estoy decostruyendo mis props directamente
// Este codigo me permite entender como funciona el hook useState, simplemente me permite cambiar el estado de una variable
// desde el front end no me modifica la base de datos, todo lo hago desde aca mismo en tiempo real.
const Explicacion = (props) => { 
   
    return (
        <div>
            <h1 className='d-flex justify-content-center'> Explicación</h1>
            <ul>
                <li>El hook useState es un hook de estado</li>
                <li>curioso que en este ejercicio nos enseñaron a renderizar este componente sin usar useState, componente sin estado</li>
                <li>Se hace renderizando por fuera el componente varias veces</li>
                <li>NO ES CONVENIENTE pero  practico para mostrar que se puede configurar este mismo contador sin use efect</li>
            </ul>
            <h1 className='d-flex justify-content-center'> Ventajas con React</h1>
            <ul>
                <li>Puedo usar useState para modificar valores de una variable, lo cual me ahorra tiempo en crear funciones con javascript.</li>
                <li>puedo renderizar de igual forma que como lo hacia con djanfgo, pero con la ventaja de usar componentes que son fáciles de reutilizar</li>
                <li>Es mucho más sencillo hacer un front</li>
                <li>las interacciones y efectos, son geniales</li>
                <li>puedo hacer aplicaciones mobiles tambien con React</li>
            </ul>
            <h2 className='d-flex justify-content-center'> Notas de este proyecto</h2>
            <ul>
                <li>usa una version competa de React es decir es RCA</li>
                <li>esta configurado con webpack, por lo tanto la carpeta de configuracion del index con el componente app no es la public, se llama template.html y esta fuera de public</li>
                <li>Se configuro con webpack para que solo renderizara template.html</li>
                <li>le presentó problemas a los profes la explicacion de las hooks.</li>
                <li>a configuracion de las carpetas si importa, si estas usando React lite o RCA</li>
                <li>se pueden dejar los modulos de node sin necesidad de un ambiente virtual</li>
            </ul>
        </div>
    );
}

export default Explicacion