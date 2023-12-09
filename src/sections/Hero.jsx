import { logos } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="p-5 pt-[5rem] max-container w-full flex justify-between items-center  text-white">

      <div className="p-3 my-10 rounded-lg z-10 flex  max-contain w-1/2 justify-center m-2 items-end max-md:hidden ">
        <img src="propic.png" alt="Dex" className="w-[60%] object-contain shadow-xl rounded-lg bg-black border-gray-500 border-3"/>
      </div>

      <div className="flex flex-col px-20 rounded-lg w-1/2 justify-center max-md:p-0 max-md:w-full pb-11 shadow-xl">
        <div className="max-w-lg ">
          <h1 className="font-Nunitosans font-bold text-8xl">Dex F<span className="text-green-400">err</span>ell</h1>
          <h3 className="font-Nunitosans font-bold text-3xl">Full-Stack Web Developer</h3>
          <div className="flex max-contain justify-between w-[90%]">
            {logos.map((logo) =>(
              <div key={logo.logo} className="flex justify-around items-center w-11 rounded-lg p-1 shadow-lg bg-white object-contain">
                <img src={logo.src} alt={logo.logo} className="object-contain" />
                
              </div>
            ))}
          </div>
          <p className="font-Nunito font-semibold my-4">Experienced web developer who has a healthy infatuation with writing elegant and efficient code.</p>
        </div>
        
        <div className='flex mt-6 text-white' >
          <button href="" className='flex justify-center items-center gap-2 px-7 py-4  font-Nunito font-bold text-lg leading-none bg-slate-400  hover:bg-slate-600 rounded-lg shadow-xl mr-2'>Resume</button>
          <button className='flex justify-center items-center gap-2 px-7 py-4 font-Nunito font-bold text-lg leading-none bg-green-400 hover:bg-green-600 rounded-lg shadow-xl'>Email Me</button>
        </div>
      </div>
      
    </section>
  )
}

export default Hero