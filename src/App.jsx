import { useEffect, useState } from 'react'
import { Navbar } from './components/navbar'
import './style.css'
import { AllCharacters } from './components/AllCharacters';
import { SearchCharacter } from './components/SearchCharacter';


function App() {

  const [characters, setCharacters] = useState([])
  const [texto, setText] = useState('')

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fechCharacters = (url) =>{

    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))

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
    <SearchCharacter texto={ texto } setText={setText}/>
    <AllCharacters characters={charactersFilter}/>
    </>
  )
}

export default App
