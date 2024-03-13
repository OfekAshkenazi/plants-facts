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
    if (contentState === 0) return data = plantData?.overview.content
    if (contentState === 1) return data = plantData?.structure.content
    if (contentState === 2) return data = plantData?.geology.content
  }

  function getLinkToWiki() {
    let data = ''
    if (contentState === 0) return data = plantData?.overview.source
    if (contentState === 1) return data = plantData?.structure.source
    if (contentState === 2) return data = plantData?.geology.source
  }

  function getLinkForImg() {
    let data = ''
    if (contentState === 0) return data = plantData?.images.planet
    if (contentState === 1) return data = plantData?.images.internal
    if (contentState === 2) return data = plantData?.images.planet
  }

  function getSecondLinkForImg() {
    return plantData?.images.geology
  }

  return (
    <main className="main-layout-big-img-hero">

      <Header handlePlantState={handlePlantState} plantState={plantState} />

      <section className="main-layout">

        <div className="main-content-left-side">

          {plantData && <img className="image-one" src={require(`./assets/images/${getLinkForImg()}`)} alt="" />}
          {contentState === 2 && <img className="image-two" src={require(`./assets/images/${getSecondLinkForImg()}`)} alt="" />}

        </div>

        <div className="main-content-right-side">

          <h1>{plantData?.name}</h1>

          <p>
            {getContent()}
          </p>

          <div className="flex wiki"><p>Source:  Wikipedia</p> <a className="flex " target="_blank" href={getLinkToWiki()}><img re src={extarnalLink} alt="" /> </a></div>

          <section className="right-side-down-container">

            <div
              className={`right-down-item ${contentState === 0 && 'active'}  ${plantData?.name}`}
              onClick={() => handleChangeContentState(0)}
            >
              <p>01</p>
              <p>OVERVIEW</p>
            </div>
            <div className={`right-down-item ${contentState === 1 && 'active'} ${plantData?.name}`}
              onClick={() => handleChangeContentState(1)}>
              <p>02</p>
              <p>Internal Structure</p>
            </div>
            <div className={`right-down-item ${contentState === 2 && 'active'}  ${plantData?.name}`}
              onClick={() => handleChangeContentState(2)}>
              <p>03</p>
              <p>Surface Geology</p>
            </div>

          </section>

        </div>
      </section>
      <Footer plantData={plantData} />
    </main>

  )
}

