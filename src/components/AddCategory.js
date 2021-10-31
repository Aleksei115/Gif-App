import React from "react";
import { useState } from "react";
import  PropTypes  from "prop-types";

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (element) => {
        setInputValue(element.target.value)
    }

    // La funcion que pasamos por props, es bidireccional, si hacemos un cambio desde el
    // componente hijo con la funcion de estado de una varible del componente padre
    // la variable del componente padre cambiara su estado
    // Hay que tratar la funcion de estado como si estuviera en el componente que se declaró

    const handleSubmit = (element) => {
        element.preventDefault();           //Evita que se recarge toda la pagina
        if(inputValue !== ''){
            setCategory (preValues => { return [inputValue,...preValues]} );   //hace que pongamos primero la nueva peticion y luego pre Values
            // Para resetear el estado despues del enter
        }
    }


    return (
        <form onSubmit = { handleSubmit } >
            <h2 className={'titleSearch'}>Search</h2>
            <input 
            type = "text" 
            value = { inputValue } 
            onChange = { handleInputChange }
            className ={'inputText'}
            ></input>
        </form>
    )

}

AddCategory.propTypes = {
    setCategory : PropTypes.func.isRequired,
}