export default function Header({handlePlantState,plantState}) {
    return (
        <section>

            <header>

                <div className="header-left">
                    THE PLANETS
                </div>

                <div className="header-right flex">
                    <div onClick={() => handlePlantState("Mercury")} className={`header-item ${plantState === "Mercury" && "active"}`}>mercury</div>
                    <div onClick={() => handlePlantState("Venus")} className={`header-item ${plantState === "Venus" && "active"}`}>venus</div>
                    <div onClick={() => handlePlantState("Earth")} className={`header-item ${plantState === "Earth" && "active"}`}>earth</div>
                    {/* <div onClick={() => handlePlantState("mars")} className="header-item">mars</div>
                    <div onClick={() => handlePlantState("jupiter")} className="header-item">jupiter</div>
                    <div onClick={() => handlePlantState("saturn")} className="header-item">saturn</div>
                    <div onClick={() => handlePlantState("uranus")} className="header-item">uranus</div>
                    <div onClick={() => handlePlantState("neptune")} className="header-item">neptune</div> */}
                </div>

            </header>

            <div className="border"></div>
            
        </section>
    )
}