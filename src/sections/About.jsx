import { aboutCards, languages } from "../constants"

const About = () => {
  return (
    <section id="about" className="flex max-container justify-between mt-10 ">
      
      <div className="flex max-container">
        {aboutCards.map((section)=> (
          <div key={section.title} className="shadow-lg p-3 mx-2 rounded-lg bg-slate-100 font-Nunitosans max-w-md">
          <h3 className="text-xl text-green-500 font-semibold">{section.title}</h3>
          <div className="max-w-">
          <p className="">{section.description}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}

export default About