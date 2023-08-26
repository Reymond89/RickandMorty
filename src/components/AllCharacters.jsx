import React, { useState } from 'react'

export const AllCharacters = ({characters = []}) => {

  

  return (
    <div className='hero__section'>
        {characters.map( (item, index) => 

        <article key={index} className='card'>
            <img className='card__img' src={item.image} alt={item.image} />
            <div className='card__data'>
                <h2 className='card__title'>{item.name}</h2>
                <p className='card__specie'>Species: {item.species}</p>
                <p className='card__location'>Location: {item.location.name}</p>
                <span className='card__status'> {item.status}</span>
            </div>
        </article>
        )}

        
      
    </div>
  )
}
