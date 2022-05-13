import React, { useRef } from "react";

const FormControlado = () => {
    const inputRef = useRef();

    const onClickButton = () => {
        console.log(inputRef.current.value);
    }

    return(
        <div>
            <h1>Mi input</h1>
            <input ref={inputRef}/>
            <button onClick={onClickButton}>Continuar</button>
        </div>
    )
}

export default FormControlado;