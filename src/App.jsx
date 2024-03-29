import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer propGreeting={'Hola me llamo Josue'} />
    </>
  )
}

export default App
