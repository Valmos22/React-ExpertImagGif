import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategorias} ) => {

    const [inputValue, setInputValue] = useState('');

    const inputChange = (e) => {
        setInputValue(e.target.value)
        // console.log(e.target.value)
    }

    const agregarACategorias = (e) => {
        e.preventDefault();
        // console.log('hugo')
        setCategorias( cats =>[ inputValue, ...cats ] );
    }

    return (
        <form className="input" onSubmit={ agregarACategorias }>
            <input
                id="nombre"
                type='text'
                value={ inputValue }
                onChange={ inputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    saludo: PropTypes.func.isRequired
}

export default AddCategory;