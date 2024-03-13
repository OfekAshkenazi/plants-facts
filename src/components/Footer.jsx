export default function Footer({plantData}) {
    console.log(plantData)
    return (
        <section className="footer">


            <div className="footer-item">
                <p>ROTATION TIME</p>
                <h2>{plantData?.rotation}</h2>
            </div>
            <div className="footer-item">
                <p>REVOLUTION TIME</p>
                <h2>{plantData?.revolution}</h2>
            </div>
            <div className="footer-item">
                <p>radius</p>
                <h2>{plantData?.radius}</h2>
            </div>
            <div className="footer-item">
                <p>AVERAGE TEMP.</p>
                <h2>{plantData?.temperature}</h2>
            </div>
            
        </section>
    )
}