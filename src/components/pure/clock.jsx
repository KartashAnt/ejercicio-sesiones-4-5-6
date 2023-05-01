import React, { useEffect, useState } from 'react';

const Clock = () => {

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState("Martín");
    const [apellidos, setApellidos] = useState("San José");
    
    const tick= ()=>{
        setFecha(new Date());
        setEdad((edad)=>edad+1);
    }

    useEffect(() => {
        const timerID=setInterval(() => {
            tick();
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual:
                {fecha.toLocaleTimeString()}
            </h2>
            <h3>{nombre} {apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    );
}

export default Clock;
