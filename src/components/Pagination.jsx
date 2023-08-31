
import React from 'react'

export const Pagination = ( { onPrevious, onNext, prev, next } ) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

  return (

    <nav>
        <ul className='pagination__container'>
            
            {
                prev ? 
                <li className='pagination__item'>
                <button className='pagination__button' onClick={handlePrevious}>Previous</button>
                </li>
                : null
            }
            {
                next ? 
                <li className='pagination__item'>
                <button className='pagination__button' onClick={handleNext}>Next</button>
                </li>
                : null

            }
            
            
        </ul>
    </nav>

  )
}
