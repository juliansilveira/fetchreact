import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [pokemonName, setPokemonName] = useState('')
  let [pokemonImg, setPokemonImg] = useState('')
  const [id, setId] = useState(1);

  function siguiente() {
    setId(id + 1);
  }


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(result => result.json())
      .then(data => {
        (setPokemonName(data.name)),
          (setPokemonImg(data.sprites.front_default))
      })

  }, [id])





  return (
    <>
      <div className='grid align-middle justify-center bg-orange-500 rounded-lg'>
        <h1 className='font-bold text-3xl'>{pokemonName.toUpperCase()}</h1>
        <img src={pokemonImg} alt="" className='w-60 h-60' />
        <button className='rounded p-5 bg-slate-600 text-gray-100' onClick={siguiente}> Siguiente </button>
        <p>© JSA </p>
      </div>
    </>
  )
}

export default App
