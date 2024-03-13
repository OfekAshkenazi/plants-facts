import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

import extarnalLink from "./assets/images/icon-source.svg"

import { dataService } from "./services/dataService"


export default function App() {
  const [plantState, setPlantState] = useState('Mercury')

  const [plantData, setPlantData] = useState(null)

  const [contentState, setContentState] = useState(0)

  useEffect(() => {
    getPlantData()

  }, [plantState])

  function getPlantData() {
    const data = dataService.getDataOfPlants()
    const filterData = data.filter((plant, idx) => plant.name === plantState)
    setPlantData(prevPlantData => filterData[0])
  }

  function handlePlantState(plant) {
    setPlantState(plant)
  }

  function handleChangeContentState(num) {
    setContentState(prev => num)
  }

  function getContent() {
    let data = ''
    if(contentState === 0) return data = plantData?.overview.content
    if(contentState === 1) return data = plantData?.structure.content
    if(contentState === 2) return data = plantData?.geology.content
  }

  return (
    <main className="main-layout-big-img-hero">

      <Header handlePlantState={handlePlantState} plantState={plantState} />

      <section className="main-layout">

        <div className="main-content-left-side">

          {plantData && <img src={require(`./assets/images/${plantData?.images.planet}`)} alt="" />}

        </div>

        <div className="main-content-right-side">

          <h1>MERCURY</h1>

          <p>
            {getContent()}
          </p>

          <div className="flex wiki"><p>Source:  Wikipedia</p> <img src={extarnalLink} alt="" /></div>

          <section className="right-side-down-container">

            <div
              className={`right-down-item ${contentState === 0 && 'active'}`}
              onClick={() => handleChangeContentState(0)}
            >
              <p>01</p>
              <p>OVERVIEW</p>
            </div>
            <div className={`right-down-item ${contentState === 1 && 'active'}`}
              onClick={() => handleChangeContentState(1)}>
              <p>02</p>
              <p>Internal Structure</p>
            </div>
            <div className={`right-down-item ${contentState === 2 && 'active'}`}
              onClick={() => handleChangeContentState(2)}>
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

