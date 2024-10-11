import { Routes, useNavigate, Route } from 'react-router-dom'
import Home from './pages/Home'
import SelectPokemon from './pages/SelectPokemon'
import './App.css'
import Area from './pages/Area'

function App() {
  const nav = useNavigate()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/select-pokemon' element={<SelectPokemon/>}/>
        <Route path='/area' element={<Area/>}/>
      </Routes>
    </>
  )
}

export default App
