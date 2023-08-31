import React, { useState } from 'react'

export const AllCharacters = ({characters = []}) => {

  const characterStatus = {
    Alive: 'card__status-live',
    Dead: 'card__status-dead',
    unknown: 'card__status-unknown'
  }

  // var { Alive, Dead, unknown } = position

  return (
    <div className='hero__section'>
        {characters.map( (item, index) => 

        <article key={index} className='card'>
            <img className='card__img' src={item.image} alt={item.image} />
            <div className='card__data'>
                <h2 className='card__title'>{item.name}</h2>
                <p className='card__specie'>Species: {item.species}</p>
                <p className='card__location'>Location: {item.location.name}</p>
                {/* <span className={`card__status ${ item.status === 'Alive' ? 'card__status-live' 
                : item.status === 'unknown' ? 'card__status-unknown'
                 :  'card__status-dead' } `}> {item.status}</span> */}

      <span className={`card__status ${ characterStatus[item.status] }`}> {item.status}</span>
      
            </div>
        </article>
        )}

        
      
    </div>
  )
}
