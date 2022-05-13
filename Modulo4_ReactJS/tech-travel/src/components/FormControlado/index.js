import React, { useState } from "react";

const FormControlado = () => {
    const [ value, setValue ] = useState("");

    const onChange = (event) => {
        setValue(event.currentTarget.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    }

    return(
        <form onSubmit={onSubmit}>
            <h1>Mi input</h1>
            <input value={value} onChange={onChange}/>
            <button type="submit">Continuar</button>
        </form>
    )
}

export default FormControlado;