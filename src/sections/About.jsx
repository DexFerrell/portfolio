import { aboutCards, languages, stats } from "../constants"

const About = () => {
  return (
    <section id="about" className="max-container mt-[10rem] flex justify-between max-lg:flex-col p-[3rem] max-md:p-3 text-white bg-slate-400 rounded-lg shadow-xl">
      
        <div className="w-1/2 max-lg:w-full rounded-lg p-3 object-contain shadow-xl">

          <h2 className="font-Nunitosans font-bold text-xl text-green-400">| About</h2>
          
          <h3 className=" text-3xl font-Nunitosans font-bold text-black"> I am a full-stack web developer!</h3>
          <p className="text-lg font-Nunito font-semibold p-0">Striving to impliment my knowledge and experience in a developer position in any stack. Looking for a growth-minded, detail-oriented company so that we can help eachother grow!</p>

          <h4 className="text-xl font-Nunito font-medium mt-5">Languages:</h4>
          
            <ul className="flex justify-around  flex-wrap text-lg font-Nunito font-semibold list-disc mx-10 max-md:mx-2">
              {languages.map((lang) =>(
                <li key={lang.language} className="m-4">{lang.language}</li>
              ))}
            </ul>
          
          

        </div>
        <div className=" items-center w-1/2 max-lg:w-full rounded-lg p-1 shadow-xl object-contain">

          <div  className="flex justify-between w-full">
            {stats.map((stat) => (
              <div key={stat.title} className="flex flex-col w-1/3 p-2 text-left">
                <h1 className=" text-[4rem] max-sm:text-[3rem] font-Nunitosans font-bold text-black">{stat.amount}</h1>
                <p className="text-xl font-Nunito font-bold text-green-400">{stat.title}</p>
              </div>
            ))}
          </div>
          <br />
          <div className="">
            <p className="text-lg font-Nunito font-semibold text-c p-3">Using javaScript and its popular frameworks, I have developed many applications. Most of my freelance commissions involved front-end focused programming, while my agency (100Devs. LLC.) project tasks were back-end  or full stack which gives me a deep well  of project experience to draw from going forward.
            </p>
          </div>

        </div>

    </section>
  )
}

export default About