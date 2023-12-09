import Nav from "./components/Nav"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
const App =() => (
  <main className="relative pt-5 bg-gray-500 ">
    <Nav />
    <section className="padding">
      <Hero />
    </section>
    <section>
      <About />
    </section>
    <section>
      <Projects />
    </section>

  </main>
)


export default App