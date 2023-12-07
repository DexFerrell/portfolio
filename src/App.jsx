import Nav from "./components/Nav"
import About from "./sections/About"
import Hero from "./sections/Hero"
const App =() => (
  <main className="relative  ">
    <Nav />
    <section className="padding">
      <Hero />
    </section>
    <section>
      <About />
    </section>

  </main>
)


export default App