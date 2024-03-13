import { useEffect, useState } from "react"
import Header from "./components/Header"

export default function App() {
  const [plantState, setPlantState] = useState(0)

  function handlePlantState(plant) {
    setPlantState(plant)
  }

  useEffect(() => {
    console.log(plantState)
  }, [plantState])

  return (
    <main className="main-layout-big-img-hero">

      <Header handlePlantState={handlePlantState}/>

      <section className="main-layout">

        hello world
      </section>

    </main>

  )
}

