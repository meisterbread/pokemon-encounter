import Button from './frontend/components/Button'
import MainLayout from './frontend/layout/MainLayout'
import './App.css'
import Header from './frontend/components/Header'
import MenuLayout from './frontend/layout/MenuLayout'

function App() {
  return (
    <>
      <MainLayout>
        <Header>Pokemon: Wild Adventures</Header>
        <MenuLayout>
          <Button>PLAY</Button>
          <Button>EXIT</Button>
        </MenuLayout>
      </MainLayout>
    </>
  )
}

export default App
