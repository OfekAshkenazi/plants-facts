export default function Header({handlePlantState}) {
    return (
        <section>

            <header>

                <div className="header-left">
                    THE PLANETS
                </div>

                <div className="header-right flex">
                    <div onClick={() => handlePlantState("mercury")} className="header-item">mercury</div>
                    <div onClick={() => handlePlantState("venus")} className="header-item">venus</div>
                    <div onClick={() => handlePlantState("earth")} className="header-item">earth</div>
                    <div onClick={() => handlePlantState("mars")} className="header-item">mars</div>
                    <div onClick={() => handlePlantState("jupiter")} className="header-item">jupiter</div>
                    <div onClick={() => handlePlantState("saturn")} className="header-item">saturn</div>
                    <div onClick={() => handlePlantState("uranus")} className="header-item">uranus</div>
                    <div onClick={() => handlePlantState("neptune")} className="header-item">neptune</div>
                </div>

            </header>

            <div className="border"></div>
            
        </section>
    )
}