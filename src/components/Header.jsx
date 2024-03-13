export default function Header({ handlePlantState, plantState }) {
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
                    <div onClick={() => handlePlantState("Mars")} className={`header-item ${plantState === "Mars" && "active"}`}>mars</div>
                    <div onClick={() => handlePlantState("Jupiter")} className={`header-item ${plantState === "Jupiter" && "active"}`}>jupiter</div>
                    <div onClick={() => handlePlantState("Saturn")} className={`header-item ${plantState === "Saturn" && "active"}`}>saturn</div>
                    <div onClick={() => handlePlantState("Uranus")} className={`header-item ${plantState === "Uranus" && "active"}`}>uranus</div>
                    <div onClick={() => handlePlantState("Neptune")} className={`header-item ${plantState === "Neptune" && "active"}`}>neptune</div>
                </div>

            </header>

            <div className="border"></div>

        </section>
    )
}