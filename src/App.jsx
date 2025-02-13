// import Nav from "./components/DaisyNav/DaisyNav"
import NavBar from "./components/NavBar/NavBar"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {
  return (
    <>
    <NavBar/>
    {/* <Nav/> */}
      <h1 className='my-8 text-4xl text-center'>Vite + React</h1>
      <PriceOptions/>
    </>
  )
}

export default App