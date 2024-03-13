import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import merImg from "./assets/images/planet-mercury.svg"
import extarnalLink from "./assets/images/icon-source.svg"

export default function App() {
  const [plantState, setPlantState] = useState(0)

  function handlePlantState(plant) {
    setPlantState(plant)
  }

  useEffect(() => {
  }, [plantState])

  return (
    <main className="main-layout-big-img-hero">

      <Header handlePlantState={handlePlantState} />

      <section className="main-layout">

        <div className="main-content-left-side">

          <img src={merImg} alt="" />

        </div>

        <div className="main-content-right-side">

          <h1>MERCURY</h1>

          <p>Mercury is the smallest planet in the Solar
            System and the closest to the Sun.
            Its orbit around the Sun takes 87.97 Earth days,
            the shortest of all the Sun's planets.
            Mercury is one of four terrestrial planets
            in the Solar System, and is a rocky body
            like Earth.
          </p>

          <div className="flex wiki"><p>Source:  Wikipedia</p> <img src={extarnalLink} alt="" /></div>

          <section className="right-side-down-container">

            <div className="right-down-item">
              <p>01</p>
              <p>OVERVIEW</p>
            </div>
            <div className="right-down-item">
              <p>02</p>
              <p>Internal Structure</p>
            </div>
            <div className="right-down-item">
              <p>03</p>
              <p>Surface Geology</p>
            </div>

          </section>


        </div>


      </section>

      <Footer />

    </main>

  )
}

