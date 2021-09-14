import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const habdleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value); //agrega el elemento del input al arreglo
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //previene el comportamiento por defeto del formulario

        if (inputValue.trim().length > 2) {//para que no agregue valores vacios
            setCategories (cat => [inputValue, ...cat]); //agrega un elemento a la lista
            setInputValue(''); //borra el valor del input
        }

        
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            {/**<h1>{inputValue}</h1> Probando el inputValue */}
            <input
                type="text"
                value={inputValue} //valor que se escribe en el input
                onChange= {habdleInputChange} //cuando escribimos en el input se dispara esta funcion
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
