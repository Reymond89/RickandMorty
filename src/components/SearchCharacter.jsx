
import React, { useState } from 'react'

export const SearchCharacter = ({ texto, setText }) => {


    const handleInputChange = ({target}) =>{
        setText(target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(texto);
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='input__container'>
            <input className='input__searcher' type="text" placeholder='Search for Characters' value={texto} onChange={ handleInputChange }/>
            <button type="submit" className='input__button'>Search</button>
        </form>
       
    </>
    
  )
}
