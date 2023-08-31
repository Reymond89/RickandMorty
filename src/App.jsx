import { useEffect, useState } from 'react'
import { Navbar } from './components/navbar'
import './style.css'
import { AllCharacters } from './components/AllCharacters';
import { SearchCharacter } from './components/SearchCharacter';
import { Pagination } from './components/Pagination';


function App() {

  const [characters, setCharacters] = useState([])
  const [texto, setText] = useState('')
  const [info, setInfo] = useState({})

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fechCharacters = (url) =>{

    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results)
      setInfo(data.info)
    } )
    .catch(error => console.log(error))

  }

  const onPrevious = () =>{
    fechCharacters(info.prev)
  }

  const onNext = () =>{
    fechCharacters(info.next)
    
  }

  useEffect(() => {
    fechCharacters(initialUrl)
  }, [])

  const charactersFilter = characters.filter((character) =>
  character.name.toLocaleLowerCase().includes(texto.toLocaleLowerCase())
)
  
  
 

  return (
    <>
    <Navbar />
    <div className='container'>
      <SearchCharacter texto={ texto } setText={setText}/>
      <Pagination  prev={ info.prev } 
                   next={ info.next } 
                   onPrevious={onPrevious}
                   onNext={onNext} />
      <AllCharacters characters={charactersFilter}/>
      <Pagination  prev={ info.prev } 
                   next={ info.next } 
                   onPrevious={onPrevious}
                   onNext={onNext} />
    </div>
   
    </>
  )
}

export default App
