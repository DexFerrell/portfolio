const Hero = () => {
  return (
    <section id="home" className="p-5 max-container w-full flex justify-between items-center shadow-lg rounded-md">

      <div className="p-1 rounded-full shadow-lg z-10 bg-inherit">
        <img width={610} src="me1.jpg" alt="Dex"/>
      </div>

      <div className="mt-10 items-center p-3 rounded-lg">
        <div className="max-w-lg ">
          <h1 className="font-Nunitosans font-bold text-8xl">Dex F<span className="text-red-500">err</span>ell</h1>
          <h3 className="font-Nunitosans font-bold text-3xl">Full-Stack Developer</h3>
          <p className="font-Nunito font-semibold">Experienced web developer who has a healthy infatuation with writing elegant and efficient code.</p>
        </div>
        
        <div className='flex mt-6 text-white' >
          <button href="" className='flex justify-center items-center gap-2 px-7 py-4 border font-Nunito font-bold text-lg leading-none bg-red-500 rounded-full shadow-lg'>Resume</button>
          <button className='flex justify-center items-center gap-2 px-7 py-4 border font-Nunito font-bold text-lg leading-none bg-green-500 rounded-full shadow-lg'>Email Me</button>
        </div>
      </div>
      
    </section>
  )
}

export default Hero