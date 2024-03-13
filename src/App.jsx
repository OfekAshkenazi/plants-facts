import Header from "./components/Header"
import background from "./assets/images/background-stars.svg"



export default function app() {

  function handleClick() {
    alert("hi")
  }

  return (
    <main className="main-layout-big-img-hero">

      {/* <img src={background} alt="" /> */}

      <Header />


      <section className="main-layout spartan-reg">
        hello world
      </section>
      <button onClick={handleClick}>hello world</button>
    </main>
  )
}
