// import Nav from "./components/DaisyNav/DaisyNav"
import LineChart from "./components/LineChart/LineChart"
import NavBar from "./components/NavBar/NavBar"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {
  return (
    <>
    <NavBar/>
    {/* <Nav/> */}
      <h1 className='my-8 text-4xl text-center'>Vite + React</h1>
      <PriceOptions/>
      <LineChart/>
      <Phones/>
    </>
  )
}

export default App