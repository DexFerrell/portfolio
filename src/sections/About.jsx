import { aboutCards, languages } from "../constants"

const About = () => {
  return (
    <section id="about" className="max-container mt-10 ">
      
      <div className="flex justify-between">
        <div className="flex  w-1/2 rounded-lg p-1 shadow-lg object-contain text-right">
          <h1 className="font-Nunitosans font-bold text-4xl text-right text-red-500">About Me </h1>

        </div>
        <div className="flex justify-around items-center w-1/2 bg-black rounded-lg p-1 shadow-lg object-contain"></div>
      </div>
      
      {/* <div className="flex max-container text-center justify-around">
        {aboutCards.map((section)=> (
          <div key={section.title} className="shadow-lg p-3 mx-10 rounded-lg bg-slate-100 font-Nunitosans w-1/3 h-2max-w-md">
          <h3 className="text-xl text-green-500 font-semibold">{section.title}</h3>
          <div className="max-w-">
          <p className=" font-Nunito font-semibold">{section.description}</p>
          </div>
        </div>
        ))}
      </div> */}
    </section>
  )
}

export default About