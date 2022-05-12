import React, { useState, useEffect } from "react";

const CounterFunction = () => {
    const [ count, setCount ] = useState(0);
    const [ nombre, setNombre ] = useState("Daniel");

    const sumOne = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        //Like componentDidMount()
        const newNombre = `${nombre}+${count}`;
        setNombre(newNombre);

        //Like componentWillUnmount()
        return () => {
            console.log("Terminé");
        }
    }, [count]);

    return(
        <div>
            <h1>{nombre}</h1>
            <p>{count}</p>
            <button onClick={() => sumOne()}>Sumar 1</button>
        </div>
    )
};

export default CounterFunction;