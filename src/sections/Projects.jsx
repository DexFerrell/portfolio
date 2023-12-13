import { projects } from "../constants"

const Projects = () => {
  return (
    <section id='projects' className="p-5  max-container w-full flex justify-between flex-col items-center  text-white  mt-[8rem]">

      <div className="rounded-lg">

        <div className=' w-full p-4'>

          <h1 className='text-4xl font-Nunitosans font-bold text-green-400'>Recent Projects</h1>
          <h2 className='font-Nunito text-xl'> Below is a collection of 3 recent projects that I feel showcase my wide range of capabilities.</h2>

        </div>
        {projects.map((project) =>(
          <div key={project.title} className='w-full p-4 flex justify-between max-md:flex-col shadow-lg rounded-lg mb-6'>

            <div className="w-1/2 max-md:w-full flex flex-col justify-between">
              
              <h1 className='text-3xl font-Nunito font-extrabold text-black'>Project: {project.title}</h1>
              <p className="text-lg font-Nunito font-semibold">{project.description}</p>
              <a href={project.link} target="_blank" className="flex">
                <img className=" w-9 rounded-lg object-contain" src="git3.png" alt="logo" />
                <h4 className="text-2xl font-Nunito font-bold text-green-400 hover:text-green-500 p-3">GitHub Repository</h4>
              </a>

            </div>
            <div className="flex max-contain object-contain w-1/2 max-md:w-full justify-end max-md:justify-center">
              <img className="rounded-lg shadow-xl max-w-md object-contain w-[60%]" src={project.image} alt="Landing" />
            </div>

          </div>
        ))}
      </div>


    </section>
  )
}

export default Projects