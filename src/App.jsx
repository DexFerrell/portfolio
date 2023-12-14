import Nav from "./components/Nav"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
const App =() => (
  <main className="relative pt-5 bg-gradient-to-tl from-gray-300 to-black">
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
    <section>
      <Contact />
    </section>
    <section>
      <Footer />
    </section>

  </main>
)


export default App