import { useEffect } from 'react'
import PlanetsList from '../PlanetsList'
import useStarWarsStore from '../useStarWarsStore'

export default function () {
  const {
    errorMessage, getPlanets, setPlanets,
  } = useStarWarsStore()

  useEffect(() => {
    document.title = 'Planetas • React Sample'
  }, [])

  useEffect(() => {
    getPlanets()
    return () => {
      setPlanets([])
    }
  }, [getPlanets, setPlanets])

  return (
    <>
      <h1>Star Wars: Planetas</h1>
      { errorMessage
        ? (<span>Ocorreu um erro. Motivo: {errorMessage}</span>)
        : (<PlanetsList />)}
    </>
  )
}
